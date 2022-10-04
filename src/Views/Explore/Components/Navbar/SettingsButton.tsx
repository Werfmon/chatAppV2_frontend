import React from 'react';
import { Pressable } from 'react-native';

import { navigate } from '../../../../Components/Navigation/RootNavigation';

import SettingsSvg from '../../../../../public/static/svg/icon_settings.svg';

export default function SettingsButton() {
    return (
        <Pressable onPress={() => navigate('Settings')}>
            <SettingsSvg height={25} width={25}/>
        </Pressable>
    )
}