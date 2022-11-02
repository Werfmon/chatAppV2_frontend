import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";

import { MainView } from "../_Components/MainView";
import { ChatsContainer } from "./Components/ChatsContainer";
import ExploreChatCard from "./Components/ExploreChatCard/ExploreChatCard";
import Navbar from "./Components/Navbar/Navbar";
import SearchInput from "./Components/SearchInput/SearchInput";
import { SearchInputContainer } from "./Components/SearchInputContainer";
import { getAllAvailableUsers } from "./Services/getAllAvailableUsers";

const Explore = () => {
  const [users, setUsers] = useState<Array<Object>>([]);
  const [refresh, setRefresh] = useState<number>(0);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    getAllAvailableUsers(search, setUsers);
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
