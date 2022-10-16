import styled from "@emotion/styled"

export const Component = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => `${gap}`};
  padding-left: 0; //to change
  margin: 0; //to change
`
