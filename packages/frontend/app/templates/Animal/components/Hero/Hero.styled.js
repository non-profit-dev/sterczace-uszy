import styled from "@emotion/styled"

export const Content = styled.div`
  max-width: 580px;
  padding-top: 120px;
  padding-bottom: 40px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding-top: 100px;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding-top: 60px;
  }
`

export const Breadcrumbs = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 3px;
  padding-bottom: 40px;
  color: ${({ theme }) => theme.colors.primary[500]};
`
