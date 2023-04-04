import styled from "@emotion/styled"

import Typography from "design-system/components/typography"

export const Content = styled.div`
  max-width: 874px;
  padding: 120px 0;
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding: 50px 0;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 30px 0;
  }
`

export const Heading = styled(Typography)`
  margin: 34px 0;

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 0;
  }
`

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`
