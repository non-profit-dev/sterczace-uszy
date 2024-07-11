import styled from "@emotion/styled"

export const Section = styled.section`
  padding-top: 120px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding-top: 40px;
  }
`

export const TextBanner = styled.div`
  max-width: 632px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    max-width: 100%;
  }
`

export const ImageWrapper = styled.div`
  margin: 80px 0;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    margin: 40px 0;
  }
`
