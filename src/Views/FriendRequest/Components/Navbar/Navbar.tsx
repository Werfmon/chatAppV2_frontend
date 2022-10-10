import React from 'react'

import { NavContainer } from './NavContainer'
import { LeftSide } from './LeftSide'
import SettingsButton from './SettingsButton'
import { ColoredText } from '../../../_Components/ColoredText'
import { Color } from '../../../../Components/Style/Color'
import LeftArrowButton from '../../../_Components/LeftArrowButton'
import { navigate } from '../../../../Components/Navigation/RootNavigation'

const Navbar = () => {
  return (
    <NavContainer>
        <LeftSide>
            <LeftArrowButton onPress={() => navigate('Explore')} />
            <ColoredText color={Color.WHITE}>Friend Requests</ColoredText>
        </LeftSide>
        <SettingsButton />
    </NavContainer>
  )
}

export default Navbar