import styled from "@emotion/styled"

export const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.neutrals[100]};
  margin: 80px auto;
`

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.neutrals[100]};
  text-align: center;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    flex-direction: column;
    margin: 140px auto;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    margin: 190px auto;
  }
`

export const TextContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.neutrals[100]};
  margin: 0px auto;
  width: 80%;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
  }
`

export const RulesContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.neutrals[100]};
  align-items: center;
  padding-top: 30px;
  margin: 0 auto;
  display: flex;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: 100%;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    display: flex;
    align-items: center;
  }
`

export const ButtonContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.neutrals[100]};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px auto;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: flex;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    display: flex;
  }
`
