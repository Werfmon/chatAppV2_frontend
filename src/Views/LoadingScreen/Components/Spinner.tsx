import styled from "styled-components/native";
import { Color } from "../../../Components/Style/Color";

export const Spinner = styled.View`
  width: 100px;
  height: 100px;
  border-right-width: 5px;
  border-right-style : solid;
  border-right-color : ${() => Color.ORANGE};
  border-bottom-width: 5px;
  border-radius: 100px;
`;