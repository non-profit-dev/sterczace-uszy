import styled from "@emotion/styled"

const sizes = {
  xsmall: {
    desktop: "48px",
    tablet: "44px",
    mobile: "40px",
  },
  small: {
    desktop: "72px",
    tablet: "56px",
    mobile: "40px",
  },
  medium: {
    desktop: "110px",
    tablet: "90px",
    mobile: "60px",
  },
  large: {
    desktop: "140px",
    tablet: "100px",
    mobile: "70px",
  },
}

export const Count = styled.p`
  font-size: ${({ size }) => sizes[size].desktop};

  ${({ theme }) => theme.breakpoints.tabletLg} {
    font-size: ${({ size }) => sizes[size].tablet};
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    font-size: ${({ size }) => sizes[size].mobile};
  }
  text-align: center;
  align-items: flex-end;
  display: inline-flex;
  font-weight: 900;
  font-family: "Montserrat";
  line-height: 74%;
  color: ${({ color, theme }) =>
    color === `primary`
      ? theme.colors.primary[500]
      : theme.colors.neutrals[100]};
  margin: 0;
  padding: 0;
`
