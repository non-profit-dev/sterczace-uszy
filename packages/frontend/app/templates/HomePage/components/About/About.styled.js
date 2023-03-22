import styled from "@emotion/styled"

export const Content = styled.div`
  max-width: 1065px;
  margin: 105px auto 120px;
  display: grid;
  gap: 80px;
  grid-template-columns: auto 1fr;

  ${({ theme }) => theme.breakpoints.desktopSm} {
    gap: 50px;
  }

  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: flex;
    flex-direction: column;
    gap: 100px;
    margin: 0;
    padding: 100px 0;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    padding-top: 0;
    padding-bottom: 60px;
    gap: 60px;
  }
`

export const Image = styled.img`
  max-width: 425px;
  width: 100%;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    width: 100vw;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    max-width: unset;
    height: 608px;
    object-fit: cover;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    height: 450px;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    height: 400px;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    height: 348px;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 620px;

  gap: 28px;
`
