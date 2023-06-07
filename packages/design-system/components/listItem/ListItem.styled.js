import styled from "@emotion/styled"
import theme from "../../tokens/theme"

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: flex-start;
  text-align: left;
  gap: 8px;
  color: ${({ variant }) =>
    variant === "primary" ? theme.colors.primary[500] : theme.colors.gray[600]};
  ${theme.typography.desktop.bodySmall};
`

export const ChildContainer = styled.div`
  display: flex;
  color: inherit;
  flex-grow: 0;
  line-height: 30px;
  gap: ${({ gap }) => `${gap}px`};
`

export const ListItemIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  margin-top: ${({ size }) => (size === `medium` ? 2 : 0)}px;
`
