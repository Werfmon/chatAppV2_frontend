import EnvConfig from "../../../../EnvConfig";
import { navigate } from "../../../Components/Navigation/RootNavigation";
import { getTokenFromStorage } from "../../../Helper/getTokenFromStorage";

export function isPersonLogged(): void{
    getTokenFromStorage().then(token => {

        fetch(`${EnvConfig.API}/auth/valid-jwt`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if (data.ok) {
                if (data.data) {
                    navigate('Home')
                }
            }
            console.info(data.message);
        }).catch(err => {
            console.error('JWT is invalid');
        })
    })
}