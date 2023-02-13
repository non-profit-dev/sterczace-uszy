import styled from "@emotion/styled"

export const Container = styled.h1`
  margin: 0;
  color: ${({ color }) => color};
  font-family: ${({ theme }) => theme.fontFamily};
  ${({ variant, theme }) => theme.typography.desktop[variant]};

  ${({ theme }) => theme.breakpoints.tablet} {
    ${({ theme, variant }) => theme.typography.tablet[variant]}
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    ${({ theme, variant }) => theme.typography.mobile[variant]}
  }
`
