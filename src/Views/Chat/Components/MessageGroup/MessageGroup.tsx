import React, { PropsWithChildren } from 'react'

import { Container } from './Container'

const MessageGroup = ({children}: PropsWithChildren) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default MessageGroup