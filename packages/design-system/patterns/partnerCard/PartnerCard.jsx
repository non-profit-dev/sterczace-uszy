import { useTheme } from "@emotion/react"
import { string, node } from "prop-types"

import Typography from "design-system/components/typography"
import Button from "design-system/components/button"
import Count from "design-system/components/count"

import useCopyToClipboard from "design-system/helpers/useCopyToClipboard"

import * as Styled from "./PartnerCard.styled"

const PartnerCard = ({
  title,
  discount,
  children,
  link,
  promoCode,
  imageSrc,
  className,
}) => {
  const [isCopied, copyToClipboard] = useCopyToClipboard()
  const theme = useTheme()

  return (
    <Styled.Container className={className}>
      <Styled.Header>
        <Styled.Image src={imageSrc} alt="" />
        <Count count={discount} size="xsmall" />
      </Styled.Header>

      <Styled.Line />

      <Styled.Content>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="bodyTitle" color={theme.colors.gray[500]}>
          {children}
        </Typography>
        <Styled.ButtonsWrapper>
          {promoCode && (
            <Button
              variant="border"
              color="black"
              text={`${isCopied ? `Skopiowano` : `Kopiuj kod ${discount}`}`}
              onClick={() => copyToClipboard(promoCode)}
            />
          )}
          <Button
            variant="text"
            text="Idź do oferty"
            iconEnd="arrowRight"
            href={link}
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
  className: string,
}

PartnerCard.defaultProps = {
  children: null,
  discount: null,
  promoCode: null,
  imageSrc: null,
  className: null,
}

export default PartnerCard
