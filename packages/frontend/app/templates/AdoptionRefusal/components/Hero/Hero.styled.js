import styled from "@emotion/styled"

export const Header = styled.header`
  margin: 0 auto;
  padding: 120px 0;
  background: ${({ theme }) => theme.colors.complementary[100]};
  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 100px 0;
  }
`

export const HeaderWrapper = styled.div`
  max-width: 589px;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    max-width: 566px;
  }
`

export const Columns = styled.div`
  display: flex;
  align-items: center;
  gap: 200px;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    flex-direction: column;
  }
  ${({ theme }) => theme.breakpoints.tablet} {
    gap: 80px;
  }
`
export const ImageWrapper = styled.div`
  max-width: 540px;
  align-items: center;
`
