import { API } from "@env";;
import { getTokenFromStorage } from "../../../Helper/getTokenFromStorage";
import {Dispatch, SetStateAction} from 'react';
import { LastMessage } from "../Types/LastMessage";
import { ErrorProps } from "../../_Components/ErrorHanding/Types/ErrorProps";
import { removeError } from "../../_Components/ErrorHanding/Error";
import { Status } from "../../_Components/ErrorHanding/Helper/Status";

export function getLastChatMessage(chatUuid: string, loggedPersonUuid: string, setLastMessage: Dispatch<SetStateAction<LastMessage>>, setError: Dispatch<SetStateAction<ErrorProps>>) {
    getTokenFromStorage().then(token => {
        fetch(`${API}/chat/${chatUuid}/message/last`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if (data.ok) {
                const messageData = data.data;
                const seen = loggedPersonUuid === messageData.person.uuid ? true : messageData.seen;
                const sentDate = messageData.sentDate.split('T')[1].substr(0, 5);

                setLastMessage({message: messageData.text, sentDate: ' • ' + sentDate, seen: seen});
            }
            console.log(data.message);
        })
        .catch(err => {
            // setError({message: 'Last message don\'t load', status: Status.WARNING, show: true});
            // removeError(setError);
            setLastMessage({message: 'Start your chat!', sentDate: '', seen: false});
        })
    }).catch((err) => {
        setError({message: 'Error, try logout and login again', status: Status.ERROR, show: true})
        removeError(setError);
    });
}