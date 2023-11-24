import styled from "@emotion/styled"

export const SurveyContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
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
