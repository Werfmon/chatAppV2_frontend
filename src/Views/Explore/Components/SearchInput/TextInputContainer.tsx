import styled from "styled-components/native";
import { Color } from "../../../../Components/Style/Color";

export const TextInputContainer = styled.View`
    background-color: ${() => Color.INPUT_GREY};
    width: 100%;
    border-radius: 20px;
    height: 27px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 8px;
`