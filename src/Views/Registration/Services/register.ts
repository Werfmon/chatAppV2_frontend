import { Dispatch, SetStateAction } from "react";
import EnvConfig from "../../../../EnvConfig";
import { ContentType } from "../../../Components/Fetch/Headers";
import { navigate } from "../../../Components/Navigation/RootNavigation";
import { removeError } from "../../_Components/ErrorHanding/Error";
import { Status } from "../../_Components/ErrorHanding/Helper/Status";
import { ErrorProps } from "../../_Components/ErrorHanding/Types/ErrorProps";

export function register(
  email: string,
  firstName: string,
  lastName: string,
  nickname: string,
  password: string,
  passwordAgain: string,
  setError: Dispatch<SetStateAction<ErrorProps>>
) {
  if (password !== passwordAgain) {
    setError({message: 'Passwords are different', status: Status.INFO, show: true})
    removeError(setError);
    console.log("Passwords are different");
    return;
  }
  const data: Object = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    nickname: nickname,
    password: password,
  };

  fetch(`${EnvConfig.API}/person/registration`, {
    method: "POST",
    headers: {
      "content-type": ContentType.APPLICATION_JSON,
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.ok) {
        navigate("Login");
      } else {
        setError({message: data.message, status: Status.INFO, show: true})
        removeError(setError);
      }
    })
    .catch((err) => {
      console.warn(err)
      setError({message: 'Something went wrong', status: Status.WARNING, show: true})
      removeError(setError);
    });
}
