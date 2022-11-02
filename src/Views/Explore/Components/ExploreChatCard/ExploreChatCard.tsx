import React from "react";

import { NicknameText } from "./NicknameText";
import { CardChild } from "./CardChild";
import AddButton from "../AddButton";
import Avatar from "./Avatar";
import { Card } from "./Card";
import { addUser } from "../../Services/addUser";

const ExploreChatCard = ({
  setRefresh,
  refresh,
  nickname,
  image,
  uuid,
}: any) => {
  
  return (
    <Card>
      <Avatar image={image} />
      <CardChild>
        <NicknameText>{nickname}</NicknameText>
      </CardChild>
      <AddButton onPress={() => addUser(uuid, setRefresh, refresh)} />
    </Card>
  );
};

export default ExploreChatCard;
