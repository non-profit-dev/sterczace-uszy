import styled from "@emotion/styled"

import Illustration from "design-system/components/illustration"
import TypographyComponent from "design-system/components/typography"

export const Wrapper = styled.section`
  background: url("/home/support-background.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    background: none;
  }
`
export const ImageBackground = styled.div`
  display: none;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: block;
    background: url("/home/support-background.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 500px;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    height: 348px;
  }
`

export const List = styled.ul`
  max-width: 360px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin: 20px 0 60px;

  ${({ theme }) => theme.breakpoints.mobileLg} {
    flex-direction: column;
    gap: 26px;
    margin-bottom: 40px;
  }
`

export const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 560px;
  padding: 100px 0;

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding-top: 60px;
    padding-bottom: 0;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-100px);
    width: calc(100% + 200px);
    height: calc(100% + 1px);
    z-index: -1;
    background: linear-gradient(
        90deg,
        #ffffff 0%,
        rgba(255, 255, 255, 0) 126.15%
      ),
      linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 199.9%);

    ${({ theme }) => theme.breakpoints.tabletLg} {
      content: none;
    }
  }
`

export const Item = styled.li`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  text-align: center;

  ${({ theme }) => theme.breakpoints.mobileLg} {
    flex-direction: row;
    text-align: left;
    gap: 24px;
  }
`

export const Icon = styled(Illustration)`
  height: 80px;
  width: auto;

  ${({ theme }) => theme.breakpoints.mobileLg} {
    height: 40px;
  }
`

export const Typography = styled(TypographyComponent)`
  margin: 48px 0 24px 0;
`
