import { API } from "@env";;
import { getTokenFromStorage } from "../../../Helper/getTokenFromStorage";
import {Dispatch, SetStateAction} from 'react';
import { ErrorProps } from "../../_Components/ErrorHanding/Types/ErrorProps";
import { removeError } from "../../_Components/ErrorHanding/Error";
import { Status } from "../../_Components/ErrorHanding/Helper/Status";

export function setMessagesAsSeen(chatUuid: string, setError: Dispatch<SetStateAction<ErrorProps>>) {
    getTokenFromStorage().then(token => {
        fetch(`${API}/chat/${chatUuid}/messages/set-seen/latest`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${token}` 
            }
        })
        .then(res => res.json())
        .then(data => {
            console.info(data.message);
        })
        .catch(err => {
        })
    }).catch(err => {
        setError({message: 'Error, try logout and login again', status: Status.ERROR, show: true})
        removeError(setError);
    })
}