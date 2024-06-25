import styled from "@emotion/styled"

export const TextWrapper = styled.div`
  max-width: 820px;
  margin-top: 100px;
  margin-bottom: 120px;

  ${({ theme }) => theme.breakpoints.tablet} {
    margin-top: 60px;
    margin-bottom: 80px;
  }
`

export const Image = styled.img`
  display: block;
  margin: 0 auto;
  height: 300px;
`

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
  margin-top: 16px;
  align-self: flex-start;
`

export const CheckboxContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
`

export const IllustrationWrapper = styled.div`
  max-width: 80px;
`
