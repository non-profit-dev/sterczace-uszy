import styled from "@emotion/styled"

export const Accordion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 2px solid;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.neutrals[100]};
  padding: ${({ paddingTop }) =>
    paddingTop ? `36px 24px 0px 24px` : `0px 24px 0px 24px`};

`
export const Title = styled.div`
  display: inline-flex;
  gap: 90px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.grey[600]};
  box-shadow: 2px 2px 9px 0px rgba(0, 0, 0, 0.1);
  color: ${({ variant, theme }) => {
    switch (variant) {
      case "gray":
        return theme.colors.grey[600]
      case "neutrals":
        return theme.colors.neutrals[100]
      case "primary":
        return theme.colors.primary[500]
      default:
        return theme.colors.grey[600]
    }
  }};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 2px 2px 9px 0px rgba(0, 0, 0, 0.1);
`

  export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  `

  export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  `
