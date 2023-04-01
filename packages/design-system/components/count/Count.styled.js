import styled from "@emotion/styled"

const sizes = {
  xsmall: {
    desktop: { fontSize: "48px" },
    tablet: { fontSize: "44px" },
    mobile: { fontSize: "40px" },
  },
  small: {
    desktop: { fontSize: "72px" },
    tablet: { fontSize: "56px" },
    mobile: { fontSize: "40px" },
  },
  medium: {
    desktop: { fontSize: "110px" },
    tablet: { fontSize: "90px" },
    mobile: { fontSize: "60px" },
  },
  large: {
    desktop: { fontSize: "140px" },
    tablet: { fontSize: "100px" },
    mobile: { fontSize: "70px" },
  },
}

export const Count = styled.p(
  ({ size, variant, theme }) => `
 font-size : ${sizes[size].desktop.fontSize};

  ${theme.breakpoints.tabletLg} {
    font-size: ${sizes[size].tablet.fontSize};
  }

  ${theme.breakpoints.mobileLg} {
    font-size: ${sizes[size].mobile.fontSize};
  }

  text-align: center;
  display: inline-flex;
  align-items: ${variant === "title" ? `center` : `flex-end`};
  font-weight: 900;
  line-height: 74%;
  font-family: "Poppins";
  color: ${theme.colors.primary[500]};
  margin: 0;
  padding: 0;
`
)
