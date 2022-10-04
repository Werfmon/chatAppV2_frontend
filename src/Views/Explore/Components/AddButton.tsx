import React from 'react';
import styled from 'styled-components/native';
import { Color } from '../../../Components/Style/Color';

import PlusIcon from '../../../../public/static/svg/icon_plus.svg';


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

export default function AddButton({onPress}: any) {
    return (
        <Press onPress={onPress}>
            <PlusIcon height={20} width={20} />
        </Press>
    )
}