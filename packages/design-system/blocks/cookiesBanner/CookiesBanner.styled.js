import styled from "@emotion/styled"

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background: ${({ theme }) => theme.colors.neutrals[100]};
  z-index: 999;
`

export const Text = styled.div`
  max-width: 470px;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`

export const Buttons = styled.div`
  display: flex;
  gap: 20px;
`
