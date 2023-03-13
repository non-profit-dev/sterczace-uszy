import styled from "@emotion/styled"

export const Count = styled.p`
  text-align: center;
  display: inline;
  font-weight: 900;
  font-size: ${({ variant }) => (variant === "title" ? `48px` : `110px`)};
  line-height: 100%;
  font-family: "Poppins";
  color: ${({ theme }) => theme.colors.primary[500]};
  margin: 0;
  ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ variant }) => (variant === "title" ? `48px` : `94px`)};
  }
  ${({ theme }) => theme.breakpoints.mobile} {
    font-size: ${({ variant }) => (variant === "title" ? `24px` : `70px`)};
  }
`
