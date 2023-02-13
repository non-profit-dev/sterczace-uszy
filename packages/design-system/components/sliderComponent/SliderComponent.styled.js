import styled from "@emotion/styled"

export const SliderWrapper = styled.div`
  position: relative;
  margin: 0 auto;
`

export const Dot = styled.div`
  &.dot-class-name {
    color: ${({ theme }) => theme.colors.primary[300]};
    width: 10px;
    height: 10px;
  }
`

export const PrevArrow = styled.div`
  width: 30px;
`

export const NextArrow = styled.div`
  width: 30px;
`

export const Slide = styled.div`
  padding: 0 10px;
`
