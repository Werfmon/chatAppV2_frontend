import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { navigationRef } from "../../Components/Navigation/RootNavigation";
import { getTokenFromStorage } from "../../Helper/getTokenFromStorage";
import { searchUsers } from "../../Services/Explore/searchUsers";

import { MainView } from "../_Components/MainView";
import { ChatsContainer } from "./Components/ChatsContainer";
import ExploreChatCard from "./Components/ExploreChatCard/ExploreChatCard";
import Navbar from "./Components/Navbar/Navbar";
import SearchInput from "./Components/SearchInput/SearchInput";
import { SearchInputContainer } from "./Components/SearchInputContainer";
import { API } from "@env";

const Explore = ({navigation}: any) => {
  const [users, setUsers] = useState<Array<Object>>([]);
  const [refresh, setRefresh] = useState<number>(0);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
      getTokenFromStorage().then((token) => {
        fetch(`${API}/person/all-available?search=${search}`, {
          method: "GET",
          headers: {
            'content-type': 'application/json',
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then(res => res.json())
        .then(data => setUsers(data.data))
        .catch(err => console.log(err)
        );
      });
  }, [, refresh]);

  return (
    <MainView>
      <Navbar />
      <SearchInputContainer>
        <SearchInput
          setSearch={setSearch}
          setRefresh={setRefresh}
          refresh={refresh}
        />
      </SearchInputContainer>
      <ChatsContainer>
        <ScrollView>
          {users.map((user: any, i: number) => (
            <ExploreChatCard
              setRefresh={setRefresh}
              refresh={refresh}
              key={i}
              nickname={user.nickname}
              image={user.base64Image}
              uuid={user.uuid}
            />
          ))}
        </ScrollView>
      </ChatsContainer>
    </MainView>
  );
};

export default Explore;
