import styled from "@emotion/styled"

export const PanelContent = styled.div`
  position: relative;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  padding: 20px;
  border: 1px dashed ${({ theme }) => theme.colors.primary[400]};
`

export const Content = styled.div`
  float: left;
  margin-bottom: 20px;
  width: 80%;
`

export const IconButton = styled.div`
  float: right;
  margin-right: 20px;
`
