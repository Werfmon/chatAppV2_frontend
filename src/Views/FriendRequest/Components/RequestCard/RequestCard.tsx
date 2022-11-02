import React from "react";
import { acceptFriendRequest } from "../../Services/acceptFriendRequest";
import { DeclineFriendRequest } from "../../Services/declineFriendRequest";

import AcceptButton from "./AcceptButton";
import Avatar from "./Avatar/Avatar";

import { ButtonContainer } from "./ButtonContainer";
import { Card } from "./Card";
import { CardChild } from "./CardChild";
import DeclineButton from "./DeclineButton";
import { NicknameText } from "./NicknameText";

const RequestCard = ({ setRefresh, refresh, nickname, image, uuid }: any) => {
  return (
    <Card>
      <Avatar image={image} />
      <CardChild>
        <NicknameText>{nickname}</NicknameText>
      </CardChild>
      <ButtonContainer>
        <AcceptButton onPress={() => acceptFriendRequest(uuid, refresh, setRefresh)} />
        <DeclineButton onPress={() => DeclineFriendRequest(uuid, refresh, setRefresh)} />
      </ButtonContainer>
    </Card>
  );
};

export default RequestCard;
