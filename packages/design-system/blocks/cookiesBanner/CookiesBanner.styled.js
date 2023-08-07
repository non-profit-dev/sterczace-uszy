import styled from "@emotion/styled"

import ContainerComponent from "design-system/components/container"
import IconButton from "design-system/components/iconButton"

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background: ${({ theme }) => theme.colors.neutrals[100]};
  z-index: 999;
  box-shadow: 2px 2px 9px 0px rgba(0, 0, 0, 0.1);

  ${({ theme }) => theme.breakpoints.mobile} {
    padding: 20px 0;
  }
`

export const Text = styled.div`
  max-width: 500px;
`

export const Content = styled.div`
  padding-top: 40px;
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    flex-direction: column;
    align-items: start;
    gap: 20px;
  }
`

export const Buttons = styled.div`
  flex: 1 0 auto;
  display: flex;
  justify-content: end;
  gap: 20px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    flex-direction: column;
    align-items: start;
  }
`

export const Container = styled(ContainerComponent)`
  position: relative;
`

export const Icon = styled(IconButton)`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`
