import React from "react";
import { getTokenFromStorage } from "../../../../Helper/getTokenFromStorage";
import { acceptFriendRequest } from "../../../../Services/FriendRequest/acceptFriendRequest";
import { declineFriendRequest } from "../../../../Services/FriendRequest/declineFriendRequest";

import AcceptButton from "./AcceptButton";
import Avatar from "./Avatar/Avatar";

import { ButtonContainer } from "./ButtonContainer";
import { Card } from "./Card";
import { CardChild } from "./CardChild";
import DeclineButton from "./DeclineButton";
import { NicknameText } from "./NicknameText";

import { API } from "@env";

const RequestCard = ({ setRefresh, refresh, nickname, image, uuid }: any) => {
  function handleDeclineFriendRequest(): void {
    getTokenFromStorage().then((token) => {
      fetch(`${API}/friendship/${uuid}/reject`, {
        method: "PUT",
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.message);
          if (data.ok) {
            setRefresh(refresh + 1);
          }
        })
        .catch((err) => console.error(err));
    });
  }

  function handleAcceptFriendRequest(): void {
    getTokenFromStorage().then((token) => {
      fetch(`${API}/friendship/${uuid}/accept`, {
        method: "PUT",
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.message);
          if (data.ok) {
            setRefresh(refresh + 1);
          }
        })
        .catch((err) => console.error(err));
    });
  }
  return (
    <Card>
      <Avatar image={image} />
      <CardChild>
        <NicknameText>{nickname}</NicknameText>
      </CardChild>
      <ButtonContainer>
        <AcceptButton onPress={handleAcceptFriendRequest} />
        <DeclineButton onPress={handleDeclineFriendRequest} />
      </ButtonContainer>
    </Card>
  );
};

export default RequestCard;
