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
    margin-bottom: 100px;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    margin-bottom: 80px;
    grid-template-columns: 1fr;
  }
`

export const Img = styled(Image)`
  grid-row: 3;
  width: 80%;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    width: 100vw;
    border-radius: 0;
    grid-row: 1;
  }
`
export const TextWrapper = styled.div`
  grid-column: 1 / 3;
  grid-row: 2;
  padding-bottom: 50px;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding-top: 250px;
    padding-left: 20px;
    padding-right: 10px;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    grid-row: 3;
    padding-top: 20px;
  }
`

export const TextBottomWrapper = styled.div`
  grid-column: 1 / 3;
  grid-row: 2;
  padding-top: 70px;
  padding-bottom: 30px;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding-left: 20px;
    padding-right: 56px;
    padding-top: 350px;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    grid-row: 4;
    padding-top: 5px;
  }
`

export const Banner = styled(TextBanner)`
  grid-column: 1 / 3;
  grid-row: 1;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    grid-column: 1;
    grid-row: 2;
    margin-top: 50px;
    padding-left: 20px;
    padding-right: 56px;
  }
`

export const Featurecomp = styled.div`
  grid-row: 3;
  padding-top: 30px;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding-left: 20px;
    padding-right: 6px;
    grid-row: 6;
  }
`
