import styled from "@emotion/styled"
import Container from "design-system/components/container"
import Image from "design-system/components/image"
import Title from "design-system/components/title"

export const ContainerSection = styled(Container)`
  margin: 50px auto;
  position: relative;
`

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.neutrals[200]};
  padding-top: 10px;
  padding-bottom: 50px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding-top: 0px;
    padding-bottom: 30px;
  }
`

export const Img = styled(Image)`
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
    height: 300px;
  }
`
export const TextWrapper = styled.div`
  padding-top: 10px;
  ${({ theme }) => theme.breakpoints.mobileLg} {
    width: 90%;
  }
`

export const MainBanner = styled.div`
  display: flex;
  gap: 40px;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    flex-direction: column;
  }
`

export const ImageWrapper = styled.div`
  position: absolute;
  transform: rotate(25deg);
  margin-top: 730px;
  right: 0px;
  width: 43%;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    position: relative;
    margin-top: 0px;
    transform: rotate(0deg);
    right: 0px;
    width: 70%;
  }
`

export const TitleText = styled(Title)`
  padding-top: 50px;
  padding-bottom: 30px;
`
export const Button = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px auto 0;
`
export const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 700px;
  margin-bottom: 60px;
`
