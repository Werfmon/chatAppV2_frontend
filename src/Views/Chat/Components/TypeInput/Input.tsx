import styled from "styled-components/native";

import { Color } from "../../../../Components/Style/Color";

export const Input = styled.TextInput`
    background-color: ${() => Color.GREY};
    height: 40px;
    width: 80%;
    border-radius: 30px;
    padding: 0 10px;
    color: ${() => Color.WHITE};
    margin-right: 10px;
`
