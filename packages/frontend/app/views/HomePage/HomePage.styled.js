import styled from "@emotion/styled"

export const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.grey[600]};
  min-height: 100vh;
  overflow: hidden;
`

export const Container = styled.div`
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
  display: grid;
  align-items: center;

  ${({ theme }) => theme.breakpoints.desktopSm} {
    align-items: start;
    justify-content: center;
  }
`

export const TextContainer = styled.div`
  position: relative;
  z-index: 1;
  max-width: 620px;
  padding: 48px 40px;

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding-left: 16px;
    padding-right: 16px;
  }
`

export const Background = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateX(25%);
  width: 100%;
  height: 100%;
  max-height: 1000px;

  ${({ theme }) => theme.breakpoints.desktopSm} {
    max-height: 700px;
    transform: translateX(0);
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    max-height: 500px;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    max-height: 50vh;
  }
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: ${({ theme }) => theme.colors.grey[600]};

  ${({ theme }) => theme.breakpoints.mobileLg} {
    object-fit: cover;
    object-position: top;
  }
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  gap: 5px;
  ${({ theme }) => theme.breakpoints.mobileLg} {
    margin-top: 20px;
  }
`
