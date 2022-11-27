import EnvConfig from "../../../../EnvConfig";
import { getTokenFromStorage } from "../../../Helper/getTokenFromStorage";
import {Dispatch, SetStateAction} from 'react';
import { LastMessage } from "../Types/LastMessage";
import { ErrorProps } from "../../_Components/ErrorHanding/Types/ErrorProps";
import { removeError } from "../../_Components/ErrorHanding/Error";
import { Status } from "../../_Components/ErrorHanding/Helper/Status";

export function getLastChatMessage(chatUuid: string, setLastMessage: Dispatch<SetStateAction<LastMessage>>, setError: Dispatch<SetStateAction<ErrorProps>>) {
    getTokenFromStorage().then(token => {
        fetch(`${EnvConfig.API}/chat/${chatUuid}/message/last`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if (data.ok) {
                const messageData = data.data;
                console.log(messageData);
                
                const sentDate = messageData.sentDate.split('T')[1].substr(0, 5);
                setLastMessage({message: messageData.text, sentDate: ' • ' + sentDate, seen: messageData.seen});
            }
            console.log(data.message);
        })
        .catch(err => {
            console.warn(err);
            setError({message: 'Last message don\'t load', status: Status.WARNING, show: true});
            removeError(setError);
        })
    }).catch((err) => {
        console.warn(err)
        setError({message: 'Error, try logout and login again', status: Status.ERROR, show: true})
        removeError(setError);
    });
}