import styled from 'styled-components/native';

export const ColoredText = styled.Text<{color: string}>`
    color: ${props => props.color};
`;