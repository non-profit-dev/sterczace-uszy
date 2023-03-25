import styled from "@emotion/styled"

import ImageComponent from "design-system/components/image"

export const Content = styled.div`
  display: grid;
  gap: 60px;
  grid-template-columns: 2fr 1fr;

  ${({ theme }) => theme.breakpoints.desktopSm} {
  }
`

export const Box = styled.div`
  max-width: 460px;
  margin-top: 40px;
  padding: 20px;
  border: 1px dashed ${({ theme }) => theme.colors.primary[500]};
`

export const Image = styled(ImageComponent)`
  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: none;
  }
`
