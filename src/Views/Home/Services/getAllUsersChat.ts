import { getTokenFromStorage } from "../../../Helper/getTokenFromStorage";
import { API } from "@env";;
import { Dispatch, SetStateAction } from "react";
import { ErrorProps } from "../../_Components/ErrorHanding/Types/ErrorProps";
import { Status } from "../../_Components/ErrorHanding/Helper/Status";
import { removeError } from "../../_Components/ErrorHanding/Error";

export function getAllUsersChat(setUserChats: any, setError: Dispatch<SetStateAction<ErrorProps>>, search: string, limit: number = 20, offset: number = 0) {
  getTokenFromStorage()
    .then((token) => {
      fetch(`${API}/chat/current-person?search=${search}&limit=${limit}&offset=${offset}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.ok) {
            setUserChats(data.data);
          } else {
            setError({message: 'Chats didn\'t load, try restart application or logout', status: Status.ERROR, show: true})
            removeError(setError);
          }
        })
        .catch((err) => {
          setError({message: 'Something went wrong, try restart application', status: Status.WARNING, show: true})
          removeError(setError);
        });
    })
    .catch((err) => {
      setError({message: 'Error, try logout and login again', status: Status.ERROR, show: true})
      removeError(setError);
    });
}
