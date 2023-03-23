import styled from "@emotion/styled"

export const Wrapper = styled.div`
  // border: 1px solid black;
`

export const Tabs = styled.div`
  display: flex;
  width: 100%;
`

export const Content = styled.div`
  padding: 32px;
  background: ${({ theme }) => theme.colors.complementary[100]};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-top: transparent;
  border-radius: 0 0 10px 10px;

  ${({ theme }) => theme.breakpoints.tablet} {
  }
`

export const Tab = styled.button`
  width: 100%;
  padding: 10px 50px;
  cursor: pointer;
  background: ${({ theme, active }) =>
    active ? theme.colors.complementary[100] : theme.colors.gray[100]};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-bottom: 1px solid
    ${({ theme, active }) => (active ? "transparent" : theme.colors.gray[300])};

  &:first-of-type {
    border-radius: 10px 0 0 0;
  }

  &:last-of-type {
    border-radius: 0 10px 0 0;
  }
`
