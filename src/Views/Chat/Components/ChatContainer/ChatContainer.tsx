import React, { PropsWithChildren } from 'react'
import { ScrollView } from 'react-native'

import { Container } from './Container'



const ChatContainer = ({children}: PropsWithChildren) => {
  return (
    <ScrollView>
      <Container>
        {children}
      </Container>
    </ScrollView>
  )
}

export default ChatContainer