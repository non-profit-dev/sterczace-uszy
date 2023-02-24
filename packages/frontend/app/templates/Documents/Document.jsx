import Typography from "design-system/components/typography"
import { useTheme } from "@emotion/react"
import Container from "design-system/components/container/Container"
import * as Styled from "./Document.styled"
import DocumentsTemplate from "./components/DocumentsTemplate"

import Page from "../Page"

const Documents = () => {
  const theme = useTheme()
  return (
    <Page title="Dokumenty do pobrania"">
      <Container size="medium">
        <Styled.DocumentContainer>
          <Styled.HeaderContainer>
            <Typography color={theme.colors.grey[600]} variant="h2">
              Dokumenty do pobrania
            </Typography>
            <Typography color={theme.colors.grey[500]} variant="bodyTitle">
              Chcesz zaopiekować się naszym zwierzakiem? Tutaj znajdziesz
              niezbędne dokumenty, abyśmy mogły powierzyć go w Twoje ręce.
            </Typography>
          </Styled.HeaderContainer>
          <DocumentsTemplate />
          <Styled.DocumentsInfo>
            <Typography color={theme.colors.grey[600]} variant="bodyTitle">
              Ankietę wyślij na adres{" "}
              <a href="mailto:fundacjasterczaceuszy@gmail.com">
                fundacjasterczaceuszy@gmail.com
              </a>
              <br />
              Jak tylko ją przeanalizujemy skontaktujemy sie z Tobą.
            </Typography>
          </Styled.DocumentsInfo>
        </Styled.DocumentContainer>
      </Container>
    </Page>
  )
}
export default Documents
