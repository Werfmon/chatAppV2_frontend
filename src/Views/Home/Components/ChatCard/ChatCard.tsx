import React, {useState} from 'react';
import { Pressable, View } from 'react-native';

import { LastMessageText } from './LastMessageText';
import { NicknameText } from './NicknameText';
import { CardChild } from './CardChild';
import Avatar from './Avatar/Avatar';
import { Card } from './Card';
import messaging from "@react-native-firebase/messaging";
import { cutText } from '../../../../Helper/cutText';
import { LastMessageContainer } from './LastMessageContainer';
import { LastMessageDate } from './LastMessageDate';

interface Props {
  isOnline?: boolean;
  image: string;
  nickname: string;
  onPress: any;
}

const HomeChatCard = ({isOnline, image, nickname, onPress}: Props) => {
  const [lastMessage, setLastMessage] = useState<any>({});
  async function onMessageReceived(message: any) {
    const sentTime = message.data.sentDate.split('T')[1].substr(0, 5);
    setLastMessage({message: message.notification.body, sentDate: sentTime, seen: false})
  }

  messaging().onMessage(onMessageReceived);
  return (
    <Pressable onPress={onPress}>
      <Card>
        <Avatar isOnline={isOnline} image={image} />
        <CardChild>
          <NicknameText seen={lastMessage.seen}>{nickname}</NicknameText>
          <LastMessageContainer>
            <LastMessageText seen={lastMessage.seen}>{cutText(lastMessage.message, 20)}</LastMessageText>
            <LastMessageDate seen={lastMessage.seen}> • {lastMessage.sentDate}</LastMessageDate>
          </LastMessageContainer>
        </CardChild>
      </Card>
    </Pressable>
  );
};

export default HomeChatCard;