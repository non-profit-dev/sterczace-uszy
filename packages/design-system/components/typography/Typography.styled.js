import styled from "@emotion/styled"

export const Container = styled.h1`
  ${({ variant, theme }) => theme.typography.desktop[variant]};
  color: ${({ color }) => color};
  breakpoints: ${({ breakpoints }) => breakpoints};
`
