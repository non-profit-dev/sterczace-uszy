import styled from "@emotion/styled"

export const Label = styled.label`
  ${({ theme }) => theme.typography.desktop.bodySmall};
  color: ${({ theme }) => theme.colors.grey[600]};
`

export const LabelText = styled.p`
  margin: 0 0 8px;
`
export const Container = styled.div`
  position: relative;
`

export const Input = styled.input`
  width: 100%;
  line-height: 24px;
  padding: 12px 10px;
  margin: 0 0 8px;
  background: ${({ theme }) => theme.colors.neutrals[100]};
  border: 1px solid ${({ theme }) => theme.colors.grey[400]};
  border-radius: 10px;
  border-color: ${({ state, theme }) => {
    switch (state) {
      case "valid":
        return theme.colors.decorative.success
      case "error":
        return theme.colors.decorative.error
      default:
        return theme.colors.grey[400]
    }
  }};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey[400]};
  }
`
export const Icon = styled.span`
  position: absolute;
  right: 10px;
  top: 12px;

  color: ${({ state, theme }) => {
    switch (state) {
      case "valid":
        return theme.colors.decorative.success
      case "error":
        return theme.colors.decorative.error
      default:
        return theme.colors.grey[400]
    }
  }};
`

export const Message = styled.p`
  margin: 0;
`
