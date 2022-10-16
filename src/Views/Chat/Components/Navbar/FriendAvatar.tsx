import React from 'react'
import styled from 'styled-components/native'

const AvatarImage = styled.Image`
    border-radius: 30px;
    width: 30px;
    height: 30px;
`

const FriendAvatar = ({image}: any) => {
  return (
    <AvatarImage source={{uri: image}}/>
  )
}

export default FriendAvatar