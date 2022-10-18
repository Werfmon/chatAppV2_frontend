import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';

import { setLoggeduserToState } from '../../Services/Home/setLoggedUserToState';

import { ChatsContainer } from './Components/ChatsContainer';
import { MainView } from '../_Components/MainView';
import Navbar from './Components/Navbar/Navbar';
import UnderNavbar from './Components/UnderNavbar/UnderNavbarToExplore';
import HomeChatCard from './Components/ChatCard/ChatCard';
import { cutText } from '../../Helper/cutText';
import { setAllUsersChat } from '../../Services/Chat/setAllUserChats';
import { getTokenFromStorage } from '../../Helper/getTokenFromStorage';
import { getLoggedUser } from '../../Services/Home/getLoggedUser';
import {API} from '@env';

const Home = ({navigation}: any) => {
  const [loggedUser, setLoggedUser] = useState<any>();
  const [userChats, setUserChats] = useState<any>();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // setAllUsersChat(setUserChats);
      getTokenFromStorage().then(token => {
        fetch(`${API}/auth/logged`, {
          method: 'GET',
          headers: {
              Authorization: `Bearer ${token}`
          }
      }).then(res => res.json())
      .then(data => setLoggedUser(data.data))
      .catch(err => {throw err});
    }).catch(err => console.error(err));
    });

    getTokenFromStorage().then((token) => {
      fetch(`${API}/chat/current-person`, {
          method: 'GET',
          headers: {
              authorization: `Bearer ${token}`
          }
      })
      .then(res => res.json())
      .then(data => {
          console.info(data.message);
          setUserChats(data.data)
      }).catch(err => {throw err});
    });
    return unsubscribe;
  }, []);


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
                  isOnline={false}
                  lastMessage={cutText("lorem ipsum, lorem lorem lorem lorem", 35)}
                  nickname={chat.friendship.person.firstName + ' ' + chat.friendship.person.lastName}
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
