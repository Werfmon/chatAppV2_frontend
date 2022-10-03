import React from 'react';
import styled from 'styled-components/native';

import { Color } from '../../../Components/Style/Color';

const Press = styled.Pressable`
    background-color: ${() => Color.ORANGE};
    border-radius: 40px;
    width: 110px;
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Title = styled.Text`
    color: ${() => Color.WHITE};
    font-size: 19px;
`

export default function RegisterButton({onPress}: any) {
    return (
        <Press onPress={onPress}>
            <Title>Register</Title>
        </Press>
    )
}