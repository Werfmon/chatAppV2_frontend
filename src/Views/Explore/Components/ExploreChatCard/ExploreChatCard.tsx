import React from 'react'

import { addUserAsFriend } from '../../../../Services/Explore/addUserAsFriend'

import { NicknameText } from './NicknameText'
import { CardChild } from './CardChild'
import AddButton from '../AddButton'
import Avatar from './Avatar'
import { Card } from './Card'


const ExploreChatCard = ({setRefresh, refresh, nickname, image, uuid}: any) => {
  function onAdd() {
    addUserAsFriend(uuid);
    setRefresh(refresh + 1);
    console.log('Card: ', refresh + 1);
    
  }
  return (
    <Card>
      <Avatar image={image} />
      <CardChild>
          <NicknameText>{nickname}</NicknameText>
      </CardChild>
      <AddButton onPress={onAdd}/>
    </Card>
  )
}

export default ExploreChatCard