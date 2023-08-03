import styled from "@emotion/styled"
import Typography from "design-system/components/typography"
import Image from "design-system/components/image"
import Icon from "design-system/components/icon"

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "financial image"
    "text image";
  grid-column-gap: 120px;
  margin: 120px 0;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    grid-template-columns: 1fr;
    grid-template-areas:
      "financial"
      "image"
      "text";
    grid-gap: 0;
    margin: 0px 0 100px;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    margin: 0 0 60px;
  }
`

export const FinancialDataWrapper = styled.div`
  max-width: 584px;
  grid-area: financial;
`

export const Description = styled.div`
  margin-bottom: 60px;

  ${({ theme }) => theme.breakpoints.mobileLg} {
    margin-bottom: 40px;
  }
`

export const ImageWrapper = styled.div`
  grid-area: image;
  align-self: end;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 112px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    margin-bottom: 60px;
  }
`

export const TextWrapper = styled.div`
  grid-area: text;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    margin-top: 60px;
  }
`

export const ImageHeading = styled(Typography)`
  margin-bottom: 10px;
`

export const MobileImage = styled(Image)`
  display: none;
  ${({ theme }) => theme.breakpoints.mobileLg} {
    display: block;
  }
`

export const DesktopImage = styled(Image)`
  width: 539px;
  height: 388px;
  ${({ theme }) => theme.breakpoints.mobileLg} {
    display: none;
  }
`
export const HeartIcon = styled(Icon)`
  vertical-align: middle;
`