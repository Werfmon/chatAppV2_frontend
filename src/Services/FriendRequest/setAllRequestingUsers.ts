import { delay } from "../../Helper/delay";
import { getTokenFromStorage } from "../../Helper/getTokenFromStorage";
import { getAllRequestingUsers } from "./getAllRequestingUsers";

export async function setAllRequestingUsers(setState: any) {
    await delay(10);
    getTokenFromStorage().then(async token => {
        let data = await getAllRequestingUsers(token);
        if(data.ok) {
            setState(data.data);
            console.info(data.message);
        } else {
            console.warn(data.message);
        }
    }).catch(err => console.error(err));  
}