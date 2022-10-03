import styled from "styled-components/native";

import { Color } from "../../../Components/Style/Color";

export const CustomTextInput = styled.TextInput`
  width: 80%;
  background-color: ${() => Color.INPUT_GREY};
  border-radius: 30px;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 18px;
  color: ${() => Color.WHITE};
`;