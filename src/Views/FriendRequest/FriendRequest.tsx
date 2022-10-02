import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Props } from '../propTypes/NavigationProps'
import { MainView } from '../components/styled/Views/MainView'
import { ChatsContainer } from '../components/styled/Views/ChatsContainer'
import Navbar from '../components/friendRequest/NavBar'
import RequestCard from '../components/friendRequest/RequestCard'
import { ColoredText } from '../components/styled/Texts/ColoredText'
import { getToken } from '../functions/global/getToken'
import { getAllRequestingUsers } from '../functions/views/friendRequest/getAllRequestingUsers'

const FriendRequest = ({navigation}: Props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getToken().then(token => {
      getAllRequestingUsers(token).then(data => {
        setUsers(data);
      }).catch(err => console.error(err));  
    }).catch(err => console.error(err));  
  }, []);
  return (
    <MainView>
        <Navbar navigation={navigation}/>
        <ChatsContainer>
          <ScrollView>
            {
             users.length > 0
                ? users?.map((user: any, i: number) => <RequestCard key={i} nickname={user.nickname} image={user.avatarBase64Image} uuid={user.uuid}/>)
                : <ColoredText color='#fff'>Any request found</ColoredText>
            }
          </ScrollView>
        </ChatsContainer>
    </MainView>
  )
}

export default FriendRequest