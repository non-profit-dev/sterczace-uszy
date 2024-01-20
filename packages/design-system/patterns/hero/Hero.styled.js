import styled from "@emotion/styled"

export const Header = styled.header`
  margin: 0 auto;
  padding-top: ${({ backgroundImage }) =>
    backgroundImage ? "140px" : "120px"};
  padding-bottom: ${({ backgroundImage }) =>
    backgroundImage ? "300px" : "140px"};
  background: url("${({ backgroundImage }) => backgroundImage}") no-repeat
    center;
  background-size: cover;
  background-color: ${({ backgroundColor }) => backgroundColor};

  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding-top: 100px;
    padding-bottom: 100px;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    padding-top: 40px;
    padding-bottom: ${({ backgroundImage }) => (backgroundImage ? 0 : "40px")};
    background: ${({ backgroundColor, backgroundImage, theme }) =>
      (backgroundImage && theme.colors.complementary[100]) ||
      backgroundColor ||
      "transparent"};
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 600px auto;
  gap: 40px;
  align-items: ${({ alignement }) => alignement};

  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding: 50px 0;
    grid-template-columns: auto;
    grid-auto-flow: row;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 60px 0;
  }
`

export const Content = styled.div``

export const Asset = styled.div`
  max-width: 500px;
`

export const HeroMobileBackground = styled.div`
  display: none;
  height: 744px;
  background: url("${({ background }) => background}") no-repeat center;
  background-size: cover;

  ${({ theme }) => theme.breakpoints.tablet} {
    height: 384px;
    display: block;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    height: 201px;
  }
`
