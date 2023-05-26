import { string } from "prop-types"
import * as Styled from "./PanelComponent.styled"

const PanelComponent = ({ heading, className, title }) => (
  <Styled.PanelComponent className={className}>
    <Styled.Title>
      {title}
      <Styled.Heading>{heading}</Styled.Heading>
    </Styled.Title>
  </Styled.PanelComponent>
)

PanelComponent.propTypes = {
  title: string.isRequired,
  heading: string.isRequired,
  className: string,
}

PanelComponent.defaultProps = {
  className: null,
}

export default PanelComponent
