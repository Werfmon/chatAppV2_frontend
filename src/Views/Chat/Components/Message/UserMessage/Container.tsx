import styled from "styled-components/native";

import { Color } from "../../../../../Components/Style/Color";

export const Container = styled.View`
  border-radius: 25px;
  background-color: ${() => Color.ORANGE};
  padding: 7px;
  max-width: 90%;
  align-self: flex-end;
  margin: 2px 0;
`