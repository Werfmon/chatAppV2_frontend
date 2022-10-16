import React from 'react'
import { Container } from './Container';

import { Message } from '../Message';

interface Props {
  text: string;
}

const FriendMessage = ({text}: Props) => {
  return (
    <Container>
      <Message>{text}</Message>
    </Container>
  )
}

export default FriendMessage