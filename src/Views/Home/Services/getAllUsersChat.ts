import { getTokenFromStorage } from "../../../Helper/getTokenFromStorage";
import EnvConfig from "../../../../EnvConfig";
import { Dispatch, SetStateAction } from "react";
import { ErrorProps } from "../../_Components/ErrorHanding/Types/ErrorProps";
import { Status } from "../../_Components/ErrorHanding/Helper/Status";
import { removeError } from "../../_Components/ErrorHanding/Error";

export function getAllUsersChat(setUserChats: any, setError: Dispatch<SetStateAction<ErrorProps>>) {
  getTokenFromStorage()
    .then((token) => {
      fetch(`${EnvConfig.API}/chat/current-person`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.ok) {
            setUserChats(data.data);
          } else {
            setError({message: 'Chats didn\'t load, try restart application or logout', status: Status.WARNING, show: true})
            removeError(setError);
          }
          console.info(data.message);
          console.log(data.data.map((c: any) => c.friendship.person.nickname))
        })
        .catch((err) => {
          console.warn(err)
          setError({message: 'Something went wrong, try restart application', status: Status.WARNING, show: true})
          removeError(setError);
        });
    })
    .catch((err) => {
      console.error(err)
      setError({message: 'Error, try logout and login again', status: Status.ERROR, show: true})
      removeError(setError);
    });
}
