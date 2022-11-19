import { Dispatch, SetStateAction } from "react";
import EnvConfig from "../../../../EnvConfig";
import { getTokenFromStorage } from "../../../Helper/getTokenFromStorage";
import { removeError } from "../../_Components/ErrorHanding/Error";
import { Status } from "../../_Components/ErrorHanding/Helper/Status";
import { ErrorProps } from "../../_Components/ErrorHanding/Types/ErrorProps";
import { User } from "../Types/User";

export function getLoggedUser(setUser: Dispatch<SetStateAction<User | null>>, setError: Dispatch<SetStateAction<ErrorProps>>) {
  getTokenFromStorage()
    .then((token) => {
      fetch(`${EnvConfig.API}/auth/logged`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.ok) {
            setUser(data.data);
          } else {
            setError({message: 'Chats didn\'t load, try restart application or logout', status: Status.WARNING, show: true})
            removeError(setError);
          }
          console.info(data.message);
        }).catch((err) => {
          console.warn(err)
          setError({message: 'Error, try restart application or logout', status: Status.WARNING, show: true})
          removeError(setError);
        });
    })
    .catch((err) => {
      console.warn(err)
      setError({message: 'Error, try logout and login again', status: Status.WARNING, show: true})
      removeError(setError);
    });
}
