import React from 'react'
import { acceptFriendRequest } from '../../../../Services/FriendRequest/acceptFriendRequest';
import { declineFriendRequest } from '../../../../Services/FriendRequest/declineFriendRequest';

import AcceptButton from './AcceptButton';
import Avatar from './Avatar/Avatar';

import { ButtonContainer } from './ButtonContainer';
import { Card } from './Card';
import { CardChild } from './CardChild';
import DeclineButton from './DeclineButton';
import { NicknameText } from './NicknameText';




const RequestCard = ({setRefresh, refresh, nickname, image, uuid}: any) => {
    function handleDeclineFriendRequest(): void {
      declineFriendRequest(uuid);
      setRefresh(refresh + 1)
    }
    function handleAcceptFriendRequest(): void {
      acceptFriendRequest(uuid);
      setRefresh(refresh + 1)
    }
  return (
    <Card>
      <Avatar image={image} />
      <CardChild>
          <NicknameText>{nickname}</NicknameText>
      </CardChild>
      <ButtonContainer>
        <AcceptButton onPress={handleAcceptFriendRequest}/>
        <DeclineButton onPress={handleDeclineFriendRequest}/>
      </ButtonContainer>
    </Card>
  )
}

export default RequestCard