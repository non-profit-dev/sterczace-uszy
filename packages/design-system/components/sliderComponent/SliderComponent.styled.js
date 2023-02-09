// import styled from "@emotion/styled"

const SliderWrapper = styled.div`
  position: relative;
  margin: 0 auto;
`

const Dot = styled.div`
  &.dot-class-name {
    color: ${({ theme }) => theme.colors.primary[300]};
    width: 10px;
    height: 10px;
  }
`

const PrevArrow = styled(Arrow)`
  width: 30px;
`

const NextArrow = styled(Arrow)`
  width: 30px;
`
