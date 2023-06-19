import styled from "@emotion/styled"
import Icon from "design-system/components/icon"

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 7px;
  color: ${({ theme }) => theme.colors.gray[600]};
`

export const Container = styled.div`
  position: relative;
  display: flex;
  gap: 19px;
`

export const Checkbox = styled.input`
  appearance: none;
  min-width: 22px;
  height: 22px;
  border-radius: 2px;
  border: 1.5px solid;
  border-color: ${({ theme, error }) => !error && theme.colors.gray[500]};
  outline: ${({ error, theme }) =>
    error && `2px solid ${theme.colors.error[100]}`};
  margin-top: 2px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    min-width: 18px;
    height: 18px;
  }

  &:disabled {
    border: 1.5px solid ${({ theme }) => theme.colors.gray[400]};
  }

  &:focus {
    outline: 1.5px solid ${({ theme }) => theme.colors.blue[100]};
  }

  &:active {
    border: 1.5px solid ${({ theme }) => theme.colors.gray[500]};
  }

  &:hover {
    border: 1.5px solid ${({ theme }) => theme.colors.gray[600]};
  }

  &:checked {
    background-color: ${({ theme }) => theme.colors.gray[600]};
  }
`

export const CheckboxIcon = styled(Icon)`
  position: absolute;
  top: 4px;
  left: 4px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    top: 3px;
    left: 1px;
  }
`
