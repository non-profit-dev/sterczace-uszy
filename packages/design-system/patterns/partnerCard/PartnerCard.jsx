import { useTheme } from "@emotion/react"
import { string, node, bool } from "prop-types"

import Typography from "design-system/components/typography"
import Button from "design-system/components/button"

import useCopyToClipboard from "design-system/helpers/useCopyToClipboard"

import * as Styled from "./PartnerCard.styled"

const PartnerCard = ({
  title,
  discount,
  children,
  link,
  promoCode,
  imageSrc,
  microchipPromoForm,
  className,
}) => {
  const [isCopied, copyToClipboard] = useCopyToClipboard()
  const theme = useTheme()

  return (
    <Styled.Container className={className}>
      <Styled.Header>
        <Styled.Image src={imageSrc} alt="" />
        <Styled.Count count={discount} size="xsmall" />
      </Styled.Header>

      <Styled.Line />

      <Styled.Content>
        <Typography variant="h4" as="h3">
          {title}
        </Typography>

        <Styled.Body>
          <Typography variant="bodySmall" color={theme.colors.gray[500]}>
            {children}
          </Typography>
        </Styled.Body>

        <Styled.ButtonsWrapper>
          {promoCode && (
            <Button
              variant="border"
              color="black"
              text={`${isCopied ? `Skopiowano` : `Kopiuj kod`}`}
              size="small"
              onClick={() => copyToClipboard(promoCode)}
            />
          )}
          {microchipPromoForm && (
            <Button
              variant="border"
              color="black"
              text="Poproś o kod"
              size="small"
            />
          )}
          <Button
            variant="text"
            text="Idź do oferty"
            iconEnd="arrowRight"
            href={link}
            size="small"
          />
        </Styled.ButtonsWrapper>
      </Styled.Content>
    </Styled.Container>
  )
}

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
  link: string.isRequired,
  /**
   * The code that users can copy if they want a discount.
   */
  promoCode: string,
  /**
   * The path to an image from outside of our repository.
   */
  imageSrc: string,
  /**
   * The alignment of the card, used for all breakpoints.
   */
  microchipPromoForm: bool,
  className: string,
}

PartnerCard.defaultProps = {
  children: null,
  discount: null,
  promoCode: null,
  imageSrc: null,
  className: null,
  microchipPromoForm: null,
}

export default PartnerCard
