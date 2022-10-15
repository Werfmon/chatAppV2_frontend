import { API } from "@env";
import { getTokenFromStorage } from "../../Helper/getTokenFromStorage";

export function acceptFriendRequest(uuid: string) {
    getTokenFromStorage().then(token => {
        fetch(`${API}/friendship/${uuid}/accept`, {
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
