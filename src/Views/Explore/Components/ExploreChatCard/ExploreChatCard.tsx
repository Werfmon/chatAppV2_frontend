import React from 'react'

import { addUserAsFriend } from '../../../../Services/Explore/addUserAsFriend'

import { NicknameText } from './NicknameText'
import { CardChild } from './CardChild'
import AddButton from '../AddButton'
import Avatar from './Avatar'
import { Card } from './Card'


const ExploreChatCard = ({nickname, image, uuid}: any) => {

  return (
    <Card>
      <Avatar image={image} />
      <CardChild>
          <NicknameText>{nickname}</NicknameText>
      </CardChild>
      <AddButton onPress={() => addUserAsFriend(uuid)}/>
    </Card>
  )
}

export default ExploreChatCard