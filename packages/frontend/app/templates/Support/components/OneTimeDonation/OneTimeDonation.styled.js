import styled from "@emotion/styled"

export const Wrapper = styled.div`
  margin-top: 120px;
  margin-bottom: 120px;
  padding: 60px;
  background-color: ${({ theme }) => theme.colors.complementary[100]};
  text-align: center;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding: 60px 40px;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 60px 24px;
  }
`

export const Options = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 60px;
  padding-top: 40px;
  padding-bottom: 40px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    gap: 24px;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    grid-auto-flow: row;
  }
`
