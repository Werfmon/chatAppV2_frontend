import { getTokenFromStorage } from "../../Helper/getTokenFromStorage";
import { getLoggedUser } from "./getLoggedUser";

export function setLoggeduserToState(setState: any) {
    getTokenFromStorage().then(token => {
        getLoggedUser(token).then(data => {
            console.log(data.message);
            
            if(data.ok) {
                setState(data.data);
            }
        }).catch(err => console.error(err))
    }).catch(err => console.error(err));
}