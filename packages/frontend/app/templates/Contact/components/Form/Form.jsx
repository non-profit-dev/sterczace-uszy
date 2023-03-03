import { func, bool } from "prop-types"
import { useTheme } from "@emotion/react"

import Typography from "design-system/components/typography"
import Input from "design-system/components/input"
import Select from "design-system/components/select"
import Textarea from "design-system/components/textarea"
import Button from "design-system/components/button"

import * as Styled from "./Form.styled"

const Form = ({ handleSubmit, submitting }) => {
  const theme = useTheme()

  return (
    <Styled.FormContainer>
      <Typography variant="h3" color={theme.colors.grey[600]}>
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
            placeholder="kate.gregorczyk@gmail.com"
            type="email"
            name="Mail"
            required
          />
        </Styled.InputContainer>
        <Select
          label="Temat"
          name="Temat"
          options={[
            "adopcja",
            "dom tymczasowy",
            "współpraca",
            "wpłaty",
            "dary rzeczowe",
            "inne",
          ]}
          defaultValue="Wybierz temat wiadomości"
          required
        />
        <Textarea
          label="Twoja wiadomość"
          placeholder="Napisz dla nas wiadomość"
          required
          name="Wiadomość"
          minLength={50}
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