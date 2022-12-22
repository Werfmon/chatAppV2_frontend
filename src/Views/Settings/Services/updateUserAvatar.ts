import { Dispatch, SetStateAction } from "react";

import { API } from "@env";;

import { getTokenFromStorage } from "../../../Helper/getTokenFromStorage";

import { ErrorProps } from "../../_Components/ErrorHanding/Types/ErrorProps";
import { Status } from "../../_Components/ErrorHanding/Helper/Status";
import { removeError } from "../../_Components/ErrorHanding/Error";
import { ContentType } from "../../../Components/Fetch/Headers";

export function updateUserAvatar(base64Image: string, setError: Dispatch<SetStateAction<ErrorProps>>): void {
    getTokenFromStorage().then(token => {
        fetch(`${API}/person/avatar`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${token}`,
                'content-type': ContentType.APPLICATION_JSON
            },
            body: JSON.stringify({base64Image})
        })
        .then(res => res.json())
        .then(data => {
            if (!data.ok) {
                setError({message: 'Something went wrong', status: Status.WARNING, show: true})

            } else {
                setError({message: 'Avatar was changed', status: Status.INFO, show: true})
            }
            console.info(data.message);
        })
        .catch(err => {
            console.warn(err);
            setError({message: 'Something went wrong', status: Status.WARNING, show: true})
        })
    }).catch(err => {
        console.error(err);
        setError({message: 'Something went wrong, try reload app', status: Status.ERROR, show: true})
    }).finally(() => {
        removeError(setError);
    })
}