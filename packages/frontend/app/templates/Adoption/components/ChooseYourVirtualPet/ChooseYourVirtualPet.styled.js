import styled from "@emotion/styled"

export const Wrapper = styled.section`
  padding-top: 120px;
  padding-bottom: 120px;

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding-top: 100px;
    padding-bottom: 100px;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`

export const ContentContainer = styled.div`
  max-width: 892px;

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 100px 0;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 60px 0;
  }
`

export const CardsWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    flex-direction: column;
    margin-top: 96px;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    gap: 24px;
    margin-top: 26px;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px 0 0;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    margin: 104px 0 0;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    margin: 66px 0 0;
  }
`

export const CardWrapper = styled.div`
  display: flex;
  width: 30%;
  align-items: stretch;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    width: 100%;
  }
`
