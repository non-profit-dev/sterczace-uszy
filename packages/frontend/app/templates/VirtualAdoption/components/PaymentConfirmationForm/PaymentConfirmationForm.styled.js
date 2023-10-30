import styled from "@emotion/styled"
import TextBanner from "design-system/patterns/textBanner"
import ContainerComponent from "design-system/components/container"

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
  margin-bottom: 32px;
  align-self: flex-start;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    margin-bottom: 16px;
  }
`

export const ConfirmationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.gray[100]};
  padding: 48px;
  width: 719px;
  border-radius: 10px;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    width: 100%;
  }
  svg {
    width: 100px;
    height: 100px;
  }
`

export const ConfirmationBanner = styled(TextBanner)`
  max-width: 557px;
`

export const ConfirmationSendBanner = styled(TextBanner)`
  max-width: 719px;
  margin-bottom: 120px;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    margin-bottom: 108px;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    margin-bottom: 80px;
  }
`

export const ConfirmationContainer = styled(ContainerComponent)`
  padding-top: 120px;
  padding-bottom: 120px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding: 100px 0;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`

export const Container = styled(ContainerComponent)`
  padding-top: 120px;
  padding-bottom: 120px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding-top: 100px;
    padding-bottom: 100px;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`
export const CheckboxContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
`
