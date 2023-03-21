import styled from "@emotion/styled"
import Container from "design-system/components/container"

export const ImageWrapper = styled.div`
  display: block;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: block;
    width: 100vw;
    position: relative;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 700px;
  object-fit: cover;
  object-position: 40%;
  margin-top: 200px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    object-fit: cover;
    height: 100%;
    max-width: 100vw;
    margin-top: 0;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    height: 300px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 59px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    flex-direction: column-reverse;
    align-items: center;
    gap: 100px;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    gap: 60px;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    gap: 40px;
  }
`
export const BannerContainer = styled.div`
  margin-bottom: -20px;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: block;
    margin-bottom: -80px;
  }
`

export const ContainerSection = styled(Container)`
  margin: 120px 0;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding: 0;
    max-width: 100vw;
    margin: 0;
  }
`
