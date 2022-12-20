import { Dispatch, SetStateAction } from "react";
import EnvConfig from "../../../../EnvConfig";
import { ContentType } from "../../../Components/Fetch/Headers";
import { getTokenFromStorage } from "../../../Helper/getTokenFromStorage";
import { removeError } from "../../_Components/ErrorHanding/Error";
import { Status } from "../../_Components/ErrorHanding/Helper/Status";
import { ErrorProps } from "../../_Components/ErrorHanding/Types/ErrorProps";

export function updateUserAvatar(base64Image: string, setError: Dispatch<SetStateAction<ErrorProps>>): void {
    getTokenFromStorage().then(token => {
        fetch(`${EnvConfig.API}/person/avatar`, {
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
                removeError(setError);

            } else {
                setError({message: 'Avatar was changed', status: Status.INFO, show: true})
                removeError(setError);

            }
            console.info(data.message);
        })
        .catch(err => {
            console.warn(err);
            setError({message: 'Something went wrong', status: Status.WARNING, show: true})
            removeError(setError);
        })
    }).catch(err => {
        console.error(err);
        setError({message: 'Something went wrong, try reload app', status: Status.ERROR, show: true})
        removeError(setError);
    })
}