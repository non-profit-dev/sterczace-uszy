import styled from "@emotion/styled"

import IllustrationComponent from "design-system/components/illustration"

export const DecorativeCard = styled.div`
  display: inline-flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  text-align: center;
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

export const Illustration = styled(IllustrationComponent)`
  position: relative;
  z-index: -1;
  left: -24px;
  height: 110px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: inline-flex;
    height: 90px;
    left: -20px;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    height: 70px;
    left: -10px;
  }
`
