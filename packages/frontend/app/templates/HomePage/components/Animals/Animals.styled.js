import styled from "@emotion/styled"

export const ContentContainer = styled.div`
  max-width: 640px;
`

export const Wrapper = styled.div`
  display: flex;
  gap: 40px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    flex-direction: column;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`

export const CardsWrapper = styled.div`
  display: flex;
  width: 30%;
  align-items: stretch;
  flex: 1;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    width: 100%;
  }
`
