import React from 'react';
import styled from 'styled-components/native';

import { Color } from '../../../../Components/Style/Color';

import SendSvg from '../../../../../public/static/svg/icon_send.svg';

const Press = styled.Pressable`
    height: 40px;
    width: 40px;
    background-color: ${() => Color.GREY};
    border-radius: 25px;
    justify-content: center;
    align-items: center;
`

export default function SendButton({onPress}: any) {
    return (
        <Press onPress={onPress}>
            <SendSvg/>
        </Press>
    )
}