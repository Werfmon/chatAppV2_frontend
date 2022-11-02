import EnvConfig from "../../../../EnvConfig";
import { getTokenFromStorage } from "../../../Helper/getTokenFromStorage";
import { Dispatch, SetStateAction } from "react";

export function getAllWaitingUsers(setUsers: Dispatch<SetStateAction<Array<Object>>>) {
  
  getTokenFromStorage().then((token) => {
    fetch(`${EnvConfig.API}/friendship/all/waiting`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) {
          setUsers(data.data);
        } 
        console.info(data.message);
      })
      .catch((err) => console.error(err));
  });
}
