import React from 'react'

import { AvatarImage } from './AvatarImage'
import { Container } from './Container'
import { OnlineDot } from './OnlineDot'

interface Props {
  isOnline?: boolean;
  image: string;
}

const Avatar = ({isOnline, image}: Props) => {
  return (
    <Container>
      <AvatarImage source={{uri: image}}/>
     {isOnline && <OnlineDot></OnlineDot>}
    </Container>
  )
}

export default Avatar