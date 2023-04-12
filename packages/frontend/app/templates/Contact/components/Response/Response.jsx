import { useTheme } from "@emotion/react"
import Typography from "design-system/components/typography"
import * as Styled from "./Response.styled"

const Response = () => {
  const theme = useTheme()
  return (
    <Styled.ResponseContainer>
      <Typography variant="h3" as="h2">
        Wiadomość została wysłana.
      </Typography>
      <Typography variant="bodySmall" color={theme.colors.gray[500]}>
        Odpowiemy tak szybko, jak to tylko możliwe.
      </Typography>
    </Styled.ResponseContainer>
  )
}

export default Response
