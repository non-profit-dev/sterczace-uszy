import { useTheme } from "@emotion/react"
import { string, oneOf, oneOfType, node, number } from "prop-types"
import Icon from "design-system/components/icon"

import * as Styled from "./ListItem.styled"

const ListItem = ({
  children,
  variant,
  iconName,
  iconSize,
  gap,
  className,
}) => {
  const theme = useTheme()
  return (
    <Styled.ListItem variant={variant} className={className}>
      {iconName && (
        <Styled.ListItemIcon>
          <Icon
            name={iconName}
            size={iconSize}
            color={
              variant === "primary-gray"
                ? theme.colors.primary[500]
                : theme.colors.gray[600]
            }
          />
        </Styled.ListItemIcon>
      )}
      <Styled.ChildContainer variant={variant} gap={gap}>
        {children}
      </Styled.ChildContainer>
    </Styled.ListItem>
  )
}

ListItem.propTypes = {
  /**
   * Element or text that should be displayed inside the list item.
   */
  children: oneOfType([node, string]).isRequired,
  variant: oneOf(["primary", "gray", "primary-gray"]),
  /**
   * If provided, it renders an icon element before the text based on the icon name.
   */
  iconName: string,
  iconSize: oneOf(["small", "medium"]),
  gap: number,
  className: string,
}
ListItem.defaultProps = {
  variant: "primary",
  iconName: null,
  iconSize: "medium",
  gap: 8,
  className: null,
}

export default ListItem
