import { API } from "@env";;
import { getTokenFromStorage } from "../../../Helper/getTokenFromStorage";
import { Dispatch, SetStateAction } from "react";
import { ErrorProps } from "../../_Components/ErrorHanding/Types/ErrorProps";
import { removeError } from "../../_Components/ErrorHanding/Error";
import { Status } from "../../_Components/ErrorHanding/Helper/Status";

export function getAllWaitingUsers(setUsers: any, setError: Dispatch<SetStateAction<ErrorProps>>) {
  
  getTokenFromStorage().then((token) => {
    fetch(`${API}/friendship/all/waiting`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) {
          setUsers(data.data);
        } else {
          setError({message: data.message, status: Status.WARNING, show: true})
          removeError(setError);
        }
        console.info(data.message);
      })
      .catch((err) => {
        setError({message: 'Something went wrong', status: Status.WARNING, show: true})
        removeError(setError);
      });
  }).catch((err) => {
    setError({message: 'Error, try logout and login again', status: Status.ERROR, show: true})
    removeError(setError);
  });;
}
