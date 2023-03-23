import styled from "@emotion/styled"

export const Wrapper = styled.div`
  padding-top: 120px;
  background-image: url("/home/animals-background.png");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding-top: 60px;
  }
`

export const ContentContainer = styled.div`
  max-width: 640px;
`

export const CardsWrapper = styled.div`
  margin-top: 20px;
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
  margin: 60px 0 120px;
`

export const CardWrapper = styled.div`
  display: flex;
  width: 30%;
  align-items: stretch;
  margin-top: 60px;

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
    margin-top: 96px;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    margin-top: 26px;
  }
`
