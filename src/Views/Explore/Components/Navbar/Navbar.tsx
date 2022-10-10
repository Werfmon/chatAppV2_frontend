import React from 'react'

import { navigate } from '../../../../Components/Navigation/RootNavigation'
import LeftArrowButton from '../../../_Components/LeftArrowButton'
import { ColoredText } from '../../../_Components/ColoredText'
import { Color } from '../../../../Components/Style/Color'
import FriendRequestButton from './FriendRequestButton'
import { NavContainer } from './NavContainer'
import SettingsButton from './SettingsButton'
import { RightSide } from './RightSide'
import { LeftSide } from './LeftSide'


const Navbar = () => {
  return (
    <NavContainer>
        <LeftSide>
            <LeftArrowButton onPress={() => navigate('Home')} />
            <ColoredText color={Color.WHITE}>Explore</ColoredText>
        </LeftSide>
        <RightSide>
          <FriendRequestButton />
          <SettingsButton />
        </RightSide>
    </NavContainer>
  )
}

export default Navbar