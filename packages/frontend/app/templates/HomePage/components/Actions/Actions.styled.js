import styled from "@emotion/styled"

export const Content = styled.div`
  padding-bottom: 120px;
`

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;

  ${({ theme }) => theme.breakpoints.tablet} {
    text-align: left;
    align-items: flex-start;
  }
`

export const TextContainer = styled.div`
  max-width: 596px;
`
export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 70px;

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

  ${({ theme }) => theme.breakpoints.tablet} {
    margin-top: 0;
    align-items: flex-start;
  }
`
