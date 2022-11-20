import styled from "styled-components/native";
import { Status } from "../Helper/Status";

type Props = {
    status: Status
    show: boolean
}

export const Container = styled.View`
    position: relative;
    top: 0;
    width: 100%;
    height: ${(props: Props) => props.show ? 'auto' : 0};
    background-color: ${(props: Props) => props.status};
    z-index: 1000;
`