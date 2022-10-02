import React, { useState } from 'react'
import styled from 'styled-components/native'
import { ScrollView } from 'react-native'

import { Props } from '../propTypes/NavigationProps'
import { Color } from '../constants/Color'

import { CustomTextInput } from '../components/styled/FormParts/CustomTextInput'
import { ButtonsInline } from '../components/styled/Views/ButtonsInline'
import { MainView } from '../components/styled/Views/MainView'

import RegisterButton from '../components/styled/Buttons/RegisterButton'
import TextButton from '../components/styled/Buttons/TextButton'
import { navigateTo } from '../functions/global/navigateTo'

import {ContentType} from '../constants/Headers'

import {API} from '@env';


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
const Registration = ({navigation}: Props) => {

  const [email, setEmail] = useState<string>();
  const [nickname, setNickname] = useState<string>();
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [passwordAgain, setPasswordAgain] = useState<string>();

  function register(): void {
    
    if (password !== passwordAgain) {
      console.log("Passwords are different");
      return;
    }
    const data: Object = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      nickname: nickname,
      password: password
    }
    
    console.log(data);
        
    fetch(`${API}/person/registration`, {
      method: 'POST',
      headers: {
        'content-type': ContentType.APPLICATION_JSON
      },
      body: JSON.stringify(data)
    }).then(res => {
      if(res.ok) {
        console.log("here");
        
        navigateTo(navigation, 'Login');
      } else {
        console.error(res);
        return null;
      }
    }).catch(err => console.error(err))
  }

  return (
    <MainView>
      <ScrollView>
        <Header>Registration</Header>
        <Form>
          <CustomTextInput onChangeText={(text: string) => setFirstName(text)} placeholder='First name' placeholderTextColor={Color.INPUT_PLACEHOLDER}/>
          <CustomTextInput onChangeText={(text: string) => setLastName(text)} placeholder='Last name' placeholderTextColor={Color.INPUT_PLACEHOLDER}/>
          <CustomTextInput onChangeText={(text: string) => setEmail(text)} placeholder='E-mail' placeholderTextColor={Color.INPUT_PLACEHOLDER}/>
          <CustomTextInput onChangeText={(text: string) => setNickname(text)} placeholder='Nickname' placeholderTextColor={Color.INPUT_PLACEHOLDER}/>
          <CustomTextInput onChangeText={(text: string) => setPassword(text)} placeholder='Password' placeholderTextColor={Color.INPUT_PLACEHOLDER}/>
          <CustomTextInput onChangeText={(text: string) => setPasswordAgain(text)} placeholder='Password again' placeholderTextColor={Color.INPUT_PLACEHOLDER}/>
          <ButtonsInline>
            <TextButton title='Login' onPress={() => navigateTo(navigation, 'Login')}/>
            <RegisterButton title='Register' onPress={register}/>
          </ButtonsInline>
        </Form>
      </ScrollView>
    </MainView>
  )
}

export default Registration