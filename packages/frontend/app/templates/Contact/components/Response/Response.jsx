import { useTheme } from "@emotion/react"
import Typography from "design-system/components/typography"
import Button from "design-system/components/button"
import * as Styled from "./Response.styled"

const Response = () => {
  const theme = useTheme()
  return (
    <Styled.ResponseContainer>
      <Typography variant="h3" as="h2" color={theme.colors.gray[600]}>
        Wiadomość została wysłana.
      </Typography>
      <Typography variant="bodySmall" color={theme.colors.gray[500]}>
        Odpowiemy tak szybko, jak to tylko możliwe.
      </Typography>
      <Button text="Strona w budowie" variant="border" href="/" />
    </Styled.ResponseContainer>
  )
}

export default Response
