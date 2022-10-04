import React from 'react'
import { navigate } from '../../../../Components/Navigation/RootNavigation'
import { Color } from '../../../../Components/Style/Color'
import { ColoredText } from '../../../_Components/ColoredText'
import SettingsButton from './SettingsButton'
import { LeftSide } from './LeftSide'
import { NavContainer } from './NavContainer'

import { RightSide } from './RightSide'
import FriendRequestButton from './FriendRequestButton'
import LeftArrowButton from './LeftArrowButton'

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