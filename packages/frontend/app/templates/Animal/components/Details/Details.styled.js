import styled from "@emotion/styled"

import ImageComponent from "design-system/components/image"
import SliderComponent from "design-system/components/slider"

export const Section = styled.section`
  display: flex;
  gap: 96px;

  ${({ theme }) => theme.breakpoints.desktopSm} {
    gap: 40px;
  }

  ${({ theme }) => theme.breakpoints.tabletLg} {
    flex-direction: column;
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

export const Gallery = styled.div`
  width: 50%;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    width: 100%;
  }
`

export const Content = styled.div`
  width: 40%;

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
    padding-top: 16px;
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
  border-radius: 14px;
  border: 3px solid
    ${({ active, theme }) =>
      active ? theme.colors.primary[500] : "transparent"};
`

export const Length = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
