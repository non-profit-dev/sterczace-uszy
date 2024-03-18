import { string, oneOf } from "prop-types"

import Typography from "design-system/components/typography"
import Button from "design-system/components/button"

import * as Styled from "./CtaBanner.styled"

const CtaBanner = ({
  heading,
  buttonText,
  buttonHref,
  buttonVariant,
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
        as="a"
      />
    </Styled.Content>
  </Styled.CtaBanner>
)

CtaBanner.propTypes = {
  heading: string.isRequired,
  buttonText: string.isRequired,
  buttonHref: string.isRequired,
  buttonVariant: oneOf(["border", "text"]),
  mobileLayout: oneOf(["center", "left"]),
  className: string,
}

CtaBanner.defaultProps = {
  mobileLayout: "center",
  buttonVariant: "border",
  className: null,
}

export default CtaBanner
