import styled from "@emotion/styled"

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex-grow: 1;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 205px 1fr;
  gap: 30px;

  ${({ theme }) => theme.breakpoints.mobileLg} {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`
export const ButtonContainer = styled.div`
  align-self: flex-start;
`
