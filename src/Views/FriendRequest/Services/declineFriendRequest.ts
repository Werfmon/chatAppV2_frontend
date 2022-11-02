import EnvConfig from "../../../../EnvConfig";
import { getTokenFromStorage } from "../../../Helper/getTokenFromStorage";
import { Dispatch, SetStateAction } from "react";

export function DeclineFriendRequest(uuid: string, refresh: number, setRefresh: Dispatch<SetStateAction<number>>): void {
    getTokenFromStorage().then((token) => {
      fetch(`${EnvConfig.API}/friendship/${uuid}/reject`, {
        method: "PUT",
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.message);
          if (data.ok) {
            setRefresh(refresh + 1);
          }
        })
        .catch((err) => console.error(err));
    });
  }