import React, { useEffect, useState } from "react";

import { navigate } from "../../Components/Navigation/RootNavigation";
import { CustomTextInput } from "../_Components/CustomTextInput";
import { ButtonsInline } from "../_Components/ButtonsInline";
import { Color } from "../../Components/Style/Color";
import { MainView } from "../_Components/MainView";
import { Header } from "../_Components/Header";
import { ScrollView } from "react-native";
import { Form } from "./Components/Form";

import LoginButton from "./Components/LoginButton";
import TextButton from "../_Components/TextButton";
import { login } from "./Services/login";
import Error from "../_Components/ErrorHanding/Error";
import { Status } from "../_Components/ErrorHanding/Helper/Status";
import { ErrorProps } from "../_Components/ErrorHanding/Types/ErrorProps";
import { isPersonLogged } from "./Services/isPersonLogged";

const Login = () => {
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<ErrorProps>({message: '', status: Status.INFO});

  function handleLogin(): void {
    login(email, password, setError);
  }
  useEffect(() => {
    isPersonLogged()
  }, [])

  return (
    <MainView>
    <Error message={error.message} status={error.status} show={error.show}/>
      <ScrollView>
        <Header>Login</Header>
        <Form>
          <CustomTextInput
            onChangeText={(text: string) => setEmail(text)}
            placeholder="E-mail"
            placeholderTextColor={Color.INPUT_PLACEHOLDER}
          />
          <CustomTextInput
            onChangeText={(text: string) => setPassword(text)}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor={Color.INPUT_PLACEHOLDER}
          />
          <ButtonsInline>
            <TextButton
              title="Not registered?"
              onPress={() => navigate("Registration")}
              />
            <LoginButton title="Login" onPress={handleLogin} />
          </ButtonsInline>
        </Form>
      </ScrollView>
    </MainView>
  );
};

export default Login;
