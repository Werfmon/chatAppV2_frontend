import React from 'react';
import { Pressable } from 'react-native';

import ArrowLeft from '../../../../../public/static/svg/icon_arrow_left.svg';

export default function LeftArrowButton({onPress}: any) {
    return (
        <Pressable onPress={onPress}>
            <ArrowLeft height={18} width={18}/>
        </Pressable>
    )
}