import styled from "@emotion/styled"

import ImageComponent from "design-system/components/image"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow:
    1px 9px 14px rgba(0, 0, 0, 0.1),
    2px 3px 79px rgba(129, 129, 129, 0.15);
  border-radius: 30px;
  background: ${({ theme }) => theme.colors.neutrals[100]};
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 24px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 24px;
  padding: 32px;

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 24px;
  }
`

export const Body = styled.div`
  height: 100%;
`

export const Image = styled(ImageComponent)`
  max-width: 80%;
`

export const Line = styled.div`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    clip-path: ellipse(50% 2px);
    background: ${({ theme }) => theme.colors.primary[500]};

    ${({ theme }) => theme.breakpoints.tablet} {
      content: ${({ hideLineOnMobile }) => (hideLineOnMobile ? `none` : "")};
    }
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 24px;
  justify-content: space-between;

  ${({ theme }) => theme.breakpoints.mobileLg} {
    flex-direction: column;
  }
`
