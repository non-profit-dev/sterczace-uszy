import styled from "@emotion/styled"

import ContainerComponent from "design-system/components/container"

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background: ${({ theme }) => theme.colors.neutrals[100]};
  z-index: 999;
  box-shadow: 2px 2px 9px 0px rgba(0, 0, 0, 0.1);
`

export const Text = styled.div`
  max-width: 500px;
`

export const Content = styled.div`
  padding-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Buttons = styled.div`
  display: flex;
  gap: 20px;
`

export const Container = styled(ContainerComponent)`
  position: relative;
`

export const Icon = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`
