import { getTokenFromStorage } from "../../Helper/getTokenFromStorage";
import { getAllRequestingUsers } from "./getAllRequestingUsers";

export function setAllRequestingUsers(setState: any) {
    getTokenFromStorage().then(async token => {
        let data = await getAllRequestingUsers(token);
        if(data.ok) {
            setState(data);
            console.info(data.message);
            console.log(data);
            
        } else {
            console.warn(data.message);
        }
    }).catch(err => console.error(err));  
}