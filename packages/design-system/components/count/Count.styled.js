import styled from "@emotion/styled"

const sizes = {
  small: "24px",
  medium: "36px",
  large: "48px",
  xlarge: "70.27px",
  xxlarge: "110px",
}

export const Count = styled.p`
  text-align: center;
  display: inline;
  font-weight: 900;
  font-size: ${({ size }) => sizes[size]};
  line-height: 100%;
  font-family: "Poppins";
  color: ${({ theme }) => theme.colors.primary[500]};
  margin: 0;
`
