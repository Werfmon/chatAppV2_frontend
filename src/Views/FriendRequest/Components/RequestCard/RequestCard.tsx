import React from 'react'

import AcceptButton from './AcceptButton';
import Avatar from './Avatar/Avatar';

import { ButtonContainer } from './ButtonContainer';
import { Card } from './Card';
import { CardChild } from './CardChild';
import DeclineButton from './DeclineButton';
import { NicknameText } from './NicknameText';




const RequestCard = ({nickname, image, uuid}: any) => {
    function handleDeclineFriendRequest(): void {
     //TODO
    }
    function handleAcceptFriendRequest(): void {
        //TODO
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