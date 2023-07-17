import styled from "@emotion/styled"
import TextBanner from "design-system/patterns/textBanner"

export const Content = styled.div`
  padding: 120px 0;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding: 100px 0;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 60px 0;
  }
`

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
`

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const Banner = styled(TextBanner)`
  max-width: 670px;
`

export const CardsContainer = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    grid-template-columns: 1fr;
    gap: 0;
    max-width: 398px;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    max-width: 342px;
  }
`
export const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-top: 60px;
  margin-bottom: 0px;
  text-align: center;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    margin-top: 80px;
  }
`
