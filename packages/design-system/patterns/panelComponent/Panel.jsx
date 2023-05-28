import { string } from "prop-types"
import IconButton from "design-system/components/iconButton"
import Typography from "design-system/components/typography"
import * as Styled from "./Panel.styled"

const Panel = ({ content, className, title, children, icon }) => (
  <Styled.PanelContent className={className}>
    {title}
    <Styled.Heading>{children}</Styled.Heading>
    <Typography variant="h6">
      {content}
      <IconButton name={icon} />
    </Typography>
  </Styled.PanelContent>
)

Panel.propTypes = {
  title: string.isRequired,
  content: string.isRequired,
  children: string.isRequired,
  icon: string.isRequired,
  className: string,
}

Panel.defaultProps = {
  className: null,
}

export default Panel
