import styled from "@emotion/styled"

export const DecorativeCard = styled.div`
  display: inline-flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
`
export const Content = styled.div`
  position: relative;
  left: 12px;
  display: flex;
  padding: 0 0 8px 0;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    left: 10px;
    padding: 0 0 8px 0;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    left: 5px;
    padding: 0;
  }
`

export const Illustration = styled.div`
  position: relative;
  z-index: -1;
  left: -24px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: none;
  }
`
export const IllustrationTablet = styled.div`
  display: none;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: inline-flex;
    position: relative;
    z-index: -1;
    left: -20px;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    display: none;
  }
`
export const IllustrationMobile = styled.div`
  display: none;

  ${({ theme }) => theme.breakpoints.mobileLg} {
    display: inline-flex;
    position: relative;
    z-index: -1;
    left: -10px;
  }
`
