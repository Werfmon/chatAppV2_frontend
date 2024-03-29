import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";

import { ChatsContainer } from "./Components/ChatsContainer";
import { MainView } from "../_Components/MainView";
import Navbar from "./Components/Navbar/Navbar";
import UnderNavbar from "./Components/UnderNavbar/UnderNavbarToExplore";
import HomeChatCard from "./Components/ChatCard/ChatCard";
import { getLoggedUser } from "./Services/getLoggedUser";
import { getAllUsersChat } from "./Services/getAllUsersChat";
import { goToUserChat } from "./Services/goToUserChat";
import { User } from "./Types/User";
import { navigationRef } from "../../Components/Navigation/RootNavigation";
import { ErrorProps } from "../_Components/ErrorHanding/Types/ErrorProps";
import { Status } from "../_Components/ErrorHanding/Helper/Status";
import Error from "../_Components/ErrorHanding/Error";
import { saveFCMToken } from "../Login/Services/saveFCMToken";


const Home = () => {
  const [loggedUser, setLoggedUser] = useState<User | null>(null);
  const [userChats, setUserChats] = useState<any>();
  const [error, setError] = useState<ErrorProps>({message: '', status: Status.INFO});
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    const unsubscribe = navigationRef.addListener("options", () => {
      getLoggedUser(setLoggedUser, setError);
      saveFCMToken();
    });
    return unsubscribe;
  }, []);
  useEffect(() => {
    const unsubscribe = navigationRef.addListener("options", () => {
      getAllUsersChat(setUserChats, setError, search);
    });
    return unsubscribe;
  }, []);
  useEffect(() => {
    getAllUsersChat(setUserChats, setError, search);
  }, [search])
  
  return (
    <MainView>
      <Error message={error.message} status={error.status} show={error.show}/>
      {
        <>
          <Navbar image={loggedUser?.base64Image} />
          <UnderNavbar setSearch={setSearch} />
          <ScrollView>
            <ChatsContainer>
              {loggedUser &&
                userChats?.map((chat: any) => {
                  let friend = null;
                  if (chat.friendship.mainPerson.uuid === loggedUser.uuid) {
                    friend = chat.friendship.person;
                  } else {
                    friend = chat.friendship.mainPerson;
                  }
                  return (
                    <HomeChatCard
                      key={chat.uuid}
                      chatUuid={chat.uuid}
                      loggedPersonUuid={loggedUser.uuid}
                      setError={setError}
                      personUuid={friend.uuid}
                      onPress={() => goToUserChat(chat, loggedUser, setError)}
                      isOnline={false}
                      nickname={`${friend.firstName} ${friend.lastName} (${friend.nickname})`}
                      image={friend.base64Image}
                    />
                  );
                })}
            </ChatsContainer>
          </ScrollView>
        </>
      }
    </MainView>
  );
};
export default Home;
