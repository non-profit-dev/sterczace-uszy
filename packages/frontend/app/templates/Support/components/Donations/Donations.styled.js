import styled from "@emotion/styled"

import ImageComponent from "design-system/components/image"

export const Content = styled.div`
  display: grid;
  gap: 70px;
  grid-template-columns: 2fr 1fr;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    grid-template-columns: auto;
  }
`

export const Box = styled.div`
  max-width: 460px;
  margin-top: 40px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  border: 1px dashed ${({ theme }) => theme.colors.primary[500]};
  border-radius: 10px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    max-width: 100%;
  }
`

export const Image = styled(ImageComponent)`
  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: none;
  }
`
