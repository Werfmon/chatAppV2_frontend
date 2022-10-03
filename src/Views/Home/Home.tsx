import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';

import { setLoggeduserToState } from '../../Services/Home/setLoggedUserToState';

import { ChatsContainer } from './Components/ChatsContainer';
import { MainView } from '../_Components/MainView';
import Navbar from './Components/Navbar/Navbar';
import UnderNavbar from './Components/UnderNavbar/UnderNavbarToExplore';

const Home = () => {
  const [loggedUser, setLoggedUser] = useState<any>(false);

  useEffect(() => {
    setLoggeduserToState(setLoggedUser);
  }, []);

  return (
    <MainView>
      {
        (
        <>
          <Navbar image={loggedUser?.avatarBase64Image} />
          <UnderNavbar searchChats={() => {}} />
          <ScrollView>
            <ChatsContainer>
              {/* <HomeChatCard
                isOnline
                lastMessage="lorem ipsum, lorem lorem lorem lorem"
                nickname="Adam Jura"
                image={Profile1}
              />
              <HomeChatCard
                lastMessage="lorem ipsum, lorem lorem lorem lorem"
                nickname="Adriana"
                image={Profile2}
              />
              <HomeChatCard
                lastMessage="lorem ipsum, lorem lorem lorem lorem"
                nickname="Filip Fojtík"
                image={Profile3}
              />
              <HomeChatCard
                lastMessage="lorem ipsum, lorem lorem lorem lorem"
                nickname="Jana Novotná"
                image={Profile4}
              /> */}
            </ChatsContainer>
          </ScrollView>
        </>
      )} 
    </MainView>
  );
};
export default Home;
