import styled from "@emotion/styled"

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  padding: 120px 0;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    flex-direction: column;
    gap: 60px;
    padding: 105px 0;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    gap: 40px;
    padding: 60px 0;
  }
`
