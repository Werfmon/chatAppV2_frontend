import AsyncStorage from "@react-native-async-storage/async-storage";

import { navigate } from "../../Components/Navigation/RootNavigation";
import { ContentType } from "../../Components/Fetch/Headers";
import { encodeBody } from "../../Helper/encodeBody";

import { API } from "@env";

export function login(email: string, password: string): void {
  
  const data: Object = {
    username: email,
    password: password
  }  
  fetch(`${API}/login`, {
    method: "POST",
    headers: {
      "content-type": ContentType.APPLICATION_URLENCODED,
    },
    body: encodeBody(data),
  })
    .then((res) => {
      console.log(res.status);
      
      return res.json();
    })
    .then(async (data) => {
      console.log(data.token);
      
      if (data) {
        console.info("Login response token: " + data.token);
        try {
          await AsyncStorage.setItem("token", data.token);
          navigate("Home");
        } catch (e) {
          console.error(e);
        }
      } else {
        console.log("error in login");
      }
    })
    .catch((err) => console.error(err));
}
