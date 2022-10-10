import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'

import { setAllRequestingUsers } from '../../Services/FriendRequest/setAllRequestingUsers'

import RequestCard from './Components/RequestCard/RequestCard'
import { ChatsContainer } from './Components/ChatsContainer'
import { ColoredText } from '../_Components/ColoredText'
import { MainView } from '../_Components/MainView'
import Navbar from './Components/Navbar/Navbar'

const FriendRequest = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setAllRequestingUsers(setUsers)
  }, []);
  return (
    <MainView>
        <Navbar />
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