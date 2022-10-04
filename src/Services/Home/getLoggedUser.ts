import { API } from "@env";

export async function getLoggedUser(authToken: string) {
    const res = await fetch(`${API}/auth/logged`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    });
    return await res.json();
}