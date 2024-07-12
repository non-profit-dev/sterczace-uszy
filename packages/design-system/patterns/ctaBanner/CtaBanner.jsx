import { string, oneOf } from "prop-types"

import Typography from "design-system/components/typography"
import Button from "design-system/components/button"

import * as Styled from "./CtaBanner.styled"

const CtaBanner = ({
  heading,
  buttonText,
  buttonHref,
  buttonVariant,
  target,
  mobileLayout,
  className,
}) => (
  <Styled.CtaBanner className={className}>
    <Styled.Content mobileLayout={mobileLayout}>
      <Typography variant="h2">{heading}</Typography>

      <Button
        href={buttonHref}
        text={buttonText}
        variant={buttonVariant}
        target={target}
        as="a"
      />
    </Styled.Content>
  </Styled.CtaBanner>
)

CtaBanner.propTypes = {
  heading: string.isRequired,
  buttonText: string.isRequired,
  buttonHref: string.isRequired,
  target: string,
  buttonVariant: oneOf(["border", "text"]),
  mobileLayout: oneOf(["center", "left"]),
  className: string,
}

CtaBanner.defaultProps = {
  target: "_self",
  mobileLayout: "center",
  buttonVariant: "border",
  className: null,
}

export default CtaBanner
