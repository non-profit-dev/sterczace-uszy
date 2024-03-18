import TextBanner from "design-system/patterns/textBanner"
import CtaBanner from "design-system/patterns/ctaBanner"
import styled from "@emotion/styled"

export const Banner = styled(TextBanner)`
  max-width: 606px;
`

export const TeamDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const ContentContainer = styled.div`
  padding: 120px 0;

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 100px 0;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 60px 0;
  }
`
export const CtaBannerComponent = styled(CtaBanner)`
  a {
    text-decoration: underline;
  }
`
