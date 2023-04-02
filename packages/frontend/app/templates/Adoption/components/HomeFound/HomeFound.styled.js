import styled from "@emotion/styled"
import { Image } from "design-system/components/image/Image.styled"

export const Wrapper = styled.section`
  padding-bottom: 120px;
  background-image: url("/adoption/home-found-background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    background-size: 100% 60%;
    background-position: bottom;
    padding-bottom: 100px;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    background-image: url("/adoption/mobile-home-found-background.png");
    padding-bottom: 60px;
  }
`

export const TopContainer = styled.div`
  padding: 120px 0 60px;

  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 100px 0 60px;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    padding: 60px 0;
  }
`

export const Content = styled.div`
  max-width: 1065px;
  display: grid;
  gap: 60px;
  grid-template-columns: auto 1fr;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: flex;
    flex-direction: column;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    gap: 40px;
  }
`

export const Img = styled(Image)`
  max-width: 425px;
  min-height: 570px;
  object-position: 80% 50%;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    border-radius: unset;
    min-height: unset;
    height: 685px;
    width: 100vw;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    max-width: unset;
    object-fit: cover;
    object-position: center;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    height: 600px;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    height: 400px;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    height: 359px;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 800px;
`
