import styled from "@emotion/styled"

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0px;

  ${({ theme }) => theme.breakpoints.sm} {
    gap: 32px;
  }

  &:before {
    content: "";
    width: 100%;
    height: 5px;
    clip-path: ${({ size }) =>
      `ellipse(50% ${size === `large` ? `3px` : `2px`})`};
    background: ${({ theme }) => theme.colors.primary[500]};
  }
`
// export const MainWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   border: 3px solid red;
//   gap: 32px;
//   margin: 0px auto 0px auto;
//   padding: 60px 25px;
//   ${({ theme }) => theme.breakpoints.lg} {
//     gap: 64px;
//     padding: 60px 15px 0px 15px;

//   ${({ theme }) => theme.breakpoints.sm} {
//     gap: 32px;
//     padding: 20px 15px;
//   }
// `

export const Logo = styled.div`
  display: inline-flex;
  margin-top: 60px;
  ${({ theme }) => theme.breakpoints.xl} {
    margin: 60px 20px 0px 20px;
  }
  ${({ theme }) => theme.breakpoints.lg} {
    margin: 60px 45px 0px 45px;
  }

  ${({ theme }) => theme.breakpoints.md} {
    margin: 60px 15px 0px 15px;
  }

  ${({ theme }) => theme.breakpoints.sm} {
    margin: 32px auto 0px auto;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 2px solid green;
  margin: 60px auto 32px auto;
  gap: 80px;
  ${({ theme }) => theme.breakpoints.xl} {
    margin: 60px 20px 32px 20px;
    gap: 50px;
  }

  ${({ theme }) => theme.breakpoints.lg} {
    gap: 40px;
    margin: 32px 45px 64px 45px;
    flex-direction: column;
  }
  ${({ theme }) => theme.breakpoints.md} {
    gap: 40px;
    margin: 32px 15px 64px 15px;
    flex-direction: column;
  }
  ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: column;
    flex-grow: 0;
    margin: 32px 0px 32px 0px;
    gap: 32px;
  }
`

export const MainFoundationData = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 32px;

  ${({ theme }) => theme.breakpoints.lg} {
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
  }
  ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: column;
    justify-content: flex-start;
    gap: 32px;
  }
`

export const Sections = styled.div`
  display: flex;
  flex: 2;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
  ${({ theme }) => theme.breakpoints.lg} {
    flex-direction: row;
    width: 100%;
    gap: 20px;
  }

  ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: column;
    gap: 32px;
  }
`
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Icons = styled.div`
  display: inline-flex;
  ${({ theme }) => theme.breakpoints.sm} {
    display: none;
  }
`
export const IconsMobile = styled.div`
  display: none;
  ${({ theme }) => theme.breakpoints.sm} {
    display: inline-flex;
  }
`

export const Copyright = styled.div`
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.breakpoints.xl} {
    margin: 0px 20px;
  }
  ${({ theme }) => theme.breakpoints.lg} {
    margin: 0px 45px;
  }
  ${({ theme }) => theme.breakpoints.md} {
    margin: 0px 15px;
  }

  ${({ theme }) => theme.breakpoints.sm} {
    margin: 0px;
  }
`
