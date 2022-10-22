import React from "react";

import { addUserAsFriend } from "../../../../Services/Explore/addUserAsFriend";

import { NicknameText } from "./NicknameText";
import { CardChild } from "./CardChild";
import AddButton from "../AddButton";
import Avatar from "./Avatar";
import { Card } from "./Card";
import { getTokenFromStorage } from "../../../../Helper/getTokenFromStorage";
import { API } from "@env";

const ExploreChatCard = ({
  setRefresh,
  refresh,
  nickname,
  image,
  uuid,
}: any) => {
  function onAdd() {
    getTokenFromStorage()
      .then((token) => {
        fetch(`${API}/friendship/${uuid}/add`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.ok) {
              setRefresh(refresh + 1);
            }
          }).catch(err => console.error(err));
      })
      .catch((err) => console.error(err))
      
    console.log("Card: ", refresh + 1);
  }
  return (
    <Card>
      <Avatar image={image} />
      <CardChild>
        <NicknameText>{nickname}</NicknameText>
      </CardChild>
      <AddButton onPress={onAdd} />
    </Card>
  );
};

export default ExploreChatCard;
