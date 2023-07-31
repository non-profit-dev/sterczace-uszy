import styled from "@emotion/styled"
import Typography from "design-system/components/typography"
import Image from "design-system/components/image"

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "financial image"
    "text text";
  grid-column-gap: 120px;
  margin: 120px 0;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    grid-template-columns: 1fr;
    grid-template-areas:
      "financial"
      "image"
      "text";
    grid-gap: 0;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    max-width: 340px;
  }
`

export const FinancialDataWrapper = styled.div`
  max-width: 584px;
  grid-area: financial;

  ${({ theme }) => theme.breakpoints.mobileLg} {
    max-width: 342px;
  }
`

export const Description = styled.div`
  margin-bottom: 60px;

  ${({ theme }) => theme.breakpoints.mobileLg} {
    margin-bottom: 40px;
  }
`

export const ImageWrapper = styled.div`
  grid-area: image;
  align-self: flex-end;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 111px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    margin-bottom: 60px;
  }
`

export const TextWrapper = styled.div`
  grid-area: text;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    margin-top: 60px;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    max-width: 211px;
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
