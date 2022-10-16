import styled from "styled-components/native";
import { Color } from "../../../../../Components/Style/Color";

export const OnlineDot = styled.View`
  height: 8px;
  width: 8px;
  border-radius: 10px;
  background-color: ${Color.ONLINE_COLOR};
  position: absolute;
  top: 80%;
  left: 80%;
`