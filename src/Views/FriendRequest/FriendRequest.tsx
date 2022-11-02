import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'

import RequestCard from './Components/RequestCard/RequestCard'
import { ChatsContainer } from './Components/ChatsContainer'
import { ColoredText } from '../_Components/ColoredText'
import { MainView } from '../_Components/MainView'
import Navbar from './Components/Navbar/Navbar'
import { getAllWaitingUsers } from './Services/getAllWaitingUsers'

const FriendRequest = () => {
  const [users, setUsers] = useState([{}]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    getAllWaitingUsers(setUsers);
  }, [, refresh]);

  return (
    <MainView>
        <Navbar />
        <ChatsContainer>
          <ScrollView>
            {
             users.length > 0
                ? users?.map((user: any, i: number) => <RequestCard setRefresh={setRefresh} refresh={refresh} key={i} nickname={user.nickname} image={user.base64Image} uuid={user.uuid}/>)
                : <ColoredText color='#fff'>Any request found</ColoredText>
            }
          </ScrollView>
        </ChatsContainer>
    </MainView>
  )
}

export default FriendRequest