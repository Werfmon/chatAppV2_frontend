import React from 'react';
import { Animated, Easing } from 'react-native';

import { CenterView } from '../_Components/CenterView';
import { MainView } from '../_Components/MainView';
import { Spinner } from './Components/Spinner';

const LoadingScreen = () => {
  let spinValue = new Animated.Value(0);
  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <MainView>
      <CenterView height='100%'>
        <Animated.View style={{transform: [{rotate: spin}]}}>
          <Spinner></Spinner>
        </Animated.View>
      </CenterView>
    </MainView>
  );
};

export default LoadingScreen;
