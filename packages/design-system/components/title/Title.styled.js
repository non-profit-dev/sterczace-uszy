import styled from "@emotion/styled"

const typography = {
  small: "h5",
  medium: "h4",
  large: "h3",
}

export const Title = styled.div`
  display: ${({ fullWidth }) => (fullWidth ? `flex` : `inline-flex`)};
  align-items: center;
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

  ${({ theme }) => theme.breakpoints.lg} {
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
`
