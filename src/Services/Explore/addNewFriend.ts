import {API} from '@env';

export async function addNewFriend(authToken: string, newFriendUuid: string) {
    const res = await fetch(`${API}/friendship/${newFriendUuid}/add`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    });
    return await res.json();
}