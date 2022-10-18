import { API } from "@env";
import { getTokenFromStorage } from "../../Helper/getTokenFromStorage";

export function setAllUsersChat(setState: any) {
  getTokenFromStorage().then((token) => {
    fetch(`${API}/chat/current-person`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    .then(res => res.json())
    .then(data => {
        console.info(data.message);
        setState(data.data)
    }).catch(err => {throw err});
  });
}
