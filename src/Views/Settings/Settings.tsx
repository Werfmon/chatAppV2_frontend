import React, {useState} from 'react';

import { navigate } from '../../Components/Navigation/RootNavigation';
import { logout } from '../../Services/Settings/logout';

import { SettingsContainer } from './Components/SettingsContainer';
import { ContainerHeading } from './Components/ContainerHeading';
import { ButtonContainer } from './Components/ButtonContainer';
import { SettingsChild } from './Components/SettinsChild';
import SwitchButton from './Components/SwitchButton';
import { MainView } from '../_Components/MainView';
import { Heading } from './Components/Heading';
import Button from '../_Components/Button';
import { Title } from './Components/Title';



const Settings = () => {
  const [addPeopleState, setAddPeopleState] = useState<boolean>(false);
  const [addPeopleState2, setAddPeopleState2] = useState<boolean>(false);

  return (
    <MainView>
      <ContainerHeading>
        <Heading>Settings</Heading>
      </ContainerHeading>
      <SettingsContainer>
        <SettingsChild>
          <Title>People can add you</Title>
          <SwitchButton state={addPeopleState} setState={setAddPeopleState} />
        </SettingsChild>
        <SettingsChild>
          <Title>People can add you</Title>
          <SwitchButton state={addPeopleState2} setState={setAddPeopleState2} />
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
