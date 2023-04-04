import styled from "@emotion/styled"

import CountComponent from "design-system/components/count"

export const Content = styled.div`
  padding-top: 150px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;

  svg {
    width: 100%;
    height: 100%;
  }

  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding-top: 100px;
    grid-template-columns: auto;
  }
`

export const Steps = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  ${({ theme }) => theme.breakpoints.desktopSm} {
    margin-top: 80px;
    grid-template-columns: auto;
    gap: 0;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    margin-top: 60px;
  }
`

export const Count = styled(CountComponent)`
  margin-left: 24px;
  border-radius: 50%;
  width: 160px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.neutrals[100]};
  border: 1px solid ${({ theme }) => theme.colors.primary[500]};

  ${({ theme }) => theme.breakpoints.tabletLg} {
    width: 120px;
    height: 120px;
    margin: 40px 0 20px 24px;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    margin-left: 0;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    width: 80px;
    height: 80px;
  }
`
