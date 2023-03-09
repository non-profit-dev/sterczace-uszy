import styled from "@emotion/styled"

export const Banner = styled.div`
  text-align: center;
  padding: 19px;
  position: relative;
  color: ${({ theme }) => theme.colors.gray[600]};
  background-color: ${({ theme }) => theme.colors.complementary[100]};
`

export const Heading = styled.h2`
  text-align: center;
  display: inline;
  margin: 0;
  ${({ theme }) => theme.typography.desktop.bodySmall};
`
