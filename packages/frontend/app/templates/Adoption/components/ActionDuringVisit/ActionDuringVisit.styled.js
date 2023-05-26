import styled from "@emotion/styled"
import Typography from "design-system/components/typography"

export const Content = styled.div`
  padding: 120px 0;

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
    max-width: 326px;
  }
`
export const Description = styled(Typography)`
  text-align: left;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    text-align: center;
  }
`
