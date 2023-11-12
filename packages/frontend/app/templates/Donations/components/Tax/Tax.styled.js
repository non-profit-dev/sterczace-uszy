import styled from "@emotion/styled"

import Typography from "design-system/components/typography"

export const Wrapper = styled.div`
  margin-top: 120px;
  padding: 60px;
  background-color: ${({ theme }) => theme.colors.complementary[100]};

  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding: 60px 0;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    margin-top: 0;
    padding: 60px 0;
  }
`

export const Content = styled.div`
  display: grid;
  gap: 50px;
  grid-auto-flow: column;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);

  ${({ theme }) => theme.breakpoints.desktopSm} {
    gap: 30px;
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

    ${({ theme }) => theme.breakpoints.tablet} {
      width: 120px;
      height: 120px;
    }
  }
`

export const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 10px;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const CopyInfo = styled(Typography)`
  display: inline-flex;
  min-height: 30.5px;
  padding-left: 4px;
  vertical-align: middle;
  align-items: center;
`
