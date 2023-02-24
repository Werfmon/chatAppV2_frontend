import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'

import RequestCard from './Components/RequestCard/RequestCard'
import { ChatsContainer } from './Components/ChatsContainer'
import { ColoredText } from '../_Components/ColoredText'
import { MainView } from '../_Components/MainView'
import Navbar from './Components/Navbar/Navbar'
import { getAllWaitingUsers } from './Services/getAllWaitingUsers'
import { ErrorProps } from '../_Components/ErrorHanding/Types/ErrorProps'
import { Status } from '../_Components/ErrorHanding/Helper/Status'
import Error from '../_Components/ErrorHanding/Error'

const FriendRequest = () => {
  const [users, setUsers] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [error, setError] = useState<ErrorProps>({message: '', status: Status.INFO});

  useEffect(() => {
    getAllWaitingUsers(setUsers, setError);
  }, [, refresh]);

  return (
    <MainView>
        <Error message={error.message} status={error.status} show={error.show}/>
        <Navbar />
        <ChatsContainer>
          <ScrollView>
            {
             users.length > 0
                ? users?.map((user: any, i: number) => <RequestCard setRefresh={setRefresh} refresh={refresh} key={i} nickname={user.nickname} image={user.base64Image} uuid={user.uuid} setError={setError} />)
                : <ColoredText color='#fff'>Any request found</ColoredText>
            }
          </ScrollView>
        </ChatsContainer>
    </MainView>
  )
}

export default FriendRequest