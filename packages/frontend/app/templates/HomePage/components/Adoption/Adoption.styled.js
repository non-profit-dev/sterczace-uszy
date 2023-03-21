import styled from "@emotion/styled"

export const Container = styled.div`
  text-align: center;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    margin: 200px auto;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    margin: 190px auto;
  }
`

export const TextContainer = styled.div`
  margin: 0px auto;
  width: 90%;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: flex;
    flex-direction: column;
  }
`

export const RulesContainer = styled.div`
  align-items: center;
  padding-top: 30px;
  margin: 0 auto;
  display: flex;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    flex-direction: column;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px auto;
`
