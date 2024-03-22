import styled from "@emotion/styled"
import LinkedinIcon from "design-system/components/icon"

import ImageComponent from "design-system/components/image"

export const TeamCardWrapper = styled.div`
  display: flex;
  gap: 32px;
  width: 470px;
  padding: 24px;

  ${({ theme }) => theme.breakpoints.mobile} {
    width: 343px;
  }
`
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
`

export const Image = styled(ImageComponent)`
  width: 112px;
  height: 112px;
  border: 3px solid ${({ theme }) => theme.colors.primary[500]};
`

export const Icon = styled(LinkedinIcon)`
  margin-top: 24px;
  color: ${({ theme }) => theme.colors.gray[600]};

  ${({ theme }) => theme.breakpoints.mobile} {
    margin-top: 16px;
  }
`

export const Link = styled.a`
  border-radius: 36px;
  box-shadow: 2px 2px 9px 0px rgba(0, 0, 0, 0.1);
  transition: 300ms linear;
  text-decoration: none;
  cursor: pointer;

  :hover {
    box-shadow: 2px 2px 30px 0px rgba(0, 0, 0, 0.2);
  }
`
