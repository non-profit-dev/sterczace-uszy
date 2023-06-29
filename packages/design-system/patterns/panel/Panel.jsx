import { useTheme } from "@emotion/react"
import { string, node } from "prop-types"
import Typography from "design-system/components/typography"
import IconButton from "design-system/components/iconButton"
import useCopyToClipboard from "design-system/helpers/useCopyToClipboard"

import * as Styled from "./Panel.styled"

const Panel = ({ className, title, children, accountNumber }) => {
  const [isCopied, copyToClipboard] = useCopyToClipboard()
  const theme = useTheme()

  return (
    <Styled.PanelContent className={className}>
      {title}

      <Styled.Content>{children}</Styled.Content>

      {accountNumber && (
        <Styled.AccountNumber variant="h6" as="p">
          {accountNumber}

          {isCopied ? (
            <Typography
              variant="bodyTiny"
              color={theme.colors.primary[500]}
              as="div"
            >
              Skopiowano
            </Typography>
          ) : (
            <IconButton
              name="copy"
              onClick={() => copyToClipboard(accountNumber)}
              ariaLabel="Skopiuj numer konta"
              title="Skopiuj numer konta"
            />
          )}
        </Styled.AccountNumber>
      )}
    </Styled.PanelContent>
  )
}

Panel.propTypes = {
  title: node.isRequired,
  className: string,
  children: node,
  accountNumber: string,
}

Panel.defaultProps = {
  className: null,
  children: null,
  accountNumber: null,
}

export default Panel
