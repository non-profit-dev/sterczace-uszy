import { func, bool } from "prop-types"
import { useTheme } from "@emotion/react"

import Typography from "design-system/components/typography"
import Input from "design-system/components/input"
import Select from "design-system/components/select"
import Textarea from "design-system/components/textarea"
import Button from "design-system/components/button"
import Checkbox from "design-system/components/checkbox"
import { useForm } from "react-hook-form"

import * as Styled from "./Form.styled"

const Form = ({ handleSubmit, submitting }) => {
  const theme = useTheme()
  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm()

  const handleForm = (data) => {
    handleSubmit(data)
  }

  return (
    <Styled.FormContainer>
      <Typography variant="h3" as="h2" color={theme.colors.gray[600]}>
        Zostaw wiadomość
      </Typography>
      <Styled.Form onSubmit={onSubmit(handleForm)}>
        <Styled.InputContainer>
          <Input
            label="Wpisz Twoje imię"
            placeholder="Twoje imię"
            type="text"
            name="firstName"
            required
            {...register("firstName", {
              // state="error"
              required: "To pole jest wymagane",
              maxLength: {
                value: 20,
                message: "Maksymalna ilość znaków to 20",
              },
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Wpisz poprawne imię",
              },
            })}
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}
          <Input
            label="Wpisz Twój e-mail"
            placeholder="Twój adres e-mail"
            type="email"
            name="Mail"
            required
            {...register("Mail", {
              required: "To pole jest wymagane",
              // state="error"
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                message: "Wpisz poprawny adres e-mail",
              },
            })}
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
          id="contact"
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
