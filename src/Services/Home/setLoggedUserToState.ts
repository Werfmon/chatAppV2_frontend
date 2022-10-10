import { getTokenFromStorage } from "../../Helper/getTokenFromStorage";
import { getLoggedUser } from "./getLoggedUser";

export function setLoggeduserToState(setState: any) {
    getTokenFromStorage().then(token => {
        
        getLoggedUser(token).then(data => {
            setState(data.data);
        }).catch(err => console.error(err));
    }).catch(err => console.error(err));
}