import Typography from "design-system/components/typography"
import theme from "design-system/tokens/theme"
import * as Styled from "./Document.styled"

function Documents() {
  return (
    <Styled.HeaderContainer>
      <Typography color={theme.colors.grey[600]} variant="h2">
        Dokumenty do pobrania
      </Typography>
      <Typography color={theme.colors.grey[500]} variant="bodyTitle">
        Chcesz zaopiekować się naszym zwierzakiem? Tutaj znajdziesz niezbędne
        dokumenty, abyśmy mogły powierzyć go w Twoje ręce.
      </Typography>
    </Styled.HeaderContainer>
  )
}

export default Documents
