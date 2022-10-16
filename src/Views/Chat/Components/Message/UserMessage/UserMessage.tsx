import React from 'react'

import { Message } from '../Message'
import { Container } from './Container';

interface Props {
    text: string;
}

const UserMessage = ({text}: Props) => {
  return (
    <Container>
      <Message>{text}</Message>
    </Container>
  )
}

export default UserMessage