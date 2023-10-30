import styled from "@emotion/styled"
import TextBanner from "design-system/patterns/textBanner"
import List from "design-system/components/list"
import Feature from "design-system/patterns/feature"

export const Section = styled.div`
  background-color: ${({ theme }) => theme.colors.complementary[100]};
  padding-top: 120px;
  padding-bottom: 82px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`

export const Banner = styled(TextBanner)`
  margin-bottom: 117px;
  max-width: 976px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    margin-bottom: 80px;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    margin-bottom: 60px;
  }
`

export const ListItems = styled(List)`
  max-width: 696px;
`

export const FeatureAb = styled(Feature)`
  ${({ theme }) => theme.breakpoints.mobileLg} {
    display: flex;
    flex-direction: row !important;
    border: 1px solid red;
    gap: 10px;
  }
`
