import { getTokenFromStorage } from "../../Helper/getTokenFromStorage";
import { getAllAvailableUsersByText } from "./getAllAvailableUsersByText";

export function searchUsers(search: string, setState: any): void {
    getTokenFromStorage().then(async token => {
      const data = await getAllAvailableUsersByText(token, search);
      setState(data.data);      
  }).catch(err => {
      console.log(err);
    })
  }