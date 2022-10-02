import React, {useState} from 'react';
import {MainView} from '../components/styled/Views/MainView';
import styled from 'styled-components/native';
import {Color} from '../constants/Color';
import SwitchButton from '../components/styled/Buttons/SwitchButton';
import Button from '../components/styled/Buttons/Button';
import { Props } from '../propTypes/NavigationProps';
import { removeTokenFromStorage } from '../functions/global/removeTokenFromStorage';

const Heading = styled.Text`
  padding: 20px;
  color: ${() => Color.WHITE};
  font-size: 20px;
`;
const ContainerHeading = styled.View`
  align-items: center;
`;
const SettingsContainer = styled.View`
  align-items: center;
  width: 80%;
  margin: 0 auto;
  height: 100%;
`;
const Title = styled.Text`
  color: ${() => Color.WHITE};
  width: 80%;
  font-size: 17px;
`;
const SettingsChild = styled.View`
  flex-direction: row;
  justify-content: center;
  padding: 10px 0;
`;
const ButtonContainer = styled.View`
    top: 50px;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
`;

const Settings = ({navigation}: Props) => {
  const [addPeopleState, setAddPeopleState] = useState<boolean>(false);
  const [addPeopleState2, setAddPeopleState2] = useState<boolean>(false);

  function logout(): void {
    removeTokenFromStorage();
    navigation.navigate('Login')
  }
  function navigateTo(): void {
    navigation.navigate('Home')
  }
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
              <Button title="Go back" onPress={navigateTo} />
              <Button title="Log out" onPress={logout} />
            </ButtonContainer>
          </SettingsChild>
      </SettingsContainer>
    </MainView>
  );
};

export default Settings;
