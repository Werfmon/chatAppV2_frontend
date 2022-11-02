import { getTokenFromStorage } from "../../../Helper/getTokenFromStorage";
import { Dispatch, SetStateAction } from "react";
import EnvConfig from "../../../../EnvConfig";

export function acceptFriendRequest(uuid: string, refresh: number, setRefresh: Dispatch<SetStateAction<number>>): void {
    getTokenFromStorage().then((token) => {
      fetch(`${EnvConfig.API}/friendship/${uuid}/accept`, {
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