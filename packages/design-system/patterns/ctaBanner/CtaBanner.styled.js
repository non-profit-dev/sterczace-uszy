import styled from "@emotion/styled"
import { css } from "@emotion/react"

export const CtaBanner = styled.div`
  padding: 120px 70px;
  background: linear-gradient(
    180deg,
    #ffffff -12.36%,
    #faf4f4 58.24%,
    rgba(250, 244, 244, 0) 123.06%
  );

  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 100px 24px;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 60px 24px;
  }
`

export const Content = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-auto-flow: column;
  gap: 40px;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    grid-auto-flow: row;

    ${({ mobileLayout }) =>
      mobileLayout === "center"
        ? css`
            justify-items: center;
            text-align: center;
          `
        : css`
            justify-items: flex-start;
          `}
  }
`
