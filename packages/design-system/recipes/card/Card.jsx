import { string, oneOf, node } from "prop-types"

import * as Styled from "./Card.styled"
import Illustration, {
  illustrations,
} from "../../components/illustrations/Illustration"

const Card = ({
  button,
  children,
  href,
  illustrationName,
  image,
  layout,
  title,
}) => (
  <Styled.Card as={href ? `a` : `div`} shadow={!!href}>
    {illustrationName && (
      <Styled.IllustrationContainer>
        <Illustration name={illustrationName} />
      </Styled.IllustrationContainer>
    )}
    {image && (
      <Styled.ImageContainer>
        <Illustration name="heartWithDogFace" />
      </Styled.ImageContainer>
    )}
    <Styled.ContentContainer layout={layout}>
      {title && title}
      {children}
      {button && button}
    </Styled.ContentContainer>
  </Styled.Card>
)

Card.propTypes = {
  title: node.isRequired,
  button: node,
  children: node,
  href: string,
  illustrationName: oneOf(Object.keys(illustrations)),
  image: node,
  layout: oneOf(["left", "center"]),
}

Card.defaultProps = {
  button: null,
  children: null,
  href: null,
  illustrationName: null,
  image: null,
  layout: "center",
}

export default Card
