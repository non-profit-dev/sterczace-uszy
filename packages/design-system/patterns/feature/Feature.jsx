import { string, node, number, oneOf } from "prop-types"
import { useTheme } from "@emotion/react"
import Illustration from "design-system/components/illustration"
import Icon from "design-system/components/icon"
import Typography from "design-system/components/typography"
import Count from "design-system/components/count"
import * as Styled from "./Feature.styled"

const Feature = ({
  heading,
  children,
  icon,
  count,
  illustration,
  color,
  className,
}) => {
  const theme = useTheme()

  return (
    <Styled.Feature className={className}>
      {illustration && (
        <Styled.Illustration>
          <Illustration name={illustration} />
        </Styled.Illustration>
      )}
      {(icon || count) && (
        <Styled.Icon color={color}>
          {icon && <Icon name={icon} color={theme.colors.neutrals[100]} />}
          {count && <Count count={count} size="xsmall" color="white" />}
        </Styled.Icon>
      )}
      <Styled.Content>
        <Typography
          variant="bodyLarge"
          as="h3"
          color={theme.colors.primary[500]}
        >
          {heading}
        </Typography>
        <Typography variant="bodyTitle">{children}</Typography>
      </Styled.Content>
    </Styled.Feature>
  )
}

Feature.propTypes = {
  heading: string.isRequired,
  icon: string,
  illustration: string,
  count: number,
  color: oneOf(["primary", "gray"]),
  children: node.isRequired,
  className: string,
}

Feature.defaultProps = {
  className: null,
  color: "primary",
  icon: null,
  illustration: null,
  count: null,
}

export default Feature
