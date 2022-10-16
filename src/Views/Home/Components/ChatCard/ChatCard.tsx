import React from 'react';

import { LastMessageText } from './LastMessageText';
import { NicknameText } from './NicknameText';
import { CardChild } from './CardChild';
import Avatar from './Avatar/Avatar';
import { Card } from './Card';

interface Props {
  isOnline?: boolean;
  image: string;
  lastMessage: string;
  nickname: string;
}

const HomeChatCard = ({isOnline, image, lastMessage, nickname}: Props) => {
  return (
    <Card>
      <Avatar isOnline={isOnline} image={image} />
      <CardChild>
        <NicknameText>{nickname}</NicknameText>
        <LastMessageText>{lastMessage}</LastMessageText>
      </CardChild>
    </Card>
  );
};

export default HomeChatCard;