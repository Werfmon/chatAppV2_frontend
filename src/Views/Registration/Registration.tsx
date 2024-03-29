import React, { useState } from 'react'
import styled from 'styled-components/native'
import { ScrollView } from 'react-native'

import { CustomTextInput } from '../_Components/CustomTextInput';
import { ButtonsInline } from '../_Components/ButtonsInline';
import { navigate } from '../../Components/Navigation/RootNavigation';
import { Color } from '../../Components/Style/Color';
import { MainView } from '../_Components/MainView';
import { Header } from '../_Components/Header';
import TextButton from '../_Components/TextButton';
import RegisterButton from './Components/RegisterButton';
import { register } from './Services/register';
import { ErrorProps } from '../_Components/ErrorHanding/Types/ErrorProps';
import { Status } from '../_Components/ErrorHanding/Helper/Status';
import Error from '../_Components/ErrorHanding/Error';

const Form = styled.View`
  margin-top: 50px;
  display: flex;
  align-items: center;
`
const Registration = () => {

  const [email, setEmail] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordAgain, setPasswordAgain] = useState<string>('');
  const [error, setError] = useState<ErrorProps>({message: '', status: Status.INFO});


  return (
    <MainView>
      <Error message={error.message} status={error.status} show={error.show}/>
      <ScrollView>
        <Header>Registration</Header>
        <Form>
          <CustomTextInput onChangeText={(text: string) => setFirstName(text)} placeholder='First name' placeholderTextColor={Color.INPUT_PLACEHOLDER}/>
          <CustomTextInput onChangeText={(text: string) => setLastName(text)} placeholder='Last name' placeholderTextColor={Color.INPUT_PLACEHOLDER}/>
          <CustomTextInput onChangeText={(text: string) => setEmail(text)} placeholder='E-mail' placeholderTextColor={Color.INPUT_PLACEHOLDER}/>
          <CustomTextInput onChangeText={(text: string) => setNickname(text)} placeholder='Nickname' placeholderTextColor={Color.INPUT_PLACEHOLDER}/>
          <CustomTextInput onChangeText={(text: string) => setPassword(text)} placeholder='Password' placeholderTextColor={Color.INPUT_PLACEHOLDER} secureTextEntry={true}/>
          <CustomTextInput onChangeText={(text: string) => setPasswordAgain(text)} placeholder='Password again' placeholderTextColor={Color.INPUT_PLACEHOLDER} secureTextEntry={true}/>
          <ButtonsInline>
            <TextButton title='Login' onPress={() => navigate('Login')}/>
            <RegisterButton title='Register' onPress={() => register(email, firstName, lastName, nickname, password, passwordAgain, setError)}/>
          </ButtonsInline>
        </Form>
      </ScrollView>
    </MainView>
  )
}

export default Registration