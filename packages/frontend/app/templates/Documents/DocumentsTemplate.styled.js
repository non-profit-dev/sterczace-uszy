import styled from "@emotion/styled"

export const SurveyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  gap: 50px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    flex-direction: column;
    padding-top: 0;
  }
`

export const Image = styled.div`
  width: 263px;
  height: 236px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    width: 200px;
    height: 180px;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    width: 150px;
    height: 135px;
  }
`
