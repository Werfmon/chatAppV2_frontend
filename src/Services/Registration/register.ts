import { navigate } from "../../Components/Navigation/RootNavigation";
import { ContentType } from "../../Components/Fetch/Headers";

import {API} from '@env';

export function register(email: string, firstName: string, lastName: string, nickname: string, password: string, passwordAgain: string) {
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
      console.log("fd");
      
      fetch(`${API}/person/registration`, {
        method: 'POST',
        headers: {
          'content-type': ContentType.APPLICATION_JSON
        },
        body: JSON.stringify(data)
      }).then(res => res.json())
        .then(data => {
            console.log(data.message);
            if(data.ok) {
                navigate('Login');
            } 
        })
        .catch(err => console.error(err))
}