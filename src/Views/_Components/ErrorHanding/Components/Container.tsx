import styled from "styled-components/native";
import { Status } from "../Helper/Status";

type Props = {
    status: Status
    show: boolean
}

export const Container = styled.View`
    position: absolute;
    top: 0;
    width: 100%;
    background-color: ${(props: Props) => props.status};
    transform: scale(${(props: Props) => props.show ? 1 : 0});
    z-index: 1000;
`