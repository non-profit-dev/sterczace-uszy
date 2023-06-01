import { string, node } from "prop-types"
import IconButton from "design-system/components/iconButton"
import Typography from "design-system/components/typography"
import * as Styled from "./Panel.styled"

const Panel = ({ className, title, accountNumber, children }) => (
  <Styled.PanelContent className={className}>
    {title}
    <Styled.Content>{children}</Styled.Content>
    <Typography variant="h6">
      {accountNumber}
      {accountNumber && <IconButton name="copy" />}
    </Typography>
  </Styled.PanelContent>
)

Panel.propTypes = {
  title: node.isRequired,
  accountNumber: node,
  className: string,
  children: node,
}

Panel.defaultProps = {
  className: null,
  accountNumber: null,
  children: null,
}

export default Panel
