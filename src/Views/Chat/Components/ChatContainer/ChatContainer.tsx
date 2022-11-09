import React, { createRef, PropsWithChildren, useRef } from 'react'
import { ScrollView } from 'react-native'

import { Container } from './Container'

const ChatContainer = ({children}: PropsWithChildren) => {
  const scrollViewRef = useRef<any>();

  return (  
    <ScrollView ref={scrollViewRef} onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}>
      <Container>
        {children}
      </Container>
    </ScrollView>
  )
}

export default ChatContainer