import React from 'react';
import styled from 'styled-components/native';

import { navigate } from '../../../../Components/Navigation/RootNavigation';
import { Color } from '../../../../Components/Style/Color';

const Press = styled.Pressable`
    background-color: ${() => Color.ORANGE};
    border-radius: 40px;
    width: 65px;
    height: 27px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
`
const Title = styled.Text`
    color: ${() => Color.WHITE};
    font-size: 13px;
`

export default function ExploreButton() {
    return (
        <Press onPress={() => navigate('Explore')}>
            <Title>Explore</Title>
        </Press>
    )
}