import { removeTokenFromStorage } from "../../../Helper/removeTokenFromStorage";
import { navigate } from "../../../Components/Navigation/RootNavigation";

export function logout(): void {
    removeTokenFromStorage();
    navigate('Login')
}