import styled from "@emotion/styled"
import Container from "design-system/components/container"
import Image from "design-system/components/image"
import TextBanner from "design-system/patterns/textBanner"
import ListItem from "design-system/components/listItem"

export const BackgroundWrapper = styled.div`
  background-image: url("/single-animal/our-support-background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 120px 189px;

  ${({ theme }) => theme.breakpoints.desktopSm} {
    padding: 120px 50px;
  }

  ${({ theme }) => theme.breakpoints.tabletLg} {
    background-image: url("/single-animal/our-support-background-mobile.png");
    background-position: bottom;
    padding: 0 0 100px 0;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 0 0 60px 0;
  }
`

export const ContainerSection = styled(Container)`
  margin: 120px auto;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    margin: 100px auto;
    padding: 0;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    margin: 60px auto;
  }
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: auto;
  grid-column-gap: 80px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    margin-bottom: 100px;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    margin-bottom: 80px;
  }
`

export const Img = styled(Image)`
  ${({ theme }) => theme.breakpoints.tabletLg} {
    width: 100vw;
    border-radius: 0;
    grid-row: 1;
    max-height: 1104px;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    max-height: 579px;
  }
`
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding-left: 56px;
    padding-right: 56px;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

export const Banner = styled(TextBanner)`
  grid-column: 1 / 3;
  grid-row: 1;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    grid-column: 1;
    grid-row: 2;
    margin-top: 100px;
    padding-left: 56px;
    padding-right: 56px;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    margin-top: 60px;
    padding-left: 24px;
    padding-right: 24px;
  }
`
export const ButtonContainer = styled.div`
  margin-top: 16px;
`

export const Items = styled(ListItem)`
  font-size: 20px;
  font-weight: 300;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    font-size: 18px;
  }
  ${({ theme }) => theme.breakpoints.mobile} {
    font-size: 16px;
  }
`
