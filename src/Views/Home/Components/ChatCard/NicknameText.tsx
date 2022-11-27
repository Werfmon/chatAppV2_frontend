import styled from "styled-components/native";
import { Color } from "../../../../Components/Style/Color";

export const NicknameText = styled.Text`
  color: ${(props: any) => props.seen ? Color.TEXT_NICKNAME_GREY : Color.TEXT_LAST_MESSAGE_UNSEEN};
  font-size: 17px;
`;
