import styled from "@emotion/styled"

export const SliderWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0 50px;
`

export const PrevArrow = styled.div`
  ${({ theme }) => theme.breakpoints.tabletLg} {
    position: absolute;
    top: 265px;
    left: 200px;
  }
`

export const NextArrow = styled.div`
  ${({ theme }) => theme.breakpoints.tabletLg} {
    position: absolute;
    top: 265px;
    left: 330px;
  }
`

export const Slide = styled.div`
  padding: 0 10px;
`

export const Dots = styled.div`
  ${({ theme }) => theme.breakpoints.tabletLg} {
    background: ${({ theme }) => theme.colors.primary[300]};
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-top: 46px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
