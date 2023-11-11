import styled from "@emotion/styled"
import Typography from "design-system/components/typography"
import Illustration from "design-system/components/illustration/Illustration"

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.complementary[100]};
  padding-bottom: 120px;
  padding-top: 120px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`

export const BannerContent = styled.div`
  display: flex;
  gap: 60px;
  padding-bottom: 120px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    flex-direction: column;
    padding-bottom: 56px;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    padding-bottom: 60px;
  }

  svg {
    max-width: 340px;
  }
`

export const TextContainer = styled.div`
  max-width: 816px;
`

export const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  max-width: 800px;
  margin-bottom: 60px;
`

export const TextBottomWrapper = styled(Typography)`
  margin-top: 20px;
`
export const SupportIllustration = styled(Illustration)`
  ${({ theme }) => theme.breakpoints.tabletLg} {
    margin: 0 auto;
    order: 1;
  }
`
