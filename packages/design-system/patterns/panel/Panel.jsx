import { string, node } from "prop-types"
import IconButton from "design-system/components/iconButton"
import Typography from "design-system/components/typography"
import { useState } from "react"
import * as Styled from "./Panel.styled"

const Panel = ({ className, title, accountNumber, children }) => {
  const [isCopied, setIsCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber)
    setIsCopied((prevIsCopied) => !prevIsCopied)
  }
  return (
    <Styled.PanelContent className={className}>
      {title}
      <Styled.Content>{children}</Styled.Content>
      <Typography variant="h6">
        {accountNumber}
        {accountNumber && (
          <Styled.IconButton>
            <IconButton name="copy" size="medium" as="a" onClick={handleCopy} />
          </Styled.IconButton>
        )}
        {isCopied && <Typography variant="bodyTiny">Skopiowano</Typography>}
      </Typography>
    </Styled.PanelContent>
  )
}

Panel.propTypes = {
  title: node.isRequired,
  accountNumber: string,
  className: string,
  children: node,
}

Panel.defaultProps = {
  className: null,
  accountNumber: null,
  children: null,
}

export default Panel
