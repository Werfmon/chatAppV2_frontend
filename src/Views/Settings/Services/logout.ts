import { navigate } from "../../../Components/Navigation/RootNavigation";
import { removeTokenFromStorage } from "../../../Helper/removeTokenFromStorage";

export function logout(): void {
    removeTokenFromStorage();
    navigate('Login')
}