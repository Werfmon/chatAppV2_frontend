import { API } from "@env";

export async function getAllRequestingUsers(authToken: string) {
    
    const res = await fetch(`${API}/friendship/all/waiting`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    });

    return await res.json();
}