import React from 'react';
import styled from 'styled-components/native';

import AcceptSvg from '../../../../../public/static/svg/icon_accept.svg';

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
export default function AcceptButton({onPress}: any) {
    return (
        <Press onPress={onPress}>
            <AcceptSvg height={30} width={30}/>
        </Press>
    )
}
  