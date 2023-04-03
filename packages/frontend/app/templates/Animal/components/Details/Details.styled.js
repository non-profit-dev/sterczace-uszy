import styled from "@emotion/styled"

import ImageComponent from "design-system/components/image"
import SliderComponent from "design-system/components/slider"

export const Section = styled.section`
  display: grid;
  grid-template-columns: 50% 40%;
  gap: 96px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    grid-template-columns: auto;
    gap: 40px;
  }
`

export const Feature = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Tabs = styled.div`
  margin-top: 40px;
`

export const Gallery = styled.div``

export const MainImage = styled(ImageComponent)`
  width: 600px;
  height: 600px;
`

export const Slider = styled(SliderComponent)`
  margin-left: -40px;
  padding-top: 16px;
`

export const Image = styled(ImageComponent)`
  width: 190px;
  height: 190px;
  border: 3px solid
    ${({ active, theme }) =>
      active ? theme.colors.primary[500] : "transparent"};
`
