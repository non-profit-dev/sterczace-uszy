import styled from "@emotion/styled"

export const SectionWrapper = styled.div`
  padding: 120px 0;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding: 100px 0;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 60px 0;
  }
`

export const Content = styled.div`
  max-width: 860px;
`

export const Features = styled.div`
  margin: 60px 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
`

export const MoreInfo = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Header = styled.div`
  max-width: 680px;
`

export const OtherReasons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;
  background: ${({ theme }) => theme.colors.complementary[100]};
  border-radius: 30px;
`
