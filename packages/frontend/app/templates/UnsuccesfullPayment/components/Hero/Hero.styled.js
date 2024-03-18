import styled from "@emotion/styled"

export const Header = styled.header`
  padding: 120px 0;
  background: linear-gradient(180deg, #faf4f4 0%, #faf4f4 86.11%, #fefcfc 100%);
  text-align: center;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding: 100px 0;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 60px 0;
  }
`

export const HeaderWrapper = styled.div`
  max-width: 762px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-inline: auto;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    max-width: 432px;
    gap: 30px;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    gap: 10px;
  }
`

export const ParagraphWrapper = styled.div`
  max-width: 740px;
  margin-top: 20px;
  text-align: center;
  margin-inline: auto;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    max-width: 470px;
  }
`
export const ImageWrapper = styled.div`
  margin-top: 80px;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    margin-top: 40px;
  }
`

export const Image = styled.img`
  width: 100%;
  max-height: 480px;
  max-width: 721px;
`
