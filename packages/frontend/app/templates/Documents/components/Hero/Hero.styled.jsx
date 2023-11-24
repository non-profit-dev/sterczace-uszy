import styled from "@emotion/styled"

export const Hero = styled.header`
  padding: 100px 0;
  background: ${({ theme }) => theme.colors.complementary[100]};
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    flex-direction: column;
  }
`

export const TextWrapper = styled.div`
  max-width: 584px;
`

export const Image = styled.div`
  max-width: 518px;
`
