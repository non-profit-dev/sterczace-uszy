import styled from "@emotion/styled"

export const Section = styled.div`
  padding: 120px 0;
  background: ${({ theme }) => theme.colors.complementary[100]};

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 60px 0;
  }
`

export const Header = styled.div`
  max-width: 890px;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    gap: 20px;
    flex-direction: column;
    align-items: start;
  }
`

export const PanelWrapper = styled.div`
  max-width: 500px;
  width: 100%;
`

export const Content = styled.div`
  margin-top: 80px;
  display: grid;
  grid-auto-flow: rows;
  gap: 60px;

  ${({ theme }) => theme.breakpoints.mobileLg} {
    margin-top: 50px;
  }
`

export const AdditionalNote = styled.div`
  max-width: 760px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`
