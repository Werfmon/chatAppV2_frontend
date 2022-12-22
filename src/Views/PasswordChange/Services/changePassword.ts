import { ErrorProps } from "../../_Components/ErrorHanding/Types/ErrorProps";
import { Dispatch, SetStateAction } from 'react';
import { getTokenFromStorage } from "../../../Helper/getTokenFromStorage";
import { Status } from "../../_Components/ErrorHanding/Helper/Status";
import { removeError } from "../../_Components/ErrorHanding/Error";
import EnvConfig from "../../../../EnvConfig";
import { ContentType } from "../../../Components/Fetch/Headers";
import { InputRules } from "../../../Helper/InputRules";

export function changePassword(oldPassword: string, newPassword: string, newPasswordAgain: string, setError: Dispatch<SetStateAction<ErrorProps>>): void {
    getTokenFromStorage().then(token => {
        if (newPassword !== newPasswordAgain) {
            console.warn('Passwords are not same');
            setError({message: 'Passwords are not same', status: Status.WARNING, show: true})
        } else if (newPassword.length <= InputRules.PASSWORD_MAX_LENGTH) {
            console.warn('Password is too short');
            setError({message: 'Password is too short', status: Status.WARNING, show: true})
        } else {

            const data = { oldPassword, newPassword }
            
            fetch(`${EnvConfig.API}/person/password`, {
                method: 'PUT',
                headers: {
                    authorization: `Bearer ${token}`,
                    'content-type': ContentType.APPLICATION_JSON
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                if (data.ok) {
                    setError({message: data.message, status: Status.INFO, show: true})
                } else {
                    setError({message: data.message, status: Status.WARNING, show: true})
                }
                console.info(data.message);
            })
            .catch(err => {
                console.error(err);
                setError({message: 'Something went wrong', status: Status.WARNING, show: true})
            })
        }
    }).catch(err => {
        console.error(err);
        setError({message: 'Something went wrong, try restart application', status: Status.ERROR, show: true})
    }).finally(() => {
        removeError(setError);
    })
}