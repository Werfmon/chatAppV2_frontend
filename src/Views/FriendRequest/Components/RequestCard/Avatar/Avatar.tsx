import React from 'react'

import { AvatarImage } from './AvatarImage'
import { Container } from './Container'
import { OnlineDot } from './OnlineDot'

const Avatar = ({isOnline, image}: any) => {
  return (
    <Container>
      <AvatarImage source={{uri: image}}/>
     {isOnline && <OnlineDot></OnlineDot>}
    </Container>
  )
}

export default Avatar