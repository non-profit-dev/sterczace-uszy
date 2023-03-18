import styled from "@emotion/styled"

export const Content = styled.div`
  padding-bottom: 120px;
`
export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
`

export const TextContainer = styled.div`
  max-width: 596px;
`
export const CardsContainer = styled.div`
  font-family: ${({ theme }) => theme.fontFamily};
  display: flex;
  gap: 50px;
  justify-content: space-between;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    flex-direction: column;
    gap: 0;
  }
`
