import styled from "@emotion/styled"

export const Header = styled.header`
  padding: 120px 0;
  background: ${({ theme }) => theme.colors.neutrals[200]};

  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding: 50px 0;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 30px 0;
  }
`

export const HeaderWrapper = styled.div`
  max-width: 660px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`
