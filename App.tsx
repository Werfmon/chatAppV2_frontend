/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  View,
} from 'react-native';
import { MainView } from './src/Views/_Components/MainView';




const App = () => {
  useEffect(() => {
    const data: Object = {
      email: 'email',
      firstName: 'firstName',
      lastName: 'lastName',
      nickname: 'nickname',
      password: 'password',
      base64Image: ""
    }
    
    console.log(data);
        
    // fetch(`http://192.168.43.223:8080/person/registration`, {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // }).then(res => {
    //   return res.json();
    // })
    // .then(data => {
    //   console.log(data);
    // })
    // .catch(err => console.error(err))
  }, [])
  return (
      <View>
        <MainView />
      </View>
  );
};


export default App;
