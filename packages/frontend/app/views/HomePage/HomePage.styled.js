import styled from "@emotion/styled"

export const HomePageContainer = styled.div`
  z-index: 2;
  position: relative;
  margin: 350px 0 0 100px;
  max-width: 700px;

  ${({ theme }) => theme.breakpoints.xl} {
    margin: 50px auto;
  }
  ${({ theme }) => theme.breakpoints.md} {
    margin: 100px auto;
  }
  ${({ theme }) => theme.breakpoints.sm} {
    margin: 30px auto;
  }
`
export const ImageContainerDesktop = styled.div`
  z-index: 0;
  ${({ theme }) => theme.breakpoints.xl} {
    display: none;
  }
`

export const ImageContainerMobile = styled.div`
  z-index: 0;
  display: none;
  ${({ theme }) => theme.breakpoints.xl} {
    display: block;
  }
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  gap: 5px;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 41%;
    width: 20%;
    height: 5px;
    clip-path: ${({ size }) =>
      `ellipse(50% ${size === `large` ? `3px` : `2px`})`};
    background: ${({ theme }) => theme.colors.primary[500]};
  }
`
