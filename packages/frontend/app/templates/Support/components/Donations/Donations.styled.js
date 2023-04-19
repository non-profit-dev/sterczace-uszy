import styled from "@emotion/styled"

import ImageComponent from "design-system/components/image"
import Typography from "design-system/components/typography"

export const Content = styled.div`
  padding-top: 120px;
  display: flex;
  gap: 70px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding-top: 0;
    flex-direction: column;
  }
`

export const Box = styled.div`
  max-width: 465px;
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

export const TextWrapper = styled.div`
  width: 60%;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    width: 100%;
    order: 1;
  }
`

export const Image = styled(ImageComponent)`
  width: 35%;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    width: 100vw;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    height: 600px;
    border-radius: 0;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    height: 320px;
  }
`

export const CopyButton = styled.button`
  display: inline;
  cursor: pointer;
  vertical-align: middle;
`

export const CopyInfo = styled(Typography)`
  display: inline-flex;
  min-height: 30.5px;
  padding-left: 4px;
  vertical-align: middle;
  align-items: center;
`
