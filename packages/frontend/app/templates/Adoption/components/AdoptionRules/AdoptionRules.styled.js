import styled from "@emotion/styled"

import CountComponent from "design-system/components/count"

export const Section = styled.section`
  padding-top: 120px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding-top: 40px;
  }
`

export const Steps = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    margin-top: 80px;
    grid-template-columns: auto;
    gap: 0;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    margin-top: 60px;
  }
`

export const Count = styled(CountComponent)`
  margin-left: 24px;
  border-radius: 50%;
  width: 160px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.neutrals[100]};
  border: 1px solid ${({ theme }) => theme.colors.primary[500]};

  ${({ theme }) => theme.breakpoints.tabletLg} {
    width: 120px;
    height: 120px;
    margin: 40px auto 20px auto;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    width: 80px;
    height: 80px;
  }
`

export const TextBanner = styled.div`
  max-width: 476px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    max-width: 100%;
  }
`

export const FinalStep = styled.div`
  max-width: 1040px;
  padding: 80px 0;
  display: grid;
  grid-template-columns: 60% 30%;
  gap: 100px;
  align-items: center;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    grid-template-columns: auto;
    justify-items: center;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    gap: 60px;
  }
`

export const IllustrationWrapper = styled.div`
  max-width: 276px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    order: -1;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    max-width: 140px;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`
