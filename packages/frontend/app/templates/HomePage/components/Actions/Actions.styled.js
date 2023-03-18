import styled from "@emotion/styled"

export const Content = styled.div`
  padding-bottom: 120px;
`
export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    text-align: left;
    align-items: flex-start;
  }
`

export const TextContainer = styled.div`
  max-width: 596px;
`
export const CardsContainer = styled.div`
  font-family: ${({ theme }) => theme.fontFamily};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 70px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    grid-template-columns: 1fr;
    gap: 0;
  }
`
