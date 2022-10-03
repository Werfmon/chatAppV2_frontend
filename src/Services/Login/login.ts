import AsyncStorage from "@react-native-async-storage/async-storage";

import { navigate } from "../../Components/Navigation/RootNavigation";
import { ContentType } from "../../Components/Fetch/Headers";
import { encodeBody } from "../../Helper/encodeBody";

import { API } from "@env";

export function login(data: Object): void {
  fetch(`${API}/login`, {
    method: "POST",
    headers: {
      "content-type": ContentType.APPLICATION_URLENCODED,
    },
    body: encodeBody(data),
  })
    .then((res) => {
      return res.json();
    })
    .then(async (data) => {
      if (data.ok) {
        console.info("Login response token: " + data.data.token);
        try {
          await AsyncStorage.setItem("token", data.data.token);
          navigate("Home", {});
        } catch (e) {
          console.error(e);
        }
      } else {
        console.log(data.message);
      }
    })
    .catch((err) => console.error(err));
}
