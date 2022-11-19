import React, { useEffect, useState } from "react";

import { MainView } from "../_Components/MainView";
import Navbar from "./Components/Navbar/Navbar";
import ChatContainer from "./Components/ChatContainer/ChatContainer";
import FriendMessage from "./Components/Message/FriendMessage/FriendMessage";
import UserMessage from "./Components/Message/UserMessage/UserMessage";
import TypeInput from "./Components/TypeInput/TypeInput";
import { getTokenFromStorage } from "../../Helper/getTokenFromStorage";
import EnvConfig from "../../../EnvConfig";
import { getChatMessages } from "./Services/getChatMessages";
import { Message } from "./Types/Message";
import { MessagesTreeType } from "./Types/MessagesTreeType";
import { Gap } from "./Components/MessageGroup/Container";
import { ErrorProps } from "../_Components/ErrorHanding/Types/ErrorProps";
import { Status } from "../_Components/ErrorHanding/Helper/Status";
import Error from "../_Components/ErrorHanding/Error";

const Chat = ({ route }: any) => {
  const WS_URL = `${EnvConfig.WS_API}/socket-chat/${route.params.chat.uuid}${route.params.currentUser.uuid}`;

  const friend =
    route.params.chat.friendship.person.uuid === route.params.currentUser.uuid
      ? route.params.chat.friendship.mainPerson
      : route.params.chat.friendship.person;
  const chatUuid = route.params.chat.uuid;
  const LAST_MESSAGES_COUNT = 20;

  const [webSocket, setWebSocket] = useState<WebSocket>(new WebSocket(WS_URL));
  const [messages, setMessages] = useState<Array<Message>>([]);
  const [messagesTree, setMessagesTree] = useState<Array<MessagesTreeType>>([]);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [nextMessageSame, setNextMessageSame] = useState<boolean>(false);
  const [error, setError] = useState<ErrorProps>({message: '', status: Status.INFO});

  useEffect(() => {
    getChatMessages(
      chatUuid,
      LAST_MESSAGES_COUNT,
      LAST_MESSAGES_COUNT * pageNumber,
      setMessages,
      setError
    );
  }, []);

  useEffect(() => {
    getTokenFromStorage().then((token) => {
      const headers = { Authorization: "" };
      headers["Authorization"] = `Bearer ${token}`;
      console.log("Auth token: " + headers.Authorization);

      const webSocketLocal = new WebSocket(WS_URL, null, { headers });

      setWebSocket(webSocketLocal);

      webSocketLocal.onopen = () => {
        console.info("Connection is opened");
      };

      webSocketLocal.onerror = (e: any) => {
        console.error(e);
      };
    });
  }, []);

  webSocket.onmessage = (event: WebSocketMessageEvent) => {
    console.log(event);
    setMessagesTree([
      ...messagesTree,
      { currentUser: false, text: event.data },
    ]);
  };

  const sendData = (text: string) => {
    console.log(text);

    if (webSocket !== undefined) {
      webSocket.send(text);
      setMessagesTree([...messagesTree, { currentUser: true, text: text }]);
    }
  };
  return (
    <MainView>
      <Error message={error.message} status={error.status} show={error.show}/>
      <Navbar image={friend.base64Image} nickname={friend.nickname} />
      <ChatContainer>
        {messages?.map((message: Message, i: number) => {
          return message.person.uuid === route.params.currentUser.uuid ? (
              <UserMessage key={i} text={message.text} />
          ) : (
              <FriendMessage key={i} text={message.text} />
          );
        })}

        {messagesTree?.map((message: MessagesTreeType, i: number) => (
          <>
            {message.currentUser ? (
              <UserMessage text={message.text} />
            ) : (
              <FriendMessage text={message.text} />
            )}
          </>
        ))}
      </ChatContainer>
      <TypeInput send={(text: string) => sendData(text)} />
    </MainView>
  );
};
export default Chat;
