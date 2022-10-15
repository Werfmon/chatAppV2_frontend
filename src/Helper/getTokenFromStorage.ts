import AsyncStorage from "@react-native-async-storage/async-storage";

export function getTokenFromStorage(): Promise<string> {
  return AsyncStorage.getItem("token").then((token) => {
    console.log("token lol");
    if (token === null) {
      return '';
    }
    return token;
  });
}
