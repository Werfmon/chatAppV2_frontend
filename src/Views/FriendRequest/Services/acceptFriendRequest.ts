import { getTokenFromStorage } from "../../../Helper/getTokenFromStorage";
import { Dispatch, SetStateAction } from "react";
import { API } from "@env";;
import { ErrorProps } from "../../_Components/ErrorHanding/Types/ErrorProps";
import { removeError } from "../../_Components/ErrorHanding/Error";
import { Status } from "../../_Components/ErrorHanding/Helper/Status";

export function acceptFriendRequest(uuid: string, refresh: number, setRefresh: Dispatch<SetStateAction<number>>, setError: Dispatch<SetStateAction<ErrorProps>>): void {
    getTokenFromStorage().then((token) => {
      fetch(`${API}/friendship/${uuid}/accept`, {
        method: "PUT",
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.message);
          if (data.ok) {
            setRefresh(refresh + 1);
            setError({message: 'user was accepted', status: Status.NOTI, show: true})
            removeError(setError);
          } else {
            setError({message: 'Something went wrong, user wasn\'t accepted', status: Status.WARNING, show: true})
            removeError(setError);
          }
        })
        .catch((err) => {
          setError({message: 'Something went wrong, user wasn\'t accepted', status: Status.WARNING, show: true})
          removeError(setError);
        });
    }).catch((err) => {
      setError({message: 'Error, try logout and login again', status: Status.ERROR, show: true})
      removeError(setError);
    });
  }