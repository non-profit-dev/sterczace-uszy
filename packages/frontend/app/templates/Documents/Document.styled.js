import styled from "@emotion/styled"

export const DocumentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 120px 0;
  gap: 80px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    align-items: flex-start;
    padding: 0;
    gap: 43px;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    gap: 40px;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    align-items: flex-start;
    padding-top: 65px;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding-top: 56px;
  }
`
export const DocumentsInfo = styled.div`
  align-self: flex-start;
  
  ${({ theme }) => theme.breakpoints.tabletLg} {
    align-items: flex-start;
    padding-bottom: 65px;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding-bottom 56px;
  }
`

export const Banner = styled.div`
  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: none;
  }
`
