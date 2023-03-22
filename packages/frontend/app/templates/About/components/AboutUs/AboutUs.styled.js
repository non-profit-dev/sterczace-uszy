import styled from "@emotion/styled"
import Container from "design-system/components/container"
import Image from "design-system/components/image"

export const ContainerSection = styled(Container)`
  margin: 120px 0;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding: 0;
    margin: 0;
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    flex-direction: column-reverse;
    align-items: center;
    gap: 100px;
    margin-bottom: 100px;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    gap: 60px;
    margin-bottom: 80px;
  }
`

export const ImageWrapper = styled.div`
  display: block;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    width: 100vw;
    position: relative;
  }
`

export const Img = styled(Image)`
  height: 700px;
  object-position: 40%;
  margin-top: 200px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    height: 100%;
    max-width: 100vw;
    margin-top: 0;
    border-radius: 0;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    height: 300px;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 575px;
`
export const BannerContainer = styled.div`
  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: block;
    margin-bottom: -80px;
  }

  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: block;
    margin-bottom: -20px;
  }
`
