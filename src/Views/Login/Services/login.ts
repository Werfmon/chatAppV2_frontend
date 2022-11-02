import { ContentType } from "../../../Components/Fetch/Headers";
import { encodeBody } from "../../../Helper/encodeBody";
import EnvConfig from "../../../../EnvConfig";
import { navigate } from "../../../Components/Navigation/RootNavigation";
import AsyncStorage from "@react-native-async-storage/async-storage";


export function login(email: string, password: string) {
  const data: Object = {
    username: email,
    password: password,
  };
  console.log("Attempt to login: ", data);

  fetch(`${EnvConfig.API}/login`, {
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