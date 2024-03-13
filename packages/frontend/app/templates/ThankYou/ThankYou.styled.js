import styled from "@emotion/styled"

import IconComponent from "design-system/components/icon"
import Image from "design-system/components/image"

export const PageWrapper = styled.div`
  position: relative;
  background: linear-gradient(
    180deg,
    #ffffff -12.36%,
    #faf4f4 58.24%,
    rgba(250, 244, 244, 0) 123.06%
  );
`

export const ContentWrapper = styled.div`
  max-width: 856px;
  padding: 110px 0 150px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding: 100px 0 30px 0;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 60px 0 30px 0;
  }
`

export const FounderImage = styled(Image)`
  max-width: 160px;
  height: 198px;
`

export const FounderText = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Icon = styled(IconComponent)`
  margin-left: 5px;
  vertical-align: text-top;
`

export const Background = styled(Image)`
  max-width: 1440px;
  height: auto;
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  ${({ theme }) => theme.breakpoints.tabletLg} {
    position: static;
    transform: none;
  }
`
