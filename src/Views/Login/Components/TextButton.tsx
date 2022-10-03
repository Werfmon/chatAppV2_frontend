import React from 'react';
import styled from 'styled-components/native';

import { Color } from '../../../Components/Style/Color';



const Press = styled.Pressable`
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Title = styled.Text`
    color: ${() => Color.ORANGE};
    font-size: 19px;
`

export default function TextButton({onPress, title}: any) {
    return (
        <Press onPress={onPress}>
            <Title>{title}</Title>
        </Press>
    )
}
  
