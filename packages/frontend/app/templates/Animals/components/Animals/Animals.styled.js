import styled from "@emotion/styled"

export const Wrapper = styled.section`
  padding: 120px 0;

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 100px 0;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 60px 0;
  }
`

export const ContentContainer = styled.div`
  max-width: 778px;
`

export const CardsWrapper = styled.div`
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    flex-direction: column;
    margin-top: 32px;
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
`

export const CardWrapper = styled.div`
  display: flex;
  width: 30%;
  align-items: stretch;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    width: 100%;
  }
`
