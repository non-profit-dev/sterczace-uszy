import styled from "@emotion/styled"

export const Banner = styled.div`
  display: flex;
  text-align: center;
  padding: 19px;
  color: ${({ theme }) => theme.colors.grey[600]};
  background-color: ${({ theme }) => theme.colors.complementary[100]};
`

export const Heading = styled.h2`
  display: inline;
  margin: 0;
  ${({ theme }) => theme.typography.desktop.bodySmall};
  }
`
