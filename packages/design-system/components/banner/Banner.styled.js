import styled from "@emotion/styled"

export const Banner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 19px;
  position: relative;
  color: ${({ theme }) => theme.colors.grey[600]};
  background-color: ${({ theme }) => theme.colors.complementary[100]};
`

export const Heading = styled.h2`
  margin: 0;
  ${({ theme }) => theme.typography.desktop.bodySmall};
  }
`
