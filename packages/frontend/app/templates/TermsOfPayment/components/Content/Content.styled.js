import styled from "@emotion/styled"

export const Content = styled.div`
  padding: 120px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1062px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding: 50px 0;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 30px 0;
  }
`

export const Image = styled.img`
  width: 100%;
  box-shadow: 2px 3px 9px 0px rgba(0, 0, 0, 0.1);
  margin-top: 36px;
  margin-bottom: 28px;
`
