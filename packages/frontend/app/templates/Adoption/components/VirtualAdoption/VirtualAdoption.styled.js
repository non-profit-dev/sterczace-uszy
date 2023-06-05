import styled from "@emotion/styled"

export const Section = styled.div`
  background: ${({ theme }) => theme.colors.complementary[100]};
`

export const Content = styled.div`
  max-width: 890px;
  padding: 120px 0;

  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 60px 0;
  }
`

export const PanelWrapper = styled.div`
  margin-top: 40px;
  padding-left: 110px;
  max-width: 600px;
`

export const List = styled.div`
  margin-top: 100px;
  max-width: 760px;
  display: grid;
  grid-auto-flow: rows;
  gap: 50px;
`
