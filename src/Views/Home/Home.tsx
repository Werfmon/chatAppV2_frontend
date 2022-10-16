import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';

import { setLoggeduserToState } from '../../Services/Home/setLoggedUserToState';

import { ChatsContainer } from './Components/ChatsContainer';
import { MainView } from '../_Components/MainView';
import Navbar from './Components/Navbar/Navbar';
import UnderNavbar from './Components/UnderNavbar/UnderNavbarToExplore';
import HomeChatCard from './Components/ChatCard/ChatCard';
import { cutText } from '../../Helper/cutText';

const Home = ({navigation}: any) => {
  const [loggedUser, setLoggedUser] = useState<any>();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setLoggeduserToState(setLoggedUser);
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
            <HomeChatCard
                isOnline
                lastMessage={cutText("lorem ipsum, lorem lorem lorem lorem", 35)}
                nickname="Adam Jura"
                image={''}
              />
              <HomeChatCard
                lastMessage={cutText("lorem ipsum, lorem lorem lorem lorem", 35)}
                nickname="Adam Jura"
                image={''}
              />
              <HomeChatCard
                isOnline
                lastMessage={cutText("lorem ipsum, lorem lorem lorem lorem", 35)}
                nickname="Adam Jura"
                image={''}
              />
          
            </ChatsContainer>
          </ScrollView>
        </>
      )} 
    </MainView>
  );
};
export default Home;
