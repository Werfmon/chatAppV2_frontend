import { Dispatch, SetStateAction } from "react";
import { MessagesTreeType } from "../Types/MessagesTreeType";

export function sendData(text: string, webSocket: WebSocket, messagesTree: Array<MessagesTreeType>, setMessagesTree: Dispatch<SetStateAction<Array<MessagesTreeType>>>, scroll: Function) {
    if (webSocket !== undefined) {
      webSocket.send(text);
      setMessagesTree([...messagesTree, { currentUser: true, text: text }]);
      scroll()
    }
  };