import styled from "@emotion/styled"
import { css } from "@emotion/react"

const typography = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  bodyLarge: "p",
  bodySmall: "p",
  bodyTitle: "p",
  bodyTiny: "p",
}

export const Title = styled.div`
  display: ${({ fullWidth }) => (fullWidth ? `flex` : `inline-flex`)};
  align-items: center;
  align-self: ${({ fullWidth }) => (fullWidth ? `stretch` : `auto`)};
  justify-content: space-between;
  position: relative;
  color: ${({ theme }) => theme.colors.grey[500]};
  margin-bottom: 5px;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const Text = styled.p`
  position: relative;
  margin: 0;
  ${({ theme, size }) => theme.typography.desktop[typography[size]]};

  ${({ theme }) => theme.breakpoints.tablet} {
    ${({ theme, size }) => theme.typography.tablet[typography[size]]};
  }
  &:before {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 100%;
    height: 5px;
    clip-path: ${({ size }) =>
      `ellipse(50% ${size === `large` ? `3px` : `2px`})`};
    background: ${({ theme }) => theme.colors.primary[500]};
  }

  ${({ variant }) =>
    variant === "text" &&
    css`
      &:before {
        display: none;
      }
    `}
`
