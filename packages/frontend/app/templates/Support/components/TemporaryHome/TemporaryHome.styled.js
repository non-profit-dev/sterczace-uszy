import styled from "@emotion/styled"

export const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;

  svg {
    width: 100%;
    height: 100%;
  }

  ${({ theme }) => theme.breakpoints.tabletLg} {
    grid-template-columns: auto;
  }
`

export const Steps = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    margin-top: 80px;
    grid-template-columns: auto;
    gap: 0;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    margin-top: 60px;
  }
`
