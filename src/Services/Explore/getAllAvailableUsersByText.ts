import { API } from '@env';
import { delay } from '../../Helper/delay';

export async function getAllAvailableUsersByText(authToken: string, search: string) {
    await delay(20);
    const res = await fetch(`${API}/person/all-available?search=${search}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    });
    return res.json();
}