import styled from "@emotion/styled"
import Container from "design-system/components/container"
import Image from "design-system/components/image"
import TextBanner from "design-system/patterns/textBanner"

export const ContainerSection = styled(Container)`
  margin: 120px auto;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    margin: 0;
    padding: 0;
  }
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: auto;
  grid-column-gap: 60px;

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
  }
`
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

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
