import styled from "@emotion/styled"

import ContainerComponent from "design-system/components/container"
import Typography from "design-system/components/typography"

export const Container = styled(ContainerComponent)`
  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding: 0;
  }
`

export const Heading = styled(Typography)`
  margin-bottom: 10px;
`

export const Wrapper = styled.div`
  margin-top: 120px;
  padding: 60px;
  background-color: ${({ theme }) => theme.colors.complementary[100]};
  text-align: center;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    margin-top: 80px;
    padding: 60px 40px;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    margin: 40px 0;
    padding: 60px 24px;
  }
`

export const Options = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(3, 270px);
  justify-content: center;
  gap: 60px;
  padding-top: 40px;
  padding-bottom: 40px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    grid-template-columns: repeat(3, 200px);
    gap: 24px;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    grid-auto-flow: row;
    grid-template-columns: auto;
  }
`
