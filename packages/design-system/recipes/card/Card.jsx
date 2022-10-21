import { string, oneOf, node } from "prop-types"

import * as Styled from "./Card.styled"
import Title from "../../components/title/Title"
import Illustration, {
  illustrations,
} from "../../components/illustrations/Illustration"
import Button from "../../components/button/Button"
import { icons } from "../../components/icon/Icon"

const Card = ({
  href,
  text,
  size,
  badge,
  children,
  illustrationName,
  image,
  cardVariant,
  buttonVariant,
  buttonText,
  buttonColor,
  buttonSize,
  iconStart,
  iconEnd,
}) => (
  <Styled.Card as={href ? `a` : `div`}>
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
    <Styled.ContentContainer cardVariant={cardVariant}>
      <Title text={text} size={size} badge={badge} />
      {children}
      {buttonText && (
        <Button
          variant={buttonVariant}
          text={buttonText}
          color={buttonColor}
          size={buttonSize}
          iconStart={iconStart}
          // iconEnd={iconEnd}
        />
      )}
    </Styled.ContentContainer>
  </Styled.Card>
)

Card.propTypes = {
  href: string,
  text: string.isRequired,
  badge: string,
  size: oneOf(["small", "medium", "large"]),
  children: node,
  illustrationName: oneOf(Object.keys(illustrations)),
  image: node,
  cardVariant: oneOf([
    "simple",
    "illustrationWithoutText",
    "illustrationWithoutBackground",
    "illustrationWithBackground",
    "image",
  ]),
  buttonText: string,
  buttonVariant: oneOf(["fill", "border", "text", "textLine"]),
  buttonColor: oneOf(["primary", "black", "white"]),
  buttonSize: oneOf(["small", "medium", "large"]),
  iconStart: oneOf(Object.keys(icons)),
  iconEnd: oneOf(Object.keys(icons)),
}

Card.defaultProps = {
  href: null,
  size: "medium",
  badge: null,
  children: null,
  illustrationName: null,
  image: null,
  cardVariant: "simple",
  buttonText: null,
  buttonVariant: null,
  buttonColor: null,
  buttonSize: null,
  iconStart: null,
  iconEnd: null,
}

export default Card
