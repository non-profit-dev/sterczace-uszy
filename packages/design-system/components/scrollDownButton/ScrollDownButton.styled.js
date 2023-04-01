import styled from "@emotion/styled"

export const ScrollDownButton = styled.a`
  display: inline-flex;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary[500]};
  border: none;
  ${({ theme }) => theme.breakpoints.tablet} {
    width: 48px;
    height: 48px;
  }
  ${({ theme }) => theme.breakpoints.mobile} {
    width: 32px;
    height: 32px;
  }
`
