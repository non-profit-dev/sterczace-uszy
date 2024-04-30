import styled from "@emotion/styled"

import ImageComponent from "design-system/components/image"

export const Container = styled.div`
  box-shadow:
    1px 9px 14px rgba(0, 0, 0, 0.1),
    2px 3px 79px rgba(129, 129, 129, 0.15);
  border-radius: 30px;
  background: ${({ theme }) => theme.colors.neutrals[100]};
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 32px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px;
`

export const Image = styled(ImageComponent)`
  max-width: 80%;
`

export const Line = styled.div`
  width: 100%;
  height: 5px;
  background: ${({ theme }) => theme.colors.primary[500]};
  transform: matrix(-1, 0, 0, 1, 0, 0);
`

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: space-between;
`
