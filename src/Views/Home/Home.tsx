import React, {useEffect, useState} from 'react';
import {ScrollView, Text} from 'react-native';

import {Props} from '../propTypes/NavigationProps';

import {ChatsContainer} from '../components/styled/Views/ChatsContainer';
import {MainView} from '../components/styled/Views/MainView';

import Profile1 from '../images/profile1.jpg';
import Profile2 from '../images/profile2.jpg';
import Profile3 from '../images/profile3.jpg';
import Profile4 from '../images/profile4.jpg';

import Navbar from '../components/chat/Navbar';
import HomeChatCard from '../components/chat/HomeChatCard';
import UnderNavbar from '../components/UnderNavbar';
import {navigateTo} from '../functions/global/navigateTo';
import {getLoggedUser} from '../functions/views/home/getLoggedUser';
import {getToken} from '../functions/global/getToken';
import { ErrorMessage } from '../components/error/ErrorMessage';
import OwnColorButton from '../components/styled/Buttons/OwnColorButton';
import { Color } from '../constants/Color';

const Home = ({navigation}: Props) => {
  const [loggedUser, setLoggedUser] = useState<any>(false);
  const [error, setError] = useState(false)
  useEffect(() => {
    getToken().then(token => {
      getLoggedUser(token).then(data => {
        setLoggedUser(data);
        setError(false);
      }).catch(err => console.error(err))
    }).catch(err => console.error(err));
  }, []);

  return (
    <MainView>
      {
        (
        <>
          <Navbar navigation={navigation} image={loggedUser?.avatarBase64Image} />
          <UnderNavbar
            navigateToExplore={() => navigateTo(navigation, 'Explore')}
          />
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
