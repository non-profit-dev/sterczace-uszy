import styled from "@emotion/styled"

import Typography from "design-system/components/typography"

export const Section = styled.div`
  padding: 120px 0;

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 60px 0;
  }
`

export const Content = styled.div`
  max-width: 890px;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    gap: 20px;
    flex-direction: column;
    align-items: start;
  }
`

export const PanelWrapper = styled.div`
  margin-top: 40px;
  padding-left: 110px;
  max-width: 600px;
  width: 100%;

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding-left: 0;
  }
`

export const List = styled.div`
  margin-top: 100px;
  display: grid;
  grid-auto-flow: rows;
  gap: 60px;
`

export const FeatureItem = styled.div`
  max-width: 760px;
`

export const AdditionalNote = styled(Typography)`
  max-width: 760px;
  margin-top: 30px;
  margin-left: 110px;

  ${({ theme }) => theme.breakpoints.mobileLg} {
    margin-left: 0;
  }
`
