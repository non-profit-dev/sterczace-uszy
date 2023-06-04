import { useTheme } from "@emotion/react"
import { string, node } from "prop-types"
import IconButton from "design-system/components/iconButton"
import Typography from "design-system/components/typography"
import useCopyToClipboard from "design-system/helpers/useCopyToClipboard"
import globalData from "shared/data"
import * as Styled from "./Panel.styled"

const Panel = ({ className, title, children }) => {
  const [isCopied, copyToClipboard] = useCopyToClipboard()
  const theme = useTheme()
  return (
    <Styled.PanelContent className={className}>
      {title}
      <Styled.Content>{children}</Styled.Content>
      <Typography variant="h5" as="p">
        {globalData.accountNumber}
        {isCopied ? (
          <Styled.IconButton
            variant="bodyTiny"
            color={theme.colors.primary[500]}
          >
            Skopiowano
          </Styled.IconButton>
        ) : (
          <Styled.CopyButton
            onClick={() => copyToClipboard(globalData.accountNumber)}
          >
            <IconButton name="copy" />
          </Styled.CopyButton>
        )}
      </Typography>
    </Styled.PanelContent>
  )
}

Panel.propTypes = {
  title: node.isRequired,
  className: string,
  children: node,
}

Panel.defaultProps = {
  className: null,
  children: null,
}

export default Panel
