import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import styled from 'styled-components/native'

import ExploreChatCard from '../components/explore/ExploreChatCard'
import Navbar from '../components/explore/Navbar'
import SearchInput from '../components/SearchInput'

import { ChatsContainer } from '../components/styled/Views/ChatsContainer'
import { MainView } from '../components/styled/Views/MainView'

import { Props } from '../propTypes/NavigationProps'

import { getToken } from '../functions/global/getToken'
import { getAllAvailableUsers } from '../functions/views/explorePage/getAllAvailableUsers'

const SearchInputContainer = styled.View`
  align-items: center;
  padding: 15px 0;
`

const Explore = ({navigation}: Props) => {
  const [users, setUsers] = useState<any>();

  function searchUsers(search: string): void {
    getToken().then(token => {
      getAllAvailableUsers(token, search)
        .then(data => {
            setUsers(data);
        })
        .catch(err => {
          console.error(err);
        })
    }).catch(err => {
      console.log(err);
    })
  }
   return (
    <MainView>
        <Navbar navigation={navigation}/>
        <SearchInputContainer>
          <SearchInput onPress={searchUsers}/>
        </SearchInputContainer>
        <ChatsContainer>
          <ScrollView>
            {
              users?.map((user: any, i: number) => <ExploreChatCard key={i} nickname={user.nickname} image={user.avatarBase64Image} uuid={user.uuid}/>)
            }
          </ScrollView>
        </ChatsContainer>
    </MainView>
  )
}

export default Explore