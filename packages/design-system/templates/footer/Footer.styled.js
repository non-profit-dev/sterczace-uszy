import styled from "@emotion/styled"

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 100%;
  ${({ theme }) => theme.breakpoints.sm} {
    gap: 0px;
  }

  &:before {
    content: "";
    width: 100%;
    height: 5px;
    clip-path: ${({ size }) =>
      `ellipse(50% ${size === `large` ? `3px` : `2px`})`};
    background: ${({ theme }) => theme.colors.primary[500]};
  }
`
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  width: 100%;
  padding: 0px 25px 84px 25px;
  ${({ theme }) => theme.breakpoints.xl} {
    padding: 0px 24px 25px 24px;
    gap: 32px;
  }
  ${({ theme }) => theme.breakpoints.sm} {
    gap: 32px;
    padding: 20px 24px;
  }
`

export const LogoContainer = styled.div`
  display: inline-flex;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 80px;
  margin: 0 0 80 0;

  ${({ theme }) => theme.breakpoints.xl} {
    margin: 0 0 25 0;
    gap: 32px;
  }
  ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: column;
    gap: 32px;
    margin: 0 0 20 0;
  }
`

export const MainDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  ${({ theme }) => theme.breakpoints.xl} {
    flex-direction: row;
    width: 100%;
    gap: 60px;
  }
  ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: column;
    gap: 32px;
  }
`

export const SectionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
  justify-content: space-between;
  ${({ theme }) => theme.breakpoints.xl} {
    flex-direction: row;
    width: 100%;
    gap: 20px;
  }
  ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: column;
    gap: 32px;
  }
`
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const IconsContainer = styled.div`
  display: inline-flex;
  ${({ theme }) => theme.breakpoints.sm} {
    display: none;
  }
`
export const IconsContainerMobile = styled.div`
  display: none;
  ${({ theme }) => theme.breakpoints.sm} {
    display: inline-flex;
  }
`

export const CopyrightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
