import styled from "@emotion/styled"

export const Content = styled.div`
  padding: 120px 0;

  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 60px 0;
  }
`

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    align-items: start;
  }
`

export const TextContainer = styled.div`
  max-width: 596px;
`

export const CardsContainer = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    grid-template-columns: 1fr;
    gap: 0;
  }
`

export const ButtonWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    margin-top: 0;
    align-items: flex-start;
  }
`
