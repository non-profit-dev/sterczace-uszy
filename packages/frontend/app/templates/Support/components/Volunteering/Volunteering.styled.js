import styled from "@emotion/styled"
import Container from "design-system/components/container"
import Image from "design-system/components/image"
import TextBanner from "design-system/patterns/textBanner"

export const ContainerSection = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  margin: 50px auto;
  padding-bottom: 50px;
`

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.neutrals[200]};
  padding: 10px 0px 0px;
  ${({ theme }) => theme.breakpoints.mobileLg} {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    margin-bottom: 10px;
  }
  ${({ theme }) => theme.breakpoints.tabletLg} {
    margin: 0px auto;
    padding: 0px;
  }
`

export const TextBottomWrapper = styled.div`
  grid-column: 1 / 3;
  grid-row: 1;
  padding-bottom: 30px;
  max-width: 90%;
`

export const Img = styled(Image)`
  grid-row: 1 / span 2;
  height: 400px;
  width: 400px;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    width: 100vw;
    position: relative;
    height: 600px;
    border-radius: 0;
    margin-left: -56px;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    display: none;
  }
`
export const TextWrapper = styled.div`
  grid-column: 3 / 3;
  grid-row: 2;
  padding-left: 40px;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    width: 80%;
    grid-column: 1;
    grid-row: 10;
    padding-left: 0px;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    width: 100%;
  }
`

export const Banner = styled(TextBanner)`
  grid-column: 3 / 3;
  grid-row: 1;
  width: 100%;
  padding-left: 40px;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding-top: 270px;
    grid-column: 1;
    grid-row: 9;
    padding-left: 0px;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding-top: 140px;
  }
`
export const FeatureWrapper = styled.div`
  grid-row: 3;
  width: 160%;
  svg {
    width: 17%;
    height: 80%;
  }

  ${({ theme }) => theme.breakpoints.tabletLg} {
    grid-column: 1;
    grid-row: 11;
    width: 90%;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    width: 100%;
  }
`

export const ImageWrapper = styled.div`
  position: absolute;
  transform: rotate(25deg);
  margin-top: 700px;
  right: 140px;
  width: 35%;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    transform: rotate(0deg);
    margin-left: 0px;
    margin-top: 630px;
    width: 80%;
    grid-column: 1;
    grid-row: 2;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    transform: rotate(0deg);
    margin-left: 0px;
    width: 70%;
    margin-top: 40px;
    margin-bottom: 10px;
    grid-column: 1;
    grid-row: 1;
  }
`

export const Title = styled.div`
  padding-top: 50px;
  padding-bottom: 30px;
  margin-left: 0px;
`

export const Button = styled.div`
  margin-top: 50px;
  grid-column: 3 / 3;
  grid-row: 5;
  margin-left: 120px;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    margin-left: 240px;
    grid-column: 1;
    grid-row: 12;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    transform: rotate(0deg);
    margin-left: 70px;
    width: 80%;
    grid-column: 1;
    grid-row: 12;
  }
`
