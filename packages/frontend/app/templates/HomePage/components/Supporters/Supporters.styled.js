import styled from "@emotion/styled"

export const Wrapper = styled.section`
  padding: 120px 0;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) -64.46%,
      #faf4f4 109.44%,
      rgba(255, 255, 255, 0) 283.33%
    ),
    #ffffff;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding: 100px 0;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 60px 0;
  }
`

export const Slider = styled.div`
  margin-top: 40px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    margin-top: 20px;
    width: 100vw;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
`
