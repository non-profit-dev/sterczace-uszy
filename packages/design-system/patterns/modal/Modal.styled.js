import styled from "@emotion/styled"

export const Wrapper = styled.div`
  max-width: 800px;
  padding: 20px;

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 0;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
`

export const CloseButton = styled.button`
  cursor: pointer;
`

export const Body = styled.div`
  margin-top: 30px;
`
