import { func, bool } from "prop-types"
import { useTheme } from "@emotion/react"

import Typography from "design-system/components/typography"
import Input from "design-system/components/input"
import Select from "design-system/components/select"
import Textarea from "design-system/components/textarea"
import Button from "design-system/components/button"
import Checkbox from "design-system/components/checkbox"

import * as Styled from "./Form.styled"

const Form = ({ handleSubmit, submitting }) => {
  const theme = useTheme()

  return (
    <Styled.FormContainer>
      <Typography variant="h3" as="h2" color={theme.colors.gray[600]}>
        Zostaw wiadomość
      </Typography>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.InputContainer>
          <Input
            label="Wpisz Twoje imię"
            placeholder="Twoje imię"
            type="text"
            name="Imię"
            required
          />
          <Input
            label="Wpisz Twój e-mail"
            placeholder="Twój adres e-mail"
            type="email"
            name="Mail"
            required
          />
        </Styled.InputContainer>
        <Select
          label="Temat"
          name="Temat"
          options={[
            "Adopcja",
            "Dom tymczasowy",
            "Współpraca",
            "Wpłaty",
            "Dary rzeczowe",
            "Inne",
          ]}
          defaultValue="Wybierz temat wiadomości"
          required
        />
        <Textarea
          label="Twoja wiadomość"
          placeholder="Napisz dla nas wiadomość"
          required
          name="Wiadomość"
          minLength={30}
        />
        <Checkbox
          id="virtual-adoption"
          label={
            <>
              Wysyłając formularz kontaktowy wyrażasz zgodę na przetwarzanie
              Twoich danych osobowych w celu obsługi Twojego zapytania.
              Przeczytaj{" "}
              <a href="/polityka-prywatnosci" target="_blank" rel="noreferrer">
                Politykę Prywatności
              </a>
              , aby poznać szczegóły.
            </>
          }
          required
        />
        <Styled.ButtonContainer>
          <Button
            text={submitting ? "Wysyłanie" : "Wyślij"}
            disabled={submitting}
          />
        </Styled.ButtonContainer>
      </Styled.Form>
    </Styled.FormContainer>
  )
}

Form.propTypes = {
  handleSubmit: func.isRequired,
  submitting: bool.isRequired,
}

export default Form
