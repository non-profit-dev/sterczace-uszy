import styled from "@emotion/styled"

export const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.neutrals[100]};
`

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.neutrals[100]};
  padding: 30px;
  position: absolute;
  display: grid;
  text-align: center;
  width: 100%;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: column;
    padding: 0px auto;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    margin: 0 auto;
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
  gap: 20px;
  width: 50%;
  height: 100%;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    flex-direction: column;
    align-items: center;
    display: grid;
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: 100%;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    margin: 10px 1px;
    position: relative;
    display: grid;
    text-align: left;
    width: 90%;
    height: 40%;
  }
`

export const RulesContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.neutrals[100]};
  align-items: center;
  padding-top: 30px;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  width: 90%;
  display: flex;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    flex-direction: column;
    align-items: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: 100%;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    flex-direction: column;
    align-items: center;
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
    flex-direction: column;
    align-items: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1px;
    margin-bottom: 10px;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    flex-direction: column;
    align-items: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1px;
    margin-bottom: 10px;
  }
`
