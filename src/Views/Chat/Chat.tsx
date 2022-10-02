import React, { EffectCallback, useEffect, useState } from 'react';

import Navbar from '../components/chat/current/Navbar';
import MessageGroup from '../components/chat/current/MessageGroup';
import UserMessage from '../components/chat/current/UserMessage';
import ChatContainer from '../components/chat/current/ChatContainer';
import FriendMessage from '../components/chat/current/FriendMessage';

import { MainView } from '../components/styled/Views/MainView';

import { Props } from '../propTypes/NavigationProps';

import TypeInput from '../components/chat/current/TypeInput';
import {WS_API} from '@env';

const Chat = ({navigation}: Props) => {

  const [webSocket, setWebSocket] = useState(new WebSocket(`${WS_API}/user`));
  
  useEffect(() => {

    webSocket.onopen = () => {
      webSocket.send('first handshake'); 
    };
    webSocket.onmessage = (data) => {
        console.log(data.data);
    }
    webSocket.onerror = (e) => {
      console.error(e);
    }
  }, [])
  const sendData = (text: string) => {
    webSocket.send(JSON.stringify({'user': text}));
  }
  return (
    <MainView>
      <Navbar navigation={navigation} image={''} nickname="Adam Kubín" />
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
      <TypeInput send={sendData}/>
    </MainView>
  );
};
export default Chat;
