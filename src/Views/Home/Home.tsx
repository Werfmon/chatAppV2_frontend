import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';

import { setLoggeduserToState } from '../../Services/Home/setLoggedUserToState';

import { ChatsContainer } from './Components/ChatsContainer';
import { MainView } from '../_Components/MainView';
import Navbar from './Components/Navbar/Navbar';
import UnderNavbar from './Components/UnderNavbar/UnderNavbarToExplore';
import HomeChatCard from './Components/ChatCard/ChatCard';
import { cutText } from '../../Helper/cutText';
import { getTokenFromStorage } from '../../Helper/getTokenFromStorage';
import {API} from '@env';
import { navigate } from '../../Components/Navigation/RootNavigation';

const Home = ({navigation}: any) => {
  const [loggedUser, setLoggedUser] = useState<any>();
  const [userChats, setUserChats] = useState<any>();

  useEffect(() => {
      getTokenFromStorage().then(token => {
        fetch(`${API}/auth/logged`, {
          method: 'GET',
          headers: {
              'content-type': 'application/json',
              accept: 'application/json',
              Authorization: `Bearer ${token}`
          }
      }).then(res => res.json())
      .then(data => setLoggedUser(data.data))
      .catch(err => console.error(err));
    }).catch(err => console.error(err));

    getTokenFromStorage().then((token) => {
      fetch(`${API}/chat/current-person`, {
          method: 'GET',
          headers: {
              accept: 'application/json',
              authorization: `Bearer ${token}`
          }
      })
      .then(res => res.json())
      .then(data => {
        if (data.ok) {
          setUserChats(data.data)
        }
        console.info(data.message);
      }).catch(err => console.log(err));
    });
  }, []);

  function goToUserChat(chat: any): void {
    navigate('Chat', {
      chat: chat
    })
  }

  return (
    <MainView>
      {
        (
        <>
          <Navbar image={loggedUser?.base64Image} />
          <UnderNavbar searchChats={() => {}} />
          <ScrollView>
            <ChatsContainer>
            {userChats?.map((chat: any) => {
              return (
                  <HomeChatCard
                    key={chat.uuid}
                    onPress={() => goToUserChat(chat)}
                    isOnline={false}
                    lastMessage={cutText("lorem ipsum, lorem lorem lorem lorem", 35)}
                    nickname={`${chat.friendship.person.firstName} ${chat.friendship.person.lastName} (${chat.friendship.person.nickname})`}
                    image={chat.friendship.person.base64Image}
                />
                )
              })}
            </ChatsContainer>
          </ScrollView>
        </>
      )} 
    </MainView>
  );
};
export default Home;
