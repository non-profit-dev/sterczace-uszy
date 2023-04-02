import styled from "@emotion/styled"
import Container from "design-system/components/container"
import Image from "design-system/components/image"
import TextBanner from "design-system/patterns/textBanner"

export const ContainerSection = styled(Container)`
  margin: 100px auto;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    margin: 0;
    padding: 0;
  }
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    margin-bottom: 10px;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    margin-bottom: 10px;
    grid-template-columns: 1fr;
  }
`

export const Img = styled(Image)`
  grid-row: 3;
  width: 80%;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    width: 100vw;
    height: 130vw;
    border-radius: 0;
    grid-row: 1;
  }
`

export const TextBottomWrapper = styled.div`
  grid-column: 1 / 3;
  grid-row: 1;
  padding-top: 30px;
  padding-bottom: 30px;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding-top: 20px;
    max-width: 90%;
  }
`

export const Banner = styled(TextBanner)`
  grid-column: 1 / 3;
  grid-row: 1;
  padding-top: 20px;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    grid-column: 1 / 3;
    grid-row: 2;
    padding-left: 20px;
    padding-right: 20px;
    max-width: 100%;
  }
`

export const FeatureWrapper = styled.div`
  grid-row: 3;
  padding-top: 30px;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding-left: 20px;
    padding-right: 10px;
  }
`
