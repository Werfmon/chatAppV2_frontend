import styled from "styled-components/native";

import { Color } from "../../../../Components/Style/Color";

export const InputContainer = styled.View`
    bottom: 0;
    width: 100%;
    height: 50px;
    position: absolute;
    background-color: ${() => Color.BLACK};
    justify-content: center;
    align-items: center;
    flex-direction: row;
`