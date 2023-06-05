import styled from "@emotion/styled"

export const Section = styled.div`
  padding: 120px 0;
  background: ${({ theme }) => theme.colors.complementary[100]};
`

export const Content = styled.div`
  max-width: 890px;

  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 60px 0;
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const PanelWrapper = styled.div`
  margin-top: 40px;
  padding-left: 110px;
  max-width: 600px;
  width: 100%;
`

export const List = styled.div`
  margin-top: 100px;
  display: grid;
  grid-auto-flow: rows;
  gap: 50px;
`

export const FeatureItem = styled.div`
  max-width: 760px;
`
