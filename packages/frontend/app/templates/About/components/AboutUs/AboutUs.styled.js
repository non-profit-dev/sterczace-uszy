import styled from "@emotion/styled"
import Container from "design-system/components/container"

export const Image = styled.img`
  max-width: 425px;
  width: 100%;

  ${({ theme }) => theme.breakpoints.tablet} {
    height: 572px;
    object-fit: cover;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    height: 300px;
  }
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 59px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    flex-direction: column-reverse;
    align-items: center;
    gap: 100px;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    gap: 60px;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    gap: 40px;
  }
`

export const ContainerSection = styled(Container)`
  margin: 120px 0;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding: 0;
    margin: 100px 0 0;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 0;
    margin: 80px 0 0;
  }
`
