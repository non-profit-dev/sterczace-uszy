import styled from "@emotion/styled"

export const Wrapper = styled.div`
  padding: 112px 0;
  background: ${({ theme }) => theme.colors.neutrals[200]};
`

export const Cards = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    grid-template-columns: repeat(1, 1fr);
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    margin-top: 60px;
  }
`
