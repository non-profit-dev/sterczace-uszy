import styled from "@emotion/styled"

export const ContactInfoContainer = styled.div`
  min-width: 410px;
  display: flex;
  flex-direction: column;
  gap: 48px;

  ${({ theme }) => theme.breakpoints.mobileLg} {
    min-width: unset;
  }
`
