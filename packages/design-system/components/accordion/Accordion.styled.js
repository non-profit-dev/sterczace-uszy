import styled from "@emotion/styled"

import theme from "design-system/tokens/theme"

import Typography from "design-system/components/typography"

const colors = {
  primary: {
    color: theme.colors.primary[500],
    backgroundColor: theme.colors.neutrals[100],
  },
  black: {
    color: theme.colors.gray[600],
    backgroundColor: theme.colors.neutrals[100],
  },
  white: {
    color: theme.colors.neutrals[100],
    backgroundColor: theme.colors.gray[600],
  },
}

export const Accordion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  border-radius: 10px;
  box-shadow: ${({ shadow }) =>
    shadow ? `2px 2px 9px 0px rgba(0, 0, 0, 0.1)` : `null`};
  background-color: ${({ color }) => colors[color].backgroundColor};
  color: ${({ color }) => colors[color].color};
`

export const Title = styled(Typography)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  color: ${({ color }) => colors[color].color};
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
`

export const Content = styled.div`
  padding: 0 20px 20px;
`

export const Icon = styled.div`
  display: inline-flex;
  transform: ${(props) => (props.isActive ? "" : "rotate(180deg)")};
`
