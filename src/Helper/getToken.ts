import AsyncStorage from "@react-native-async-storage/async-storage";
import {TokenNotFoundError} from '../../exceptions/TokenNotFoundError'

export async function getToken(): Promise<string> {
    return await AsyncStorage.getItem('token').then(token => {
        if(token === null) {
            throw new TokenNotFoundError("Token in async storage not found");
        }
        console.info("Loaded token from storage: " + token);
        return token;
    }); 
}