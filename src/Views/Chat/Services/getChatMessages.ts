import EnvConfig from "../../../../EnvConfig";
import { getTokenFromStorage } from "../../../Helper/getTokenFromStorage";
import { Dispatch, SetStateAction } from "react";
import { Message } from "../Types/Message";
import { ErrorProps } from "../../_Components/ErrorHanding/Types/ErrorProps";
import { removeError } from "../../_Components/ErrorHanding/Error";
import { Status } from "../../_Components/ErrorHanding/Helper/Status";

export function getChatMessages(
  chatUuid: string,
  limit: number,
  offset: number,
  setMessages: Dispatch<SetStateAction<Array<Message>>>,
  setError: Dispatch<SetStateAction<ErrorProps>>,
) {
  getTokenFromStorage().then((token) => {
    fetch(`${EnvConfig.API}/chat/${chatUuid}/messages?limit=${limit}&offset=${offset}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (!res.ok) {
          setError({message: 'Chat didn\'t load, try restart application or logout', status: Status.WARNING, show: true})
          removeError(setError);
        }
        return res.json()
      })
      .then((data) => {
        if (data.ok) {
          setMessages(data.data);
        } else {
          setError({message: 'Chat didn\'t load, try restart application or logout', status: Status.WARNING, show: true})
          removeError(setError);
        }
      })
      .catch((err) => {
        console.warn(err)
        setError({message: 'Error, try restart application or logout', status: Status.WARNING, show: true})
        removeError(setError);
      });
  }).catch((err) => {
    console.warn(err)
    setError({message: 'Error, try logout and login again', status: Status.ERROR, show: true})
    removeError(setError);
  });;
}
