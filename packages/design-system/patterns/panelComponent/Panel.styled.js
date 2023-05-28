import styled from "@emotion/styled"

export const PanelContent = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px dashed ${({ theme }) => theme.colors.primary[400]};
`

export const Heading = styled.div`
  padding-top: 20px;
  padding-bottom: 10px;
  max-width: 90%;
`
export const Content = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  max-width: 90%;
`
