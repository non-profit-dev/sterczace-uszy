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

export const Count = styled.p(
  ({ size, variant, theme }) => `
 font-size : ${sizes[size].desktop};
  ${theme.breakpoints.tabletLg} {
    font-size: ${sizes[size].tablet};
  }
  ${theme.breakpoints.mobileLg} {
    font-size: ${sizes[size].mobile};
  }
  text-align: center;
  display: inline-flex;
  font-weight: 900;
  line-height: 74%;
  font-family: 'Montserrat';
  color: ${theme.colors.primary[500]};
  margin: 0;
  padding: 0;
`
)
