import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import Error from "../_Components/ErrorHanding/Error";
import { Status } from "../_Components/ErrorHanding/Helper/Status";
import { ErrorProps } from "../_Components/ErrorHanding/Types/ErrorProps";

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
  const [error, setError] = useState<ErrorProps>({message: '', status: Status.INFO});

  useEffect(() => {
    getAllAvailableUsers(search, setUsers, setError);
  }, [, refresh]);

  return (
    <MainView>
      <Error message={error.message} status={error.status} show={error.show}/>
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
