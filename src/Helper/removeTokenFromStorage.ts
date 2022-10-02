import AsyncStorage from "@react-native-async-storage/async-storage";

export async function removeTokenFromStorage(): Promise<void> {
    try {
        await AsyncStorage.removeItem('token')
        console.info("Token removed from storage")
    } catch(e) {
        console.error("Error occured in removing token from storage\n message:\n" + e);
    }
}