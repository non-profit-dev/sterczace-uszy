import styled from "@emotion/styled"

export const Wrapper = styled.div`
  margin-top: 120px;
  margin-bottom: 120px;
  padding: 60px;
  background-color: ${({ theme }) => theme.colors.complementary[100]};

  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding: 60px 40px;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 60px 24px;
  }
`

export const Content = styled.div`
  display: grid;
  gap: 30px;
  grid-auto-flow: column;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);

  ${({ theme }) => theme.breakpoints.desktopSm} {
    grid-auto-flow: row;
    grid-template-columns: auto;
  }
`

export const Graphic = styled.div`
  display: flex;
  align-items: center;
  gap: 38px;

  ${({ theme }) => theme.breakpoints.desktopSm} {
    margin-top: 20px;
    order: 1;
  }

  svg {
    width: 260px;
    height: 260px;

    ${({ theme }) => theme.breakpoints.mobileLg} {
      width: 120px;
      height: 120px;
    }
  }
`

export const Info = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 10px;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`
