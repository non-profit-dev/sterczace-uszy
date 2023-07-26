import styled from "@emotion/styled"

export const Label = styled.label`
  ${({ theme }) => theme.typography.desktop.bodySmall};
  color: ${({ theme }) => theme.colors.gray[600]};
`

export const Container = styled.div`
  position: relative;
  margin-top: 8px;
`

export const Select = styled.select`
  ${({ theme }) => theme.typography.desktop.bodySmall};
  ${({ theme }) => theme.breakpoints.sm} {
    ${({ theme }) => theme.typography.mobile.bodySmall}
  }
  color: ${({ theme }) => theme.colors.gray[400]};
  appearance: none;
  width: 100%;
  padding: 12px 40px 12px 10px;
  background: ${({ theme }) => theme.colors.neutrals[100]};
  border: 1px solid ${({ theme }) => theme.colors.gray[400]};
  border-radius: 10px;

  &:disabled {
    background: ${({ theme }) => theme.colors.gray[200]};
    color: ${({ theme }) => theme.colors.gray[400]};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.blue[100]};
    outline-offset: 1px;
  }

  &:active {
    border: 1px solid ${({ theme }) => theme.colors.gray[600]};
  }
`

export const Icon = styled.span`
  display: inline-flex;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;

  ${({ theme }) => theme.breakpoints.sm} {
    svg {
      height: 20px;
    }
  }
`
