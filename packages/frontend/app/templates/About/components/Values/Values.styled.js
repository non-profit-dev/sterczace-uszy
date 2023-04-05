import styled from "@emotion/styled"
import Container from "design-system/components/container"
import Image from "design-system/components/image"
import TextBanner from "design-system/patterns/textBanner"

export const ContainerSection = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin: 100px auto;
  padding-bottom: 100px;
  padding-left: 100px;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    margin: 0;
    padding: 0;
  }
`

export const Wrapper = styled.div`
  background: linear-gradient(0deg, #eeeeee 0%, rgba(255, 255, 255, 0) 100%),
    #ffffff;
  padding: 10px auto;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    margin-bottom: 10px;
    padding: 0px auto;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 20px auto;
  }
`

export const Img = styled(Image)`
  grid-row: 3;
  width: 80%;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    width: 100vw;
    height: 100vw;
    border-radius: 0;
    grid-row: 1;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    width: 100vw;
    height: 100vw;
  }
`

export const TextBottomWrapper = styled.div`
  grid-column: 1 / 3;
  grid-row: 1;
  padding-top: 30px;
  padding-bottom: 30px;
  max-width: 90%;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding-top: 20px;
  }
`

export const Banner = styled(TextBanner)`
  grid-column: 1 / 3;
  grid-row: 1;
  padding-top: 20px;
  max-width: 90%;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    grid-column: 1 / 3;
    grid-row: 2;
    padding-top: 40px;
    padding-left: 40px;
    padding-right: 40px;
  }
`

export const FeatureWrapper = styled.div`
  grid-row: 3;
  padding-top: 30px;
  max-width: 90%;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding-left: 40px;
    padding-right: 10px;
    padding-bottom: 20px;
  }
`
