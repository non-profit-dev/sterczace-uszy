import styled from "@emotion/styled"

export const TextWrapper = styled.div`
  max-width: 820px;
  margin-top: 100px;
  margin-bottom: 120px;

  ${({ theme }) => theme.breakpoints.tablet} {
    margin-top: 60px;
    margin-bottom: 80px;
  }
`

export const Banner = styled.div`
  background: ${({ theme }) => theme.colors.gray[600]};
`

export const Image = styled.img`
  display: block;
  margin: 0 auto;
  height: 300px;
  object-fit: cover;
`
