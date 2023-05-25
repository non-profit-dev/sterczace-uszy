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

export const Banner = styled.div`
  background: ${({ theme }) => theme.colors.gray[600]};
`

export const Image = styled.img`
  display: block;
  margin: 0 auto;
  height: 300px;
`

export const FormWrapper = styled.div`
  max-width: 719px;
  margin-top: 48px;
  padding: 48px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  border-radius: 10px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    width: 100vw;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 56px 24px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 245px 1fr;
  gap: 30px;
  margin-top: 32px;

  ${({ theme }) => theme.breakpoints.mobileLg} {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`
export const ButtonContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 48px;
  align-self: flex-start;
`
