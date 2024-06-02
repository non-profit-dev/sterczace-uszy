import styled from "@emotion/styled"
import Container from "design-system/components/container"
import TextBanner from "design-system/patterns/textBanner"

export const SectionContainer = styled(Container)`
  margin: 120px auto;
  padding: 0 56px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    margin: 100px auto 74px;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    margin: 60px auto;
    padding: 0 16px;
  }
`

export const Banner = styled(TextBanner)`
  margin-bottom: 60px;
`

export const AccordionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;
`

export const AccordionContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 32px;
  align-items: start;
  ${({ theme }) => theme.breakpoints.mobileLg} {
    grid-template-columns: 1fr;
  }
`

export const AccordionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const Icon = styled.div`
  width: 75px;
  height: 75px;
  padding: 15px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary[500]};
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.breakpoints.mobile} {
    width: 56px;
    height: 56px;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`

export const ButtonWrapper = styled.div`
  margin-top: 80px;

  ${({ theme }) => theme.breakpoints.mobileLg} {
    margin-top: 40px;
  }
`
