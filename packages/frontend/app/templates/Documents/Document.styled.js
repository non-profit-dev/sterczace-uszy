import styled from "@emotion/styled"

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 120px;
  gap: 32px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    align-items: flex-start;
    padding: 65px 56px;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 56px 24px;
  }
`
