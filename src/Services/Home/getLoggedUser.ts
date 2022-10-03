import { API } from "@env";

export function getLoggedUser(authToken: string): Promise<any> {
    return fetch(`${API}/auth/logged`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
    .then(res => res.json())
}