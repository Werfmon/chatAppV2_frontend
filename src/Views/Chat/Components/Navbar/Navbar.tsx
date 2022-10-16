import React from 'react'

import { navigate } from '../../../../Components/Navigation/RootNavigation'
import LeftArrowButton from '../../../_Components/LeftArrowButton'
import { ColoredText } from '../../../_Components/ColoredText'
import { Color } from '../../../../Components/Style/Color'
import { NavContainer } from './NavContainer'
import FriendAvatar from './FriendAvatar'
import { LeftSide } from './LeftSide'

const Navbar = ({nickname, image}: any) => {
  return (
    <NavContainer>
        <LeftSide>
            <LeftArrowButton onPress={() => navigate('Home')}/>
            <FriendAvatar image={image}/>
        </LeftSide>
        <ColoredText color={Color.WHITE}>{nickname}</ColoredText>
    </NavContainer>
  )
}

export default Navbar