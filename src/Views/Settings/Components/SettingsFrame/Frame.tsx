import { GestureResponderEvent, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { Container } from './Container'
import { LeftSide } from './LeftSide'
import { RightSide } from './RightSide'
import { Title } from './Title'
import { Description } from './Description'

interface Props {
    children: any,
    title: string,
    description: string,
    onPress: any
}

export default function Frame({children, title, description, onPress}: Props) {
  return (
    <Container onPress={onPress}>
        <LeftSide>
            {children}
        </LeftSide>
        <RightSide>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </RightSide>
    </Container>
  )
}
