import styled from "@emotion/styled"

import Illustration from "design-system/components/illustration"

export const Wrapper = styled.div`
  background: url("/home/support-background.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const List = styled.ul`
  max-width: 360px;
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 20px;
  margin-bottom: 60px;
`

export const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 560px;
padding: 110px 0;

  ${({ theme }) => theme.breakpoints.mobile} {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-100px);
    width: calc(100% + 200px);
    height: 100%;
    z-index: -1;
    background: linear-gradient(
        90deg,
        #ffffff 0%,
        rgba(255, 255, 255, 0) 126.15%
      ),
      linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 199.9%);
  }
`

export const Item = styled.li`
  flex: 1;
  text-align: center;
`

export const Icon = styled(Illustration)`
  height: 80px;
`
