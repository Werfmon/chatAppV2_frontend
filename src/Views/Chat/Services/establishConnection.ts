import { Dispatch, SetStateAction } from "react";
import { getTokenFromStorage } from "../../../Helper/getTokenFromStorage";

export function establishConnection(setWebSocket: Dispatch<SetStateAction<WebSocket>>, WS_URL: string) {
    getTokenFromStorage().then((token) => {
        const headers = { Authorization: "" };
        headers["Authorization"] = `Bearer ${token}`;
        console.log("Auth token: " + headers.Authorization);
        const webSocketLocal = new WebSocket(WS_URL, null, { headers });
        setWebSocket(webSocketLocal);
  
        webSocketLocal.onopen = () => {
          console.info("Connection is opened");
        };
  
        webSocketLocal.onerror = (e: any) => {
          console.error(e);
        };
      });
}