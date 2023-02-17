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
  align-items: center;
`
export const Illustration = styled.div`
  position: relative;
  z-index: -1;
  left: -24px;
  border: 1px solid;
  padding: 5px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    left: -20px;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    left: -10px;
  }
`
