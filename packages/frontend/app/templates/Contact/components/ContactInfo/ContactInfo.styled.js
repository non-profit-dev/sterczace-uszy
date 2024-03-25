import styled from "@emotion/styled"

import Image from "design-system/components/image"

export const ContactInfoContainer = styled.div`
  min-width: 410px;
  display: flex;
  flex-direction: column;
  gap: 48px;

  ${({ theme }) => theme.breakpoints.mobileLg} {
    min-width: unset;
  }
`

export const FounderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`

export const FounderImage = styled(Image)`
  max-width: 250px;
  max-height: 280px;
  margin-top: -40px;
`
