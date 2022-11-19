import { Dispatch, SetStateAction } from "react";
import { getTokenFromStorage } from "../../../Helper/getTokenFromStorage";
import EnvConfig from "../../../../EnvConfig";
import { removeError } from "../../_Components/ErrorHanding/Error";
import { Status } from "../../_Components/ErrorHanding/Helper/Status";
import { ErrorProps } from "../../_Components/ErrorHanding/Types/ErrorProps";

export function addUser(
  uuid: string,
  setRefresh: Dispatch<SetStateAction<number>>,
  refresh: number,
  setError: Dispatch<SetStateAction<ErrorProps>>
) {
  getTokenFromStorage()
    .then((token) => {
      fetch(`${EnvConfig.API}/friendship/${uuid}/add`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => {
        if (!res.ok) {
          setError({message: 'Error, try again', status: Status.WARNING, show: true})
          removeError(setError);
        }
        return res.json();
      }).then(data => {
        if (data.ok) {
          setRefresh(refresh + 1);
        } else {
          setError({message: 'Error, cannot add user, try restart application or logout', status: Status.WARNING, show: true})
          removeError(setError);
        }
        console.info(data.message);
      })
    })
    .catch((err) => {
      console.warn(err)
      setError({message: 'Error, try logout and login again', status: Status.ERROR, show: true})
      removeError(setError);
    });
}
