import React, { useState } from 'react'

import { navigate } from '../../Components/Navigation/RootNavigation'
import { CustomTextInput } from './Components/CustomTextInput'
import { ButtonsInline } from './Components/ButtonsInline'
import { Color } from '../../Components/Style/Color'
import { MainView } from '../_Components/MainView'
import { login } from '../../Services/Login/login'
import { Header } from './Components/Header'
import { ScrollView } from 'react-native'
import { Form } from './Components/Form'

import LoginButton from './Components/LoginButton'
import TextButton from './Components/TextButton'

const Login = () => {
  const [password, setPassword] = useState<string>();
  const [email, setEmail] = useState<string>();

  return (
    <MainView>
      <ScrollView>
        <Header>Login</Header>
        <Form>
          <CustomTextInput onChangeText={(text: string) => setEmail(text)} placeholder='E-mail' placeholderTextColor={Color.INPUT_PLACEHOLDER}/>
          <CustomTextInput onChangeText={(text: string) => setPassword(text)} placeholder='Password' placeholderTextColor={Color.INPUT_PLACEHOLDER}/>
          <ButtonsInline>
            <TextButton title='Not registered?' onPress={() => navigate('Registration')}/>
            <LoginButton title='Login' onPress={() => login({email, password})}/>
          </ButtonsInline>
        </Form>
      </ScrollView>
    </MainView>
  )
}

export default Login