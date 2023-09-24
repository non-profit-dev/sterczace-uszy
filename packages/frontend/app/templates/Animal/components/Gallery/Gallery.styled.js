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
  display: block;
  width: 100%;
  height: 600px;

  ${({ theme }) => theme.breakpoints.mobileLg} {
    height: 340px;
  }
`

export const Slider = styled(SliderComponent)`
  width: 100%;
  padding: 16px 0;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding: 16px 0;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 16px 0;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
  max-height: 190px;
  height: 100%;
  aspect-ratio: 1;
  border-radius: 12px;
  border: 2px solid
    ${({ active, theme }) =>
      active ? theme.colors.primary[500] : "transparent"};

  ${({ theme }) => theme.breakpoints.tabletLg} {
    max-height: 260px;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    max-height: 150px;
  }
`

export const Length = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
