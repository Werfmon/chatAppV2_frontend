import { getTokenFromStorage } from "../../../Helper/getTokenFromStorage";
import { Dispatch, SetStateAction } from "react";
import { API } from "@env";;
import { ErrorProps } from "../../_Components/ErrorHanding/Types/ErrorProps";
import { removeError } from "../../_Components/ErrorHanding/Error";
import { Status } from "../../_Components/ErrorHanding/Helper/Status";

export function getAllAvailableUsers(
  search: string,
  setUsers: Dispatch<SetStateAction<Object[]>>,
  setError: Dispatch<SetStateAction<ErrorProps>>
) {
  getTokenFromStorage().then((token) => {
    fetch(`${API}/person/all-available?search=${search}`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    .then(res => {
      if (!res.ok) {
        setError({message: 'Users wasn\'t loaded, try restart application or logout', status: Status.WARNING, show: true})
        removeError(setError);
      }
      return res.json()
    })
    .then(data => {
      if (data.ok) {
        setUsers(data.data);
      } else {
        setError({message: 'Something went wrong, cannot load users', status: Status.WARNING, show: true})
        removeError(setError);
      }
      console.info(data.message);
    }).catch((err) => {
      setError({message: 'Something went wrong, cannot load users', status: Status.WARNING, show: true})
      removeError(setError);
    });
  }).catch((err) => {
    setError({message: 'Error, try logout and login again', status: Status.ERROR, show: true})
    removeError(setError);
  });
}
