import styled from "@emotion/styled"

export const Wrapper = styled.div``

export const Tabs = styled.div`
  display: flex;
  width: 100%;
  filter: ${({ transparentContent }) =>
    transparentContent
      ? "drop-shadow(2px 3px 9px rgba(0, 0, 0, 0.1))"
      : "none"};

  ${({ theme }) => theme.breakpoints.tablet} {
    overflow-x: auto;
  }
`

export const Content = styled.div`
  padding: ${({ transparentContent }) =>
    transparentContent ? "32px 32px 32px 8px" : "32px"};
  background: ${({ theme, transparentContent }) =>
    transparentContent ? "transparent" : theme.colors.complementary[100]};
  border: 1px solid
    ${({ theme, transparentContent }) =>
      transparentContent ? "transparent" : theme.colors.gray[300]};
  border-top: transparent;
  border-radius: 0 0 10px 10px;
`

export const Tab = styled.button`
  width: 100%;
  padding: 10px 50px;
  cursor: pointer;
  white-space: nowrap;
  background: ${({ theme, active }) =>
    active ? theme.colors.complementary[100] : theme.colors.gray[100]};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-bottom: 1px solid
    ${({ borderBottom, theme }) =>
      borderBottom ? theme.colors.gray[300] : "transparent"};

  &:first-of-type {
    border-radius: 10px 0 0 0;
  }

  &:last-of-type {
    border-radius: 0 10px 0 0;
  }
`
