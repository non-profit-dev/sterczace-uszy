import { string, oneOf } from "prop-types"

import Button from "design-system/components/button"
import Typography from "design-system/components/typography"

import * as Styled from "./CtaBanner.styled"

const CtaBanner = ({
  heading,
  buttonText,
  buttonHref,
  mobileLayout,
  className,
}) => (
  <Styled.CtaBanner className={className}>
    <Styled.Content mobileLayout={mobileLayout}>
      <Typography variant="h2">{heading}</Typography>

      <Button href={buttonHref} text={buttonText} variant="border" />
    </Styled.Content>
  </Styled.CtaBanner>
)

CtaBanner.propTypes = {
  heading: string.isRequired,
  buttonText: string.isRequired,
  buttonHref: string.isRequired,
  mobileLayout: oneOf(["center", "left"]),
  className: string,
}

CtaBanner.defaultProps = {
  mobileLayout: "center",
  className: null,
}

export default CtaBanner
