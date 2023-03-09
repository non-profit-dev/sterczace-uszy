import { string } from "prop-types"
import { useTheme } from "@emotion/react"

import Icon from "design-system/components/icon"
import Typography from "design-system/components/typography"

import * as Styled from "./Feature.styled"

const TextBanner = ({ heading, description, icon, className }) => {
  const theme = useTheme()

  return (
    <Styled.Feature className={className}>
      <Styled.Icon>
        <Icon name={icon} color={theme.colors.neutrals[100]} />
      </Styled.Icon>

      <Styled.Content>
        <Typography variant="bodyLarge" color={theme.colors.primary[500]}>
          {heading}
        </Typography>
        <Typography variant="bodyTitle">{description}</Typography>
      </Styled.Content>
    </Styled.Feature>
  )
}

TextBanner.propTypes = {
  heading: string.isRequired,
  icon: string.isRequired,
  description: string,
  className: string,
}

TextBanner.defaultProps = {
  description: null,
  className: null,
}

export default TextBanner
