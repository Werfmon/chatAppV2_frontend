import { getTokenFromStorage } from "../../Helper/getTokenFromStorage"
import { addNewFriend } from "./addNewFriend"

export function addUserAsFriend(uuid: string): void {
    getTokenFromStorage().then(async token => {
      const data = await addNewFriend(token, uuid);
      console.log(data.message);
    }).catch(err => console.error(err))
  }