import React from 'react';
import styled from 'styled-components/native';

import { Color } from '../../../Components/Style/Color';

const Switch = styled.Switch`
  transform: scaleX(1.1) scaleY(1.1);
`;

export default function SwitchButton({state, setState}: any) {
  function toggle() {
    setState(!state);
  }

  return (
    <Switch
      onValueChange={toggle}
      value={state}
      trackColor={{false: Color.GREY, true: Color.GREY}}
      thumbColor={state ? Color.ORANGE : Color.WHITE}
      ios_backgroundColor={Color.GREY}
    />
  );
}