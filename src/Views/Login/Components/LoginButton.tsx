import React from 'react';
import styled from 'styled-components/native';

import { Color } from '../../../Components/Style/Color';

const Press = styled.Pressable`
    background-color: ${() => Color.ORANGE};
    border-radius: 40px;
    width: 80px;
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Title = styled.Text`
    color: ${() => Color.WHITE};
    font-size: 19px;
`

export default function LoginButton({onPress, title}: any) {
    return (
        <Press onPress={onPress}>
            <Title>{title}</Title>
        </Press>
    )
}
  
