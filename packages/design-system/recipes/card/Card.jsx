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
  titleText,
  titleSize,
  titleBadge,
  titleIconStart,
  titleIconEnd,
  children,
  illustrationName,
  image,
  buttonVariant,
  buttonText,
  buttonColor,
  buttonSize,
  buttonIconStart,
  buttonIconEnd,
  cardVersion,
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
    <Styled.ContentContainer cardVersion={cardVersion}>
      <Title
        text={titleText}
        size={titleSize}
        badge={titleBadge}
        iconStart={titleIconStart}
        iconEnd={titleIconEnd}
      />
      {children}
      {href && (
        <Button
          variant={buttonVariant}
          text={buttonText}
          color={buttonColor}
          size={buttonSize}
          iconStart={buttonIconStart}
          iconEnd={buttonIconEnd}
        />
      )}
    </Styled.ContentContainer>
  </Styled.Card>
)

Card.propTypes = {
  titleText: string.isRequired,
  href: string,
  cardVersion: oneOf(["left", "center"]),
  titleBadge: string,
  titleSize: oneOf(["small", "medium", "large"]),
  titleIconStart: oneOf(Object.keys(icons)),
  titleIconEnd: oneOf(Object.keys(icons)),
  children: node,
  illustrationName: oneOf(Object.keys(illustrations)),
  image: node,
  buttonText: string,
  buttonVariant: oneOf(["fill", "border", "text", "textLine"]),
  buttonColor: oneOf(["primary", "black", "white"]),
  buttonSize: oneOf(["small", "medium", "large"]),
  buttonIconStart: oneOf(Object.keys(icons)),
  buttonIconEnd: oneOf(Object.keys(icons)),
}

Card.defaultProps = {
  href: null,
  cardVersion: "center",
  titleSize: "small",
  titleBadge: null,
  titleIconStart: null,
  titleIconEnd: null,
  children: null,
  illustrationName: null,
  image: null,
  buttonText: "Button",
  buttonVariant: "text",
  buttonColor: "primary",
  buttonSize: "small",
  buttonIconStart: null,
  buttonIconEnd: null,
}

export default Card
