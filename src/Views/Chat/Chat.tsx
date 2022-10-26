import React, { EffectCallback, useEffect, useState } from "react";

import { WS_API, API } from "@env";
import { MainView } from "../_Components/MainView";
import Navbar from "./Components/Navbar/Navbar";
import ChatContainer from "./Components/ChatContainer/ChatContainer";
import MessageGroup from "./Components/MessageGroup/MessageGroup";
import FriendMessage from "./Components/Message/FriendMessage/FriendMessage";
import UserMessage from "./Components/Message/UserMessage/UserMessage";
import TypeInput from "./Components/TypeInput/TypeInput";
import { getTokenFromStorage } from "../../Helper/getTokenFromStorage";

const Chat = ({ route }: any) => {
  const [webSocket, setWebSocket] = useState<any>();
  const [messages, setMessages] = useState([]);

  const friend = route.params.chat.friendship.person;
  const chatUuid = route.param.chat.uuid;
  const LAST_MESSAGES_COUNT = 20;

  useEffect(() => {
    getTokenFromStorage().then(token => {
      fetch(`${API}/chat/${chatUuid}/messages`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(data => {
        if (data.ok) {
          setMessages(data.data)
        }
        console.info(data.message);
      })
      .catch(err => console.error(err))
    })
  }, [])

  useEffect(() => {
    getTokenFromStorage().then((token) => {
      const WS_URL = `${WS_API}/socket-chat/${route.params.chat.uuid}${route.params.chat.friendship.person.uuid}`;
      const headers = {Authorization: ''};
      headers["Authorization"] = `Bearer ${token}`;

      const webSocketLocal = new WebSocket(WS_URL, null, {headers});
      
      setWebSocket(webSocketLocal);
      
      webSocketLocal.onopen = () => {
        webSocketLocal.send("first handshake");
      };
      
      webSocketLocal.onmessage = (data: any) => {
        console.log(data);
      };
      webSocketLocal.onerror = (e: any) => {
        console.error(e);
      };
    });
  }, []);
  const sendData = (text: string) => {
    webSocket.send(JSON.stringify({ user: text }));
  };
  return (
    <MainView>
      <Navbar image={friend.base64Image} nickname={friend.nickname} />
      <ChatContainer>
        <MessageGroup>
          <FriendMessage text="lorem lorem lorem lorem lorem loremloremdddddddddddd loremdddddddddddddddddddddd lorem" />
        </MessageGroup>
        <MessageGroup>
          <UserMessage text="lorem lorem lorem lorem lorem loremloremdddddddddddd loremdddddddddddddddddddddd lorem" />
        </MessageGroup>
        <MessageGroup>
          <FriendMessage text="d" />
          <FriendMessage text="lorem lorem lorem lorem lorem loremloremdddddddddddd loremdddddddddddddddddddddd lorem" />
        </MessageGroup>
        <MessageGroup>
          <UserMessage text="fd" />
          <UserMessage text="fd" />
          <UserMessage text="fd" />
          <UserMessage text="fd" />
        </MessageGroup>
        <MessageGroup>
          <FriendMessage text="d" />
          <FriendMessage text="lorem lorem lorem lorem lorem loremloremdddddddddddd loremdddddddddddddddddddddd lorem" />
        </MessageGroup>
      </ChatContainer>
      <TypeInput send={(text: string) => sendData(text)} />
    </MainView>
  );
};
export default Chat;
