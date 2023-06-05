import styled from "@emotion/styled"
import Typography from "design-system/components/typography"

export const PanelContent = styled.div`
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
`

export const AccountNumber = styled(Typography)`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  min-height: 32px;
  padding-top: 10px;
`
