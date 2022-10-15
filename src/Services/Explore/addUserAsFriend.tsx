import { getTokenFromStorage } from "../../Helper/getTokenFromStorage"
import { addNewFriend } from "./addNewFriend"

export function addUserAsFriend(uuid: string): void {
    getTokenFromStorage().then(token => {
      addNewFriend(token, uuid);
    }).catch(err => console.error(err))
  }