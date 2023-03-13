import styled from "@emotion/styled"

export const DecorativeCard = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  padding: 2px;
`
export const Content = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border: 1px solid red;
`

export const Illustration = styled.div`
  position: relative;
  z-index: -1;
  left: -24px;
  border: 1px solid;
  padding: 5px;

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
    border: 1px solid green;
    padding: 5px;
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
    border: 1px solid red;
    padding: 5px;
  }
`
