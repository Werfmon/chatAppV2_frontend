import React from 'react';
import styled from 'styled-components/native';
import { Animated, Easing } from 'react-native';

import { Color } from '../constants/Color';

import { CenterView } from '../components/styled/Views/CenterView';
import { MainView } from '../components/styled/Views/MainView';

const Spinner = styled.View`
  width: 100px;
  height: 100px;
  border-right-width: 5px;
  border-right-style : solid;
  border-right-color : ${() => Color.ORANGE};
  border-bottom-width: 5px;
  border-radius: 100px;
`;

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
