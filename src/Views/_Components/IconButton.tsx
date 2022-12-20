import React, { Children } from 'react';
import styled from 'styled-components/native';
import { Color } from '../../Components/Style/Color';

const Press = styled.Pressable<{width: string, height: string}>`
    background-color: ${Color.ORANGE};
    border-radius: 40px;
    width: ${(props: any) => props.width}px;
    height: ${(props: any) => props.height}px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function IconButton({onPress, children, height, width}: any) {
    return (
        <Press height={height} width={width} onPress={onPress}>
            {children}
        </Press>
    )
}