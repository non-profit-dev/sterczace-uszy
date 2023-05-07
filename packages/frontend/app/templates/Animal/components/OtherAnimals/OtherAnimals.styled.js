import styled from "@emotion/styled"

export const Wrapper = styled.section`
  padding-top: 120px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding-top: 100px;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding-top: 20px;
  }
`

export const ContentContainer = styled.div`
  max-width: 784px;
`

export const CardsWrapper = styled.div`
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: none;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 60px;
`

export const CardWrapper = styled.div`
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
    display: block;
    width: 100vw;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 66px;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    margin-top: 26px;
  }
`
