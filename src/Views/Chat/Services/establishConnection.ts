import { Dispatch, SetStateAction } from "react";
import { getTokenFromStorage } from "../../../Helper/getTokenFromStorage";
import { removeError } from "../../_Components/ErrorHanding/Error";
import { Status } from "../../_Components/ErrorHanding/Helper/Status";
import { ErrorProps } from "../../_Components/ErrorHanding/Types/ErrorProps";

export function establishConnection(setWebSocket: Dispatch<SetStateAction<WebSocket>>, WS_URL: string, setError: Dispatch<SetStateAction<ErrorProps>>) {
    getTokenFromStorage().then((token) => {
        const headers = { Authorization: "" };
        headers["Authorization"] = `Bearer ${token}`;
        const webSocketLocal = new WebSocket(WS_URL, null, { headers });
        setWebSocket(webSocketLocal);
  
        webSocketLocal.onopen = () => {
          console.info("Connection is opened");
        };
  
        webSocketLocal.onerror = (e: any) => {
          setError({message: 'Something went wrong, try logout and login again', status: Status.WARNING, show: true});
          removeError(setError);
        };
      });
}