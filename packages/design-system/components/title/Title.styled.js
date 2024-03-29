import styled from "@emotion/styled"
import { css } from "@emotion/react"

import Typography from "design-system/components/typography"

export const Title = styled.div`
  position: relative;
  color: ${({ theme }) => theme.colors.gray[600]};
  margin-bottom: 5px;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const Text = styled(Typography)`
  position: relative;
  margin: 0;

  &:before {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 100%;
    height: 5px;
    clip-path: ellipse(50% 2px);
    background: ${({ theme }) => theme.colors.primary[500]};

    ${({ theme }) => theme.breakpoints.tablet} {
      content: ${({ hideLineOnMobile }) => (hideLineOnMobile ? `none` : "")};
    }
  }

  ${({ line }) =>
    !line &&
    css`
      &:before {
        display: none;
      }
    `}
`
