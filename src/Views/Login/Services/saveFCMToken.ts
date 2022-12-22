import { getTokenFromStorage } from "../../../Helper/getTokenFromStorage";
import messaging from "@react-native-firebase/messaging";
import { API } from "@env";;
import { ContentType } from "../../../Components/Fetch/Headers";

export function saveFCMToken(): void {
    getTokenFromStorage().then(token => {
        messaging().registerDeviceForRemoteMessages().then(_ => {
            messaging().getToken().then(fcmToken => {
                console.log("FCM token: " + fcmToken);
                
                fetch(`${API}/person/subscribe`, {
                    method: 'PUT',
                    headers: {
                        authorization: `Bearer ${token}`,
                        'content-type': ContentType.APPLICATION_JSON
                    },
                    body: JSON.stringify({token: fcmToken})
                })
                .then(res => res.json())
                .then(data => {
                    if (data.ok) {
                        console.log(data.message);
                    }
                }).catch(err => {
                    console.error(err);
                })
            });
          });
    }).catch(err => {
        console.log("Cannot get JWT token");
    });
}