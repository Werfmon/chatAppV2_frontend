import { Dispatch, SetStateAction } from "react";
import { API } from "@env";;
import { ContentType } from "../../../Components/Fetch/Headers";
import { navigate } from "../../../Components/Navigation/RootNavigation";
import { validateEmail } from "../../../Helper/validateEmail";
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
  if (!validateEmail(email)) {
    setError({message: 'Bad format of email address', status: Status.INFO, show: true})
    removeError(setError);
    console.log("Bad format of email address");
    return;
  }
  if (firstName.length <= 1) {
    setError({message: 'Firstname is too short', status: Status.INFO, show: true})
    removeError(setError);
    console.log("Firstname is too short");
    return;
  }
  if (lastName.length <= 1) {
    setError({message: 'Lastname is too short', status: Status.INFO, show: true})
    removeError(setError);
    console.log("Lastname is too short");
    return;
  }
  if(nickname.length <= 3) {
    setError({message: 'Nickname is too short', status: Status.INFO, show: true})
    removeError(setError);
    console.log("Nickname is too short");
    return;
  }
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

  fetch(`${API}/person/registration`, {
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
