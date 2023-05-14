import styled from "@emotion/styled"
import Container from "design-system/components/container"
import TextBanner from "design-system/patterns/textBanner"
import List from "design-system/components/list"
import Typography from "design-system/components/typography"

export const ContainerSection = styled(Container)`
  margin: 120px auto;
  padding: 0 56px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    margin: 100px auto 74px;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    margin: 60px auto;
    padding: 0 16px;
  }
`

export const Banner = styled(TextBanner)`
  margin-bottom: 60px;
`
export const TextList = styled(List)`
  line-height: 24px;
`

export const AccordionText = styled(Typography)`
  margin-bottom: 24px;
`

export const FeatureWrapper = styled.div``
