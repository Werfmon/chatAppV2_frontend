import React from 'react'

import { addUserAsFriend } from '../../../../Services/Explore/addUserAsFriend'

import { NicknameText } from './NicknameText'
import { CardChild } from './CardChild'
import AddButton from '../AddButton'
import Avatar from './Avatar'
import { Card } from './Card'
import { searchUsers } from '../../../../Services/Explore/searchUsers'


const ExploreChatCard = ({setState, nickname, image, uuid}: any) => {
  function onAdd() {
    addUserAsFriend(uuid);
    searchUsers('', setState);
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