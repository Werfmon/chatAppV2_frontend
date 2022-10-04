import React from 'react'
import styled from 'styled-components/native'

const AvatarImage = styled.Image`
    border-radius: 40px;
    width: 40px;
    height: 40px;
`
const OnlineDot = styled.View`
  height: 8px;
  width: 8px;
  border-radius: 10px;
  background-color: #05e213;
  position: absolute;
  top: 80%;
  left: 80%;
`
const Container = styled.View`
  justify-content: center;
  align-items: center;
`
const Avatar = ({isOnline, image}: any) => {
  return (
    <Container>
      <AvatarImage source={{uri: image}}/>
     {isOnline && <OnlineDot></OnlineDot>}
    </Container>
  )
}

export default Avatar