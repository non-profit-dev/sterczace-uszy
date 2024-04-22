import styled from "@emotion/styled"

export const Wrapper = styled.div`
  padding: 120px 0;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding: 100px 0;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 60px 0;
    background: none;
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

export const Description = styled.div`
  margin: 0 auto;
  width: 606px;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    width: 566px;
    text-align: left;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    width: 100%;
  }
`
