import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { searchUsers } from '../../Services/Explore/searchUsers';

import { MainView } from '../_Components/MainView';
import { ChatsContainer } from './Components/ChatsContainer';
import ExploreChatCard from './Components/ExploreChatCard/ExploreChatCard';
import Navbar from './Components/Navbar/Navbar';
import SearchInput from './Components/SearchInput/SearchInput';
import { SearchInputContainer } from './Components/SearchInputContainer';



const Explore = () => {
  const [users, setUsers] = useState<any>();


   return (
    <MainView>
        <Navbar />
        <SearchInputContainer>
          <SearchInput setState={setUsers}/>
        </SearchInputContainer>
        <ChatsContainer>
          <ScrollView>
            {
              users?.map((user: any, i: number) => <ExploreChatCard setState={setUsers} key={i} nickname={user.nickname} image={user.base64Image} uuid={user.uuid}/>)
            }
          </ScrollView>
        </ChatsContainer>
    </MainView>
  )
}

export default Explore