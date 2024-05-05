import styled from "@emotion/styled"
import Typography from "design-system/components/typography"

export const Section = styled.div`
  padding: 120px 0;

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 60px 0;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;

  ${({ theme }) => theme.breakpoints.mobileLg} {
    gap: 40px;
  }
`

export const Content = styled.div`
  max-width: 767px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    max-width: 566x;
  }
`

export const AdditionalNote = styled(Typography)`
  max-width: 667px;
`

export const Image = styled.img`
  max-width: 1062px;
`
