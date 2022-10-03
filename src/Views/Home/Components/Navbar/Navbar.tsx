import React from 'react'

import { ColoredText } from '../../../_Components/ColoredText'
import CurrentUserAvatar from './CurrentUserAvatar'
import SettingsButton from '../SettingsButton'
import { NavContainer } from './NavContainer'
import { LeftSide } from './LeftSide'

const Navbar = ({image}: any) => {
  return (
    <NavContainer>
        <LeftSide>
            <CurrentUserAvatar image={image}/>
            <ColoredText color='#fff'>Chats</ColoredText>
        </LeftSide>
        <SettingsButton />
    </NavContainer>
  )
}

export default Navbar