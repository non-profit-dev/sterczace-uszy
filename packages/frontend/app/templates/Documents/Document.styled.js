import styled from "@emotion/styled"

export const DocumentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 120px 269px;
  gap: 80px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    align-items: flex-start;
    padding: 65px 56px;
    gap: 43px;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 56px 24px;
    gap: 40px;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    align-items: flex-start;
    padding: 65px 56px;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 56px 24px;
  }
`
export const DocumentsInfo = styled.div`
  align-self: flex-start;
`
