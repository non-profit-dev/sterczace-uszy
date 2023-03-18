import styled from "@emotion/styled"

export const Count = styled.p`
  text-align: center;
  display: inline-flex;
  align-items: ${({ variant }) =>
    variant === "title" ? `center` : `flex-end`};
  font-weight: 900;
  font-size: ${({ variant }) => (variant === "title" ? `48px` : `110px`)};
  line-height: 81px;
  font-family: "Poppins";
  color: ${({ theme }) => theme.colors.primary[500]};
  margin: 0;
  padding: 0;
  ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ variant }) => (variant === "title" ? `48px` : `94px`)};
    line-height: 70px;
  }
  ${({ theme }) => theme.breakpoints.mobile} {
    font-size: ${({ variant }) => (variant === "title" ? `48px` : `70px`)};
    line-height: 52px;
  }
`
