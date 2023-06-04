import styled from "@emotion/styled"
import Typography from "design-system/components/typography"

export const PanelContent = styled.div`
  position: relative;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  padding: 20px;
  border: 1px dashed ${({ theme }) => theme.colors.primary[400]};
  border-radius: 10px;
`

export const Content = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  width: 80%;
`

export const IconButton = styled(Typography)`
  display: inline;
  cursor: pointer;
  vertical-align: middle;
  margin-left: 10px;
`

export const CopyButton = styled.button`
  display: inline;
  cursor: pointer;
  vertical-align: middle;
`
