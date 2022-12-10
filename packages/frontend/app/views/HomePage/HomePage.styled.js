import styled from "@emotion/styled"

export const HomePageContainer = styled.div`
  z-index: 1;
  position: relative;
  margin: 350px 0 0 100px;
  max-width: 700px;
  @media (max-width: 1200px) {
    margin: 50px auto;
  }
  @media (max-width: 780px) {
    margin: 100px auto;
  }
  @media (max-width: 440px) {
    margin: 30px auto;
  }
`
export const ImageContainerDesktop = styled.div`
  z-index: 0;
  @media (max-width: 1200px) {
    display: none;
  }
`

export const ImageContainerMobile = styled.div`
  z-index: 0;
  display: none;
  @media (max-width: 1200px) {
    display: block;
  }
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  gap: 5px;

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
