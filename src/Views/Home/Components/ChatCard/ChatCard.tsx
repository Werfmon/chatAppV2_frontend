import React from 'react';
import { Pressable } from 'react-native';

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
  onPress: any;
}

const HomeChatCard = ({isOnline, image, lastMessage, nickname, onPress}: Props) => {
  return (
    <Pressable onPress={onPress}>
      <Card>
        <Avatar isOnline={isOnline} image={image} />
        <CardChild>
          <NicknameText>{nickname}</NicknameText>
          <LastMessageText>{lastMessage}</LastMessageText>
        </CardChild>
      </Card>
    </Pressable>
  );
};

export default HomeChatCard;