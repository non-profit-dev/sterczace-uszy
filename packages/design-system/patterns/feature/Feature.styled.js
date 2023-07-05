import styled from "@emotion/styled"

export const Feature = styled.div`
  display: flex;
  gap: 32px;
  ${({ theme }) => theme.breakpoints.mobileLg} {
    flex-direction: column;
  }
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.breakpoints.tablet} {
    gap: 4px;
  }
`

export const Icon = styled.div`
  width: 75px;
  height: 75px;
  padding: 15px;
  border-radius: 50%;
  background: ${({ color, theme }) =>
    color === `primary` ? theme.colors.primary[500] : theme.colors.gray[500]};
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.breakpoints.mobile} {
    width: 56px;
    height: 56px;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`
