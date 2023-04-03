import styled from "@emotion/styled"

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 120px 0;
  gap: 30px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    flex-direction: column;
    padding: 56px 0;
    gap: 64px;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 56px 0;
  }
`

export const Banner = styled.div`
  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: none;
  }
`
