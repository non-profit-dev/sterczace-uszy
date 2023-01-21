import styled from "@emotion/styled"

export const Label = styled.label`
  ${({ theme }) => theme.typography.desktop.bodySmall};
  color: ${({ theme }) => theme.colors.grey[600]};
`

export const Container = styled.div`
  position: relative;
`

export const Select = styled.select`
  ${({ theme }) => theme.typography.desktop.bodySmall};
  ${({ theme }) => theme.breakpoints.sm} {
    ${({ theme }) => theme.typography.mobile.bodySmall}
  }
  color: ${({ theme }) => theme.colors.grey[400]};
  appearance: none;
  width: 100%;
  padding: 12px 40px 12px 10px;
  margin-top: 8px;
  background: ${({ theme }) => theme.colors.neutrals[100]};
  border: 1px solid ${({ theme }) => theme.colors.grey[400]};
  border-radius: 10px;

  &:disabled {
    background: ${({ theme }) => theme.colors.grey[200]};
    color: ${({ theme }) => theme.colors.grey[400]};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.grey[400]};
    outline: 4px solid ${({ theme }) => theme.colors.grey[200]};
  }

  &:active {
    border: 1px solid ${({ theme }) => theme.colors.grey[600]};
  }
`

export const Icon = styled.span`
  position: absolute;
  right: 15px;
  top: 19px;
  pointer-events: none;

  ${({ theme }) => theme.breakpoints.sm} {
    top: 21px;

    svg {
      height: 20px;
    }
  }
`
