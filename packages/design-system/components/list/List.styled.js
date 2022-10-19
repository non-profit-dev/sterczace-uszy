import styled from "@emotion/styled"

export const Component = styled.ul`
  display: flex;
  flex-direction: column;
  border: 1px solid blue;
  align-items: flex-start;
  gap: ${({ gap }) => `${gap}px`};
  list-style-type: none;
  padding-left: 0;
  margin: 0;
`
