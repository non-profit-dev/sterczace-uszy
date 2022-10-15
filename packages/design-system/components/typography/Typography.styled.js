import styled from "@emotion/styled"

export const Container = styled.h1`
  ${({ variant, theme }) => theme.typography.breakpoints[variant]};
  color: ${({ color }) => color};
  @media (max-width: 1200px) {
    ${({ variant, theme }) => theme.typography.breakpoints.xxl[variant]};
  }
  @media  {
    ${({ variant, theme }) => theme.typography.breakpoints.xl[variant]};
  }

  @media (max-width: 992px) {
    ${({ variant, theme }) => theme.typography.breakpoints.lg[variant]};
  }

  @media (max-width: 768px) {
    ${({ variant, theme }) => theme.typography.breakpoints.md[variant]};
  }

  @media (max-width: 576px) {
    ${({ variant, theme }) => theme.typography.sm[variant]};
  }
`
