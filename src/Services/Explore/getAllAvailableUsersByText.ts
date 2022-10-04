import { API } from '@env';

export async function getAllAvailableUsersByText(authToken: string, search: string) {
    const res = await fetch(`${API}/person/all-available?search=${search}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    });
    return await res.json();
}