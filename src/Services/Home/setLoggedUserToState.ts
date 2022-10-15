import { getTokenFromStorage } from "../../Helper/getTokenFromStorage";
import { getLoggedUser } from "./getLoggedUser";

export function setLoggeduserToState(setState: any) {
    getTokenFromStorage().then(async token => {
        let data = await getLoggedUser(token)
        setState(data.data);
    }).catch(err => console.error(err));
}