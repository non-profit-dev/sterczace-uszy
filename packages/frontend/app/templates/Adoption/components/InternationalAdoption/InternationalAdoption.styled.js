import styled from "@emotion/styled"

export const SectionWrapper = styled.div`
  background: ${({ theme }) => theme.colors.complementary[100]};
  padding: 120px 0;
`

export const ImageWrapper = styled.div`
  max-width: 300px;
`

export const Content = styled.div`
  display: flex;
  align-items: stretch;
  gap: 60px;
  padding: 120px 0;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    flex-direction: column;
    gap: 60px;
    padding: 100px 0;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    gap: 40px;
    padding: 60px 0;
  }
`

export const Features = styled.div`
  max-width: 640px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const MoreInfo = styled.div`
  max-width: 860px;
  display: flex;
  flex-direction: column;
  gap: 70px;
`

export const ButtonWrapper = styled.div`
  margin-top: 30px;
`

export const Links = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 18px;
`
