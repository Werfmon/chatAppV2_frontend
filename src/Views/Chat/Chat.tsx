import React, { useEffect, useRef, useState } from "react";

import { MainView } from "../_Components/MainView";
import Navbar from "./Components/Navbar/Navbar";
import FriendMessage from "./Components/Message/FriendMessage/FriendMessage";
import UserMessage from "./Components/Message/UserMessage/UserMessage";
import TypeInput from "./Components/TypeInput/TypeInput";
import { getChatMessages } from "./Services/getChatMessages";
import { Message } from "./Types/Message";
import { MessagesTreeType } from "./Types/MessagesTreeType";
import { ErrorProps } from "../_Components/ErrorHanding/Types/ErrorProps";
import { Status } from "../_Components/ErrorHanding/Helper/Status";
import Error from "../_Components/ErrorHanding/Error";
import { whoIsFriend } from "./Services/whoIsFriend";
import { wsSetupURL } from "./Services/wsSetupURL";
import { establishConnection } from "./Services/establishConnection";
import { sendData } from "./Services/sendData";
import { handleScroll } from "./Services/handleScroll";
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView } from "react-native";
import { Container } from "./Components/Container";

const Chat = ({ route }: any) => {
  const WS_URL = wsSetupURL(
    route.params.chat.uuid,
    route.params.currentUser.uuid
  );
  const friend = whoIsFriend(
    route.params.chat.friendship.mainPerson,
    route.params.chat.friendship.person,
    route.params.currentUser
  );
  const chatUuid = route.params.chat.uuid;
  const LAST_MESSAGES_COUNT = 20;

  const [webSocket, setWebSocket] = useState<WebSocket>(new WebSocket(WS_URL));
  const [messages, setMessages] = useState<Array<Message>>([]);
  const [oldMessagesRender, setOldMessagesRender] = useState<Array<Message>>(
    []
  );
  const [messagesTree, setMessagesTree] = useState<Array<MessagesTreeType>>([]);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [error, setError] = useState<ErrorProps>({
    message: "",
    status: Status.INFO,
  });
  const scrollViewRef = useRef<any>();

  function scroll() {
    scrollViewRef.current.scrollToEnd({ animated: true });
  }
  
  useEffect(() => {
    establishConnection(setWebSocket, WS_URL, setError);
    getChatMessages(
      chatUuid,
      LAST_MESSAGES_COUNT,
      LAST_MESSAGES_COUNT * pageNumber,
      setMessages,
      setError
    );
  }, [, pageNumber]);
  useEffect(() => {
    setOldMessagesRender([...messages, ...oldMessagesRender]);
  }, [messages]);
  
  webSocket.onmessage = (event: WebSocketMessageEvent) => {
    setMessagesTree([
      ...messagesTree,
      { currentUser: false, text: event.data },
    ]);
    scroll();
  };

  return (
    <MainView>
      <Error message={error.message} status={error.status} show={error.show} />
      <Navbar image={friend.base64Image} nickname={friend.nickname} />
      <ScrollView
        onScroll={(event: NativeSyntheticEvent<NativeScrollEvent>) => handleScroll(event, scrollViewRef, setPageNumber, pageNumber)}
        ref={scrollViewRef}
        onContentSizeChange={() => {
          
          if (pageNumber === 0) {
            scroll();
          }
        }}
      >
        <Container>
          {oldMessagesRender?.map((message: Message, i: number) => {
            return message.person.uuid === route.params.currentUser.uuid ? (
              <UserMessage key={i} text={message.text} />
            ) : (
              <FriendMessage key={i} text={message.text} />
            );
          })}
          {messagesTree?.map((message: MessagesTreeType, i: number) => (
            <>
              {message.currentUser ? (
                <UserMessage key={i} text={message.text} />
              ) : (
                <FriendMessage key={i} text={message.text} />
              )}
            </>
          ))}
        </Container>
      </ScrollView>
      <TypeInput
        send={(text: string) =>
          sendData(text, webSocket, messagesTree, setMessagesTree, scroll)
        }
      />
    </MainView>
  );
};
export default Chat;
