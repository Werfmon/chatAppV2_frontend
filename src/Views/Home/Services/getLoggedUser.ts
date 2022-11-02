import { Dispatch, SetStateAction } from "react";
import EnvConfig from "../../../../EnvConfig";
import { getTokenFromStorage } from "../../../Helper/getTokenFromStorage";
import { User } from "../Types/User";

export function getLoggedUser(setUser: Dispatch<SetStateAction<User | null>>) {
  getTokenFromStorage()
    .then((token) => {
      fetch(`${EnvConfig.API}/auth/logged`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.ok) {
            setUser(data.data);
          }
          console.info(data.message);
        }).catch(err => console.error(err));
    })
    .catch((err) => console.error(err));
}
