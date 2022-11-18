import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";

import { ChatsContainer } from "./Components/ChatsContainer";
import { MainView } from "../_Components/MainView";
import Navbar from "./Components/Navbar/Navbar";
import UnderNavbar from "./Components/UnderNavbar/UnderNavbarToExplore";
import HomeChatCard from "./Components/ChatCard/ChatCard";
import { cutText } from "../../Helper/cutText";
import { getLoggedUser } from "./Services/getLoggedUser";
import { getAllUsersChat } from "./Services/getAllUsersChat";
import { goToUserChat } from "./Services/goToUserChat";
import { User } from "./Types/User";
import { navigationRef } from "../../Components/Navigation/RootNavigation";

const Home = () => {
  const [loggedUser, setLoggedUser] = useState<User | null>(null);
  const [userChats, setUserChats] = useState<any>();

  useEffect(() => {
    const unsubscribe = navigationRef.addListener("options", () => {
      getLoggedUser(setLoggedUser);
    });
    return unsubscribe;
  }, []);
  useEffect(() => {
    const unsubscribe = navigationRef.addListener("options", () => {
      getAllUsersChat(setUserChats);
    });
    return unsubscribe;
  }, []);

  return (
    <MainView>
      {
        <>
          <Navbar image={loggedUser?.base64Image} />
          <UnderNavbar searchChats={() => {}} />
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
                      onPress={() => goToUserChat(chat, loggedUser)}
                      isOnline={false}
                      lastMessage={cutText(
                        "lorem ipsum, lorem lorem lorem lorem",
                        35
                      )}
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
