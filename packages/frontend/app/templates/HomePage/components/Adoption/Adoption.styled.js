import styled from "@emotion/styled"

export const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.neutrals[100]};
  margin: 80px auto;
  padding-top: 30px;
`

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.neutrals[100]};
  position: relative;
  display: grid;
  text-align: center;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    flex-direction: column;
    margin: 140px auto;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    margin: 140px auto;
    position: relative;
    display: grid;
    text-align: center;
    width: 100%;
  }
`

export const TextContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.neutrals[100]};
  margin: 0px auto;
  position: relative;
  display: grid;
  text-align: center;
  width: 80%;
  gap: 20px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: grid;
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: 100%;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    display: grid;
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: 100%;
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
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: 60%;
    margin-top: 5px;
  }
`

export const ButtonContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.neutrals[100]};
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1px;
    margin-bottom: 10px;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1px;
    margin-bottom: 10px;
  }
`
