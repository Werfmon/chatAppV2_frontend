import styled from 'styled-components/native';

export const CenterView = styled.View<{height: string}>`
  display: flex;
  justify-content: center;
  height: ${props => props.height};
  align-items: center;
`;
