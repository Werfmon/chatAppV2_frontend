import styled from "styled-components/native";
import { Color } from "../../../../Components/Style/Color";

export const LastMessageDate = styled.Text`
    color: ${(props: any) => props.seen ? Color.TEXT_LAST_MESSAGE : Color.TEXT_LAST_MESSAGE_UNSEEN};
    font-weight: ${(props: any) => props.seen ? 200 : 600};
`