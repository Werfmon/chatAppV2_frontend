import React, {useState} from 'react';

import { navigate } from '../../Components/Navigation/RootNavigation';

import { SettingsContainer } from './Components/SettingsContainer';
import { ContainerHeading } from './Components/ContainerHeading';
import { ButtonContainer } from './Components/ButtonContainer';
import { SettingsChild } from './Components/SettingsChild';
import { MainView } from '../_Components/MainView';
import { Heading } from './Components/Heading';
import Button from '../_Components/Button';
import Frame from './Components/SettingsFrame/Frame';

import { ErrorProps } from '../_Components/ErrorHanding/Types/ErrorProps';
import { Status } from '../_Components/ErrorHanding/Helper/Status';
import Error from '../_Components/ErrorHanding/Error';
import { Color } from '../../Components/Style/Color';

import { pickImage } from './Services/pickImage';
import { logout } from './Services/logout';

import ImageSvg from '../../../public/static/svg/icon_image.svg' 
import KeySvg from '../../../public/static/svg/icon_key.svg' 


const Settings = () => {
  const [error, setError] = useState<ErrorProps>({message: '', status: Status.INFO});

  return (
    <MainView>
      <Error message={error.message} status={error.status} show={error.show}/>
      <ContainerHeading>
        <Heading>Settings</Heading>
      </ContainerHeading>
      <SettingsContainer>
        <SettingsChild>
          <Frame onPress={() => pickImage(setError)} title='Avatar' description='Change your avatar from gallery'>
            <ImageSvg height={18} width={18} fill={Color.ICON_WHITE}/>
          </Frame>
        </SettingsChild>
        <SettingsChild>
          <Frame onPress={() => navigate('PasswordChange')} title='Password change' description='Change old password to new one'>
              <KeySvg height={18} width={18} fill={Color.ICON_WHITE}/>
          </Frame>
        </SettingsChild>
          <SettingsChild>
            <ButtonContainer>
              <Button title="Go back" onPress={() => navigate('Home')} />
              <Button title="Log out" onPress={logout} />
            </ButtonContainer>
          </SettingsChild>
      </SettingsContainer>
    </MainView>
  );
};

export default Settings;
