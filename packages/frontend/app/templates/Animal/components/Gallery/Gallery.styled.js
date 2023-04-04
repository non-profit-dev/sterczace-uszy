import styled from "@emotion/styled"

import ImageComponent from "design-system/components/image"
import SliderComponent from "design-system/components/slider"

export const Gallery = styled.div`
  width: 50%;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    width: 100%;
  }
`

export const MainImage = styled(ImageComponent)`
  width: 100%;
  height: 600px;

  ${({ theme }) => theme.breakpoints.mobileLg} {
    height: 340px;
  }
`

export const Slider = styled(SliderComponent)`
  width: calc(100% + 40px);
  margin-left: -40px;
  padding-top: 16px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    width: calc(100% + 60px);
    margin-left: -60px;
    padding-bottom: 0;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    width: calc(100% + 24px);
    margin-left: -24px;
    padding-bottom: 16px;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  height: 180px;
  border-radius: 14px;
  border: 3px solid
    ${({ active, theme }) =>
      active ? theme.colors.primary[500] : "transparent"};

  ${({ theme }) => theme.breakpoints.tablet} {
    height: 140px;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    height: 100px;
  }
`

export const Length = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
