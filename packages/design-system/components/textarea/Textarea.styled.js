import styled from "@emotion/styled"

export const Label = styled.label`
  ${({ theme }) => theme.typography.desktop.bodySmall};
  color: ${({ theme }) => theme.colors.grey[600]};
`

export const Container = styled.div`
  position: relative;
`

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 160px;
  resize: vertical;
  padding: ${({ state }) => (state ? "12px 38px 12px 10px" : "12px 10px")};
  margin: 8px 0;
  background: ${({ theme }) => theme.colors.neutrals[100]};
  border: 1px solid ${({ theme }) => theme.colors.grey[400]};
  border-radius: 10px;
  border-color: ${({ state, theme }) =>
    state === "error" ? theme.colors.error[100] : theme.colors.grey[400]};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey[400]};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.grey[200]};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.grey[400]};
    outline: 4px solid ${({ theme }) => theme.colors.grey[200]};
  }

  &:active {
    border: 1px solid ${({ theme }) => theme.colors.grey[600]};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.grey[600]};
  }
`

export const Icon = styled.span`
  position: absolute;
  top: 20px;
  right: 18px;
  height: 24px;

  color: ${({ state, theme }) =>
    state === "error" ? theme.colors.error[100] : theme.colors.grey[400]};
`