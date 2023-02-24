import { Dispatch, SetStateAction } from "react";
import { API } from "@env";;
import { getTokenFromStorage } from "../../../Helper/getTokenFromStorage";
import { removeError } from "../../_Components/ErrorHanding/Error";
import { Status } from "../../_Components/ErrorHanding/Helper/Status";
import { ErrorProps } from "../../_Components/ErrorHanding/Types/ErrorProps";
import { User } from "../Types/User";

export function getLoggedUser(setUser: Dispatch<SetStateAction<User | null>>, setError: Dispatch<SetStateAction<ErrorProps>>) {
  getTokenFromStorage()
    .then((token) => {
      fetch(`${API}/auth/logged`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          if (!res.ok) {
            setError({message: 'Cannot load avatar, try restart application or logout', status: Status.WARNING, show: true})
            removeError(setError);
          }
          return res.json();
        })
        .then((data) => {
          if (data.ok) {
            setUser(data.data);
          } else {
            setError({message: 'Cannot load avatar, try restart application or logout', status: Status.WARNING, show: true})
            removeError(setError);
          }
          console.info(data.message);
        }).catch((err) => {
          setError({message: 'Error, try restart application or logout', status: Status.WARNING, show: true})
          removeError(setError);
        });
    })
    .catch((err) => {
      setError({message: 'Error, try logout and login again', status: Status.ERROR, show: true})
      removeError(setError);
    });
}
