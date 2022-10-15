import { API } from "@env";
import { getTokenFromStorage } from "../../Helper/getTokenFromStorage";

export function declineFriendRequest(uuid: string) {
    getTokenFromStorage().then(token => {
        fetch(`${API}/friendship/${uuid}/reject`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${token}`
            }
        }).then(res => res.json())
        .then(data => {
            console.log(data.message);
        })
    })
}