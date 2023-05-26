import styled from "@emotion/styled"

export const PanelComponent = styled.div`
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(1fr);
  padding: 20px 20px 20px 20px;
  border: 1px dashed ${({ theme }) => theme.colors.primary[400]};
`

export const Title = styled.div`
  grid-column: 1;
`
export const Heading = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  max-width: 90%;
`
