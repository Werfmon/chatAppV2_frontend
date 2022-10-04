import React from 'react';
import { Pressable } from 'react-native';
import { navigate } from '../../../../Components/Navigation/RootNavigation';

import FriendRequestButtonSvg from '../../../../../public/static/svg/icon_friend_request.svg';

export default function FriendRequestButton() {
    return (
        <Pressable onPress={() => navigate('FriendRequest')}>
            <FriendRequestButtonSvg height={25} width={25}/>
        </Pressable>
    )
}