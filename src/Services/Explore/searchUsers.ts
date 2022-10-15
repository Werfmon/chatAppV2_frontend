import { getTokenFromStorage } from "../../Helper/getTokenFromStorage";
import { getAllAvailableUsersByText } from "./getAllAvailableUsersByText";

export async function searchUsers(search: string, setState: any) {
    getTokenFromStorage().then(async token => {
      const data = await getAllAvailableUsersByText(token, search);
      setState(data.data);      
    }).catch(err => {
      console.log(err);
  })
}