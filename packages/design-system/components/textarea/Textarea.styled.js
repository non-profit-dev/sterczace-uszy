import styled from "@emotion/styled"

export const Label = styled.label`
  font-family: ${({ theme }) => theme.fontFamily};
  ${({ theme }) => theme.typography.desktop.bodySmall};
  color: ${({ theme }) => theme.colors.gray[600]};
`

export const Container = styled.div`
  position: relative;
`

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 160px;
  resize: vertical;
  padding: ${({ error }) => (error ? "12px 38px 12px 10px" : "12px 10px")};
  margin: 8px 0;
  background: ${({ theme }) => theme.colors.neutrals[100]};
  border: 1px solid ${({ theme }) => theme.colors.gray[400]};
  border-radius: 10px;
  border-color: ${({ error, theme }) =>
    error ? theme.colors.error[100] : theme.colors.gray[400]};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[400]};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.gray[200]};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.gray[400]};
    outline: 4px solid ${({ theme }) => theme.colors.gray[200]};
  }

  &:active {
    border: 1px solid ${({ theme }) => theme.colors.gray[600]};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.gray[600]};
  }
`

export const Icon = styled.span`
  position: absolute;
  top: 20px;
  right: 18px;
  height: 24px;

  color: ${({ error, theme }) =>
    error ? theme.colors.error[100] : theme.colors.gray[400]};
`
