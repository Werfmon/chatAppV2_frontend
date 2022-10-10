import { API } from "@env";

export async function getAllRequestingUsers(authToken: string) {
    const res = await fetch(`${API}/friendships/all/waiting`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    });
    return res.json();
}