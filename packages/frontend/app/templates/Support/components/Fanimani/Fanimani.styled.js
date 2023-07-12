import styled from "@emotion/styled"

import ImageComponent from "design-system/components/image"

export const Content = styled.div`
  padding-top: 150px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;

  svg {
    width: 100%;
    height: 100%;
  }

  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding-top: 100px;
    grid-template-columns: auto;
  }
`

export const Steps = styled.div`
  max-width: 660px;
  display: grid;
  gap: 60px;

  ${({ theme }) => theme.breakpoints.desktopSm} {
    margin-top: 80px;
    gap: 30;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    margin-top: 60px;
  }
`

export const Step = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 30px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    grid-auto-flow: row;
    gap: 20px;
  }
`

export const StepContent = styled.div`
  display: grid;
  gap: 20px;
`

export const DownloadButtons = styled.div`
  display: flex;
  gap: 20px;
`

export const Illustration = styled.div`
  width: 100px;
  height: 100px;
`

export const Image = styled(ImageComponent)`
  max-width: 360px;
`
