import { string, node } from "prop-types"

import Typography from "design-system/components/typography"
import Button from "design-system/components/button"
import Count from "design-system/components/count"

import * as Styled from "./PartnerCard.styled"

const PartnerCard = ({
  title,
  discount,
  children,
  link,
  imageSrc,
  className,
}) => (
  <Styled.Container className={className}>
    <Styled.Header>
      <Styled.Image src={imageSrc} alt="" />
      <Count count={discount} size="xsmall" />
    </Styled.Header>

    <Styled.Line />

    <Styled.Content>
      <Typography variant="h3">{title}</Typography>
      <Typography variant="bodyTitle">{children}</Typography>

      {link && (
        <Button
          variant="text"
          text="Idź do oferty"
          iconEnd="arrowRight"
          href={link}
        />
      )}
    </Styled.Content>
  </Styled.Container>
)

PartnerCard.propTypes = {
  /**
   * The Title component used as a heading of the card.
   */
  title: string.isRequired,
  discount: string,
  /**
   * The content of the card.
   */
  children: node,
  /**
   * The URL that the card should redirect to when clicked.
   */
  link: string,
  /**
   * The path to an image from outside of our repository.
   */
  imageSrc: string,
  /**
   * The alignment of the card, used for all breakpoints.
   */
  className: string,
}

PartnerCard.defaultProps = {
  children: null,
  discount: null,
  link: null,
  imageSrc: null,
  className: null,
}

export default PartnerCard
