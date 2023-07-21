import styled from "@emotion/styled"
import Container from "design-system/components/container"
import Image from "design-system/components/image"
import TextBanner from "design-system/patterns/textBanner"

export const ContainerSection = styled(Container)`
  display: grid;
  margin: 50px auto;
  position: relative;
`

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.neutrals[200]};
  padding-top: 10px;
  padding-bottom: 50px;
  ${({ theme }) => theme.breakpoints.mobileLg} {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    margin-bottom: 10px;
  }
  ${({ theme }) => theme.breakpoints.tabletLg} {
    margin: 0px auto;
    padding-top: 0px;
    padding-bottom: 50px;
  }
`

export const Img = styled(Image)`
  grid-column: 1;
  grid-row: 1;
  width: 90%;
  height: 90%;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    width: 100vw;
    position: relative;
    height: 600px;
    border-radius: 0;
    margin-left: -56px;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    margin-left: -25px;
  }
`
export const TextWrapper = styled.div`
  grid-column: 2;
  grid-row: 1;
  padding-top: 160px;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    grid-column: 1;
    grid-row: 3;
    padding-left: 0px;
    padding-top: 0px;
    width: 80%;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    grid-row: 4;
    width: 90%;
    padding-top: 0px;
  }
`

export const Banner = styled(TextBanner)`
  grid-column: 2;
  grid-row: 1;
  width: 100%;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    grid-column: 1;
    grid-row: 2;
    padding-left: 0px;
    padding-top: 270px;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding-top: 140px;
    grid-row: 3;
  }
`

export const FeatureWrapper = styled.div`
  grid-row: 3;
  width: 115%;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    grid-column: 1;
    grid-row: 11;
    width: 90%;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    width: 90%;
  }
`

export const ImageWrapper = styled.div`
  position: absolute;
  transform: rotate(25deg);
  margin-top: 845px;
  right: 0px;
  width: 43%;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    transform: rotate(0deg);
    margin-left: 0px;
    right: 250px;
    margin-top: 650px;
    width: 70%;
    grid-column: 1;
    grid-row: 1;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    margin-top: 630px;
    transform: rotate(0deg);
    right: 100px;
  }
`

export const Title = styled.div`
  padding-top: 50px;
  padding-bottom: 30px;
`

export const Button = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`
