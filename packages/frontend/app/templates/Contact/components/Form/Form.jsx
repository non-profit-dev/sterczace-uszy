import { useTheme } from "@emotion/react"
import Typography from "design-system/components/typography"
import Input from "design-system/components/input"
import Select from "design-system/components/select"
import Textarea from "design-system/components/textarea"
import Button from "design-system/components/button"
import * as Styled from "./Form.styled"

const Form = () => {
  const theme = useTheme()
  return (
    <Styled.FormContainer>
      <Typography variant="h3" color={theme.colors.grey[600]}>
        Zostaw wiadomość
      </Typography>
      <Styled.Form>
        <Styled.InputContainer>
          <Input
            label="Wpisz Twoje imię"
            placeholder="Twoje imię"
            type="text"
            required
          />
          <Input
            label="Wpisz Twój e-mail"
            placeholder="kate.gregorczyk@gmail.com"
            type="text"
            required
          />
        </Styled.InputContainer>
        <Select
          label="Temat"
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
          minlength="50"
        />
        <Styled.ButtonContainer>
          <Button text="Wyślij" />
        </Styled.ButtonContainer>
      </Styled.Form>
    </Styled.FormContainer>
  )
}

export default Form
