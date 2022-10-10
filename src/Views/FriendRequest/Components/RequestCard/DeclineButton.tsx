import React from 'react';
import styled from 'styled-components/native';

import DeclineSvg from '../../../../../public/static/svg/icon_cross.svg';

import { Color } from '../../../../Components/Style/Color';

const Press = styled.Pressable`
    background-color: ${Color.GREY};
    border-radius: 40px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: flex-end;
`
export default function DeclineButton({onPress}: any) {
    return (
        <Press onPress={onPress}>
            <DeclineSvg height={14} width={14}/>
        </Press>
    )
}