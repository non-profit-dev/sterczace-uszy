import styled from "@emotion/styled"
import Container from "design-system/components/container"
import Image from "design-system/components/image"
import TextBanner from "design-system/patterns/textBanner"

export const ContainerSection = styled(Container)`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: auto;
  grid-column-gap: 60px;
  padding-bottom: 120px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    margin-bottom: 56px;
    padding-inline: 56px;
    padding-bottom: 100px;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    margin-bottom: 80px;
    padding-inline: 20px;
  }
`

export const Wrapper = styled.div`
  margin-top: 120px;
  margin-inline: auto;
  margin-bottom: 105px;
  background: linear-gradient(0deg, #eeeeee 0%, rgba(255, 255, 255, 0) 100%),
    #ffffff;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    margin: 0;
    padding: 0;
  }
`

export const Img = styled(Image)`
  object-position: 40%;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding-top: 60px;
    max-width: 100vw;
    border-radius: 0;
    grid-row: 3;
  }
`
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    grid-row: 2;
    max-width: 566px;
  }
`

export const Banner = styled(TextBanner)`
  grid-column: 1 / 3;
  grid-row: 1;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    grid-column: 1;
    grid-row: 1;
    margin-top: 100px;
  }
`
