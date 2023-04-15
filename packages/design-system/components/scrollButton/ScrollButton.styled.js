import styled from "@emotion/styled"
import { css } from "@emotion/react"

export const ScrollButton = styled.a`
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
export const Icon = styled.span`
  display: inline-flex;

  svg {
    ${({ theme }) =>
      css`
          height: 28px;
          width: 21px;
          
        ${theme.breakpoints.tablet} {
          height: 21px;
          width: 13.5px;
        }

        ${theme.breakpoints.mobile} {
          height: 14px;
          width: 10.5px;
        
      `}
  }
`
