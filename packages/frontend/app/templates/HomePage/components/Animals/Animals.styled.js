import styled from "@emotion/styled"

export const ContentContainer = styled.div`
  max-width: 640px;
`

export const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    flex-direction: column;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px 0 120px;
`

export const CardsWrapper = styled.div`
  display: flex;
  width: 30%;
  align-items: stretch;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    width: 100%;
  }
`
export const SliderWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: flex;
  }
`
