import styled from "@emotion/styled"

export const Wrapper = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding-top: 40px;
    padding-bottom: 100px;
  }
`

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    flex-direction: column;
    align-items: start;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    gap: 40px;
  }
`

export const TextBannerWrapper = styled.div`
  max-width: 551px;
`

export const ImageWrapper = styled.div`
  max-width: 556;
`
