import React, { EffectCallback, useEffect, useState } from 'react';

import {WS_API} from '@env';
import { MainView } from '../_Components/MainView';

const Chat = () => {

  const [webSocket, setWebSocket] = useState(new WebSocket(`${WS_API}/user`));
  
  // useEffect(() => {

  //   webSocket.onopen = () => {
  //     webSocket.send('first handshake'); 
  //   };
  //   webSocket.onmessage = (data) => {
  //       console.log(data.data);
  //   }
  //   webSocket.onerror = (e) => {
  //     console.error(e);
  //   }
  // }, [])
  // const sendData = (text: string) => {
  //   webSocket.send(JSON.stringify({'user': text}));
  // }
  return (
    <MainView>
      {/* <Navbar navigation={navigation} image={''} nickname="Adam Kubín" />
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
      <TypeInput send={sendData}/> */}
    </MainView>
  );
};
export default Chat;
