import {API} from '@env';

export function addNewFriend(authToken: string, newFriendUuid: string) {
    
    fetch(`${API}/friendship/${newFriendUuid}/add`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    }).then(res => res.json())
    .then(data => {
        console.log(data);
    });
}