import React, { useState } from "react";

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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ContentType } from "../../Components/Fetch/Headers";
import { encodeBody } from "../../Helper/encodeBody";
import { API } from "@env";

const Login = () => {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  function login(email: string, password: string) {
    
    const data = {
      username: email,
      password: password,
    };
    console.log("Attempt to login: ", data);

    fetch(`${API}/login`, {
      method: "POST",
      headers: {
        "content-type": ContentType.APPLICATION_URLENCODED,
      },
      body: encodeBody(data),
    })
      .then((res) => {
        console.info(res.status);
        return res.json();
      })
      .then(async (data) => {
        console.info(data.token);
        if (data) {
          console.info("Login response token: " + data.token);
          try {
            await AsyncStorage.setItem("token", data.token);
            navigate("Home");
          } catch (e) {
            console.error(e);
          }
        } else {
          console.warn("error in login");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <MainView>
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
            placeholderTextColor={Color.INPUT_PLACEHOLDER}
          />
          <ButtonsInline>
            <TextButton
              title="Not registered?"
              onPress={() => navigate("Registration")}
            />
            <LoginButton title="Login" onPress={() => login(email, password)} />
          </ButtonsInline>
        </Form>
      </ScrollView>
    </MainView>
  );
};

export default Login;
