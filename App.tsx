import React, {useEffect} from "react";
import {AppState} from 'react-native';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";

import { navigationRef } from "./src/Components/Navigation/RootNavigation";
import FriendRequest from "./src/Views/FriendRequest/FriendRequest";
import LoadingScreen from "./src/Views/LoadingScreen/LoadingScreen";
import Registration from "./src/Views/Registration/Registration";
import Settings from "./src/Views/Settings/Settings";
import Explore from "./src/Views/Explore/Explore";
import Login from "./src/Views/Login/Login";
import Home from "./src/Views/Home/Home";
import Chat from "./src/Views/Chat/Chat";
import messaging, { firebase, FirebaseMessagingTypes } from "@react-native-firebase/messaging";
import { firebaseConfig } from "./firebaseConfig";
import Notifee from '@notifee/react-native';
import { getTokenFromStorage } from "./src/Helper/getTokenFromStorage";
import { Color } from "./src/Components/Style/Color";

const Stack = createNativeStackNavigator();

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

async function onMessageReceived(message: FirebaseMessagingTypes.RemoteMessage) {
  getTokenFromStorage().then(async token => {
    if(AppState.currentState !== "active" && token.length > 0) {
        const { messageId, notification, data } = message;
      
        const channelId = await Notifee.createChannel({
          id: messageId || '',
          name: 'Pressable Channel'
        });
        const notifeeNotification = {
          title: notification?.title || '',
          body: notification?.body || '', 
        data,
        android: {
          channelId,
          smallIcon: 'ic_launcher',
          localOnly: true,
          color: Color.ORANGE
        },
      }
      await Notifee.displayNotification(notifeeNotification);
    }      
  })
}

messaging().onMessage(onMessageReceived);
// messaging().setBackgroundMessageHandler(onMessageReceived);


const App = () => {
  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Login", headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Home", headerShown: false }}
          /> 
          <Stack.Screen
            name="Chat"
            component={Chat}
            options={{ title: "Chat", headerShown: false }}
          />
          <Stack.Screen
            name="Registration"
            component={Registration}
            options={{ title: "Registration", headerShown: false }}
          />
          <Stack.Screen
            name="LoadingScreen"
            component={LoadingScreen}
            options={{ title: "LoadingScreen", headerShown: false }}
          />
          <Stack.Screen
            name="Explore"
            component={Explore}
            options={{ title: "Explore", headerShown: false }}
          />
          <Stack.Screen
            name="FriendRequest"
            component={FriendRequest}
            options={{ title: "FriendRequest", headerShown: false }}
        />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{ title: "Settings", headerShown: false }}
          /> 
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
