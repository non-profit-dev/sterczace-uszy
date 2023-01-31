import styled from "@emotion/styled"

const sizes = {
  small: {
    maxWidth: 600,
  },
  medium: {
    maxWidth: 1062,
  },
  large: {
    maxWidth: 1220,
  },
}

export const Container = styled.div`
  max-width: ${({ size }) => `${sizes[size].maxWidth + 40}px`};
  width: 100%;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding-left: 56px;
    padding-right: 56px;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`
