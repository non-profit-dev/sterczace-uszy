import styled from "@emotion/styled"

export const SectionWrapper = styled.div`
  background: ${({ theme }) => theme.colors.complementary[100]};
  padding: 120px 0;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding: 100px 0;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 60px 0;
  }
`

export const Content = styled.div`
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

  ${({ theme }) => theme.breakpoints.mobileLg} {
    gap: 20px;
  }
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

export const Grid = styled.div`
  margin-bottom: 100px;
  display: grid;
  grid-template-areas: "header header" "image features";
  grid-template-columns: 300px auto;
  row-gap: 100px;
  column-gap: 60px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    grid-template-areas: "image" "header" "features";
    grid-template-columns: 1fr;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    margin-bottom: 60px;
    row-gap: 60px;
  }
`

export const Header = styled.div`
  grid-area: header;
`

export const Image = styled.div`
  grid-area: image;
  max-height: 800px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    width: 100vw;
    margin-left: -70px;
    grid-template-columns: 1fr;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    margin-left: -40px;
  }
`

export const Features = styled.div`
  grid-area: features;
`
