import styled from "@emotion/styled"
import Button from "design-system/components/button"
import Typography from "design-system/components/typography"

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.complementary[100]};
  padding-top: 120px;
  padding-bottom: 82px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding-top: 100px;
    padding-bottom: 154px;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`

export const BannerContent = styled.div`
  display: flex;
  gap: 60px;
  padding: 120px 0;

  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 60px 0;
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
`

export const ContactButton = styled(Button)`
  margin-top: 60px;
`
export const TextBottomWrapper = styled(Typography)`
  margin-top: 20px;
`
