import styled from "@emotion/styled"

export const ResponseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  padding: 72px;
  align-items: flex-start;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding: 0;
  }
`
