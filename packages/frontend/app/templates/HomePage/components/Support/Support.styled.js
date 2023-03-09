import styled from "@emotion/styled"

import IconComponent from "design-system/components/icon"

export const Wrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 100px;
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
  max-width: 560px;
`

export const Item = styled.li`
  flex: 1;
  text-align: center;
`

export const Icon = styled(IconComponent)`
  width: 90px;
  height: 90px;
`
