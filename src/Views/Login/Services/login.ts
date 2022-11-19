import { ContentType } from "../../../Components/Fetch/Headers";
import { encodeBody } from "../../../Helper/encodeBody";
import EnvConfig from "../../../../EnvConfig";
import { navigate } from "../../../Components/Navigation/RootNavigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dispatch, SetStateAction } from "react";
import { ErrorProps } from "../../_Components/ErrorHanding/Types/ErrorProps";
import { Status } from "../../_Components/ErrorHanding/Helper/Status";
import { removeError } from "../../_Components/ErrorHanding/Error";


export function login(email: string, password: string, setError: Dispatch<SetStateAction<ErrorProps>>) {
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
      if (!res.ok) {
        setError({message: 'Bad login, try again', status: Status.WARNING, show: true})
        removeError(setError);
      }
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
          setError({message: 'Something went wrong, try again or restart application', status: Status.ERROR, show: true})
          removeError(setError);
        }
      } else {
        setError({message: 'Something went wrong, try again or restart application', status: Status.ERROR, show: true})
        removeError(setError);
        console.warn("error in login");
      }
    })
    .catch((err) => {
      console.error(err)
      setError({message: 'Something went wrong, try again', status: Status.WARNING, show: true})
      removeError(setError);
    });
}