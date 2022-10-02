import React, { useState } from 'react'
import styled from 'styled-components/native'
import { ScrollView } from 'react-native'

import { Props } from '../propTypes/NavigationProps'
import { Color } from '../constants/Color'

import { ButtonsInline } from '../components/styled/Views/ButtonsInline'
import { CustomTextInput } from '../components/styled/FormParts/CustomTextInput'
import { MainView } from '../components/styled/Views/MainView'

import TextButton from '../components/styled/Buttons/TextButton'
import LoginButton from '../components/styled/Buttons/LoginButton'
import { navigateTo } from '../functions/global/navigateTo'

import {API} from '@env';
import { ContentType } from '../constants/Headers'
import { encodeBody } from '../functions/global/encodeBody'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { LogBox } from 'react-native';

const Header = styled.Text`
  padding-top: 50px;
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 30px;
`
const Form = styled.View`
  margin-top: 50px;
  display: flex;
  align-items: center;
`

const Login = ({navigation}: Props) => {
  const [password, setPassword] = useState<string>();
  const [email, setEmail] = useState<string>();

  function login(): void {
    const data: Object = {
      username: email,
      password: password
    }
    
    fetch(`${API}/login`, {
      method: 'POST',
      headers: {
        'content-type': ContentType.APPLICATION_X_WWW_FORM_URLENCODED
      },
      body: encodeBody(data)
    }).then(res => {
      if(res.ok) {
        console.info(res);
        return res.json();
      } else {
        console.error("Error in /login: " + res);
        return null;
      }
    })
    .then(async data => {
      console.info("Login response token: " + data.token);
      try {
        await AsyncStorage.setItem('token', data.token)
        navigateTo(navigation, 'Home')
      } catch(e) {
        console.error(e);
      }
    })
    .catch(err => console.error(err))
  }

  return (
    <MainView>
      <ScrollView>
        <Header>Login</Header>
        <Form>
          <CustomTextInput onChangeText={text => setEmail(text)} placeholder='E-mail' placeholderTextColor={Color.INPUT_PLACEHOLDER}/>
          <CustomTextInput onChangeText={text => setPassword(text)} placeholder='Password' placeholderTextColor={Color.INPUT_PLACEHOLDER}/>
          <ButtonsInline>
            <TextButton title='Not registered?' onPress={() => navigateTo(navigation, 'Registration')}/>
            <LoginButton title='Login' onPress={login}/>
          </ButtonsInline>
        </Form>
      </ScrollView>
    </MainView>
  )
}

export default Login