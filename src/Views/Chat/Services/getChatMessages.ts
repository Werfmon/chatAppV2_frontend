import EnvConfig from "../../../../EnvConfig";
import { getTokenFromStorage } from "../../../Helper/getTokenFromStorage";
import { Dispatch, SetStateAction } from "react";
import { Message } from "../Types/Message";

export function getChatMessages(
  chatUuid: string,
  limit: number,
  offset: number,
  setMessages: Dispatch<SetStateAction<Array<Message>>>
) {
  getTokenFromStorage().then((token) => {
    fetch(
      `${EnvConfig.API}/chat/${chatUuid}/messages?limit=${limit}&offset=${offset}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) {
          setMessages(data.data);
        }
        console.info(data.message);
      })
      .catch((err) => console.error(err));
  });
}
