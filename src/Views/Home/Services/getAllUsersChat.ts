import { getTokenFromStorage } from "../../../Helper/getTokenFromStorage";
import EnvConfig from "../../../../EnvConfig";

export function getAllUsersChat(setUserChats: any) {
  getTokenFromStorage()
    .then((token) => {
      fetch(`${EnvConfig.API}/chat/current-person`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.ok) {
            setUserChats(data.data);
          }
          console.info(data.message);
          console.log(data.data.map((c: any) => c.friendship.person.nickname))
        })
        .catch((err) => console.error(err));
    })
    .catch((err) => console.log(err));
}
