import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'


import RequestCard from './Components/RequestCard/RequestCard'
import { ChatsContainer } from './Components/ChatsContainer'
import { ColoredText } from '../_Components/ColoredText'
import { MainView } from '../_Components/MainView'
import Navbar from './Components/Navbar/Navbar'
import { getTokenFromStorage } from '../../Helper/getTokenFromStorage'
import { API } from "@env";

const FriendRequest = ({navigation}: any) => {
  const [users, setUsers] = useState([]);
  const [refresh, setRefresh] = useState(0);


  useEffect(() => {
    getTokenFromStorage().then(token => {
      fetch(`${API}/friendship/all/waiting`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(data => {
        if (data.ok) {
          setUsers(data.data);
        } else {
          console.info(data.message);
        }
      }).catch(err => console.error(err))
    })
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