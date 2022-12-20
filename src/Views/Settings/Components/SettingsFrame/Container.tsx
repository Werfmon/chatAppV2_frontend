import styled from "styled-components/native";
import { Color } from "../../../../Components/Style/Color";

export const Container = styled.Pressable`
    flex-direction: row;
    width: 90%;
    background-color: ${Color.GREY};
    padding: 7px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10px;
`