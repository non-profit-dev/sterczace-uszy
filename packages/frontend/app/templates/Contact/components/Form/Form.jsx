import { func, bool } from "prop-types"
import { useTheme } from "@emotion/react"
import React from "react"
import { useForm } from "react-hook-form"

import Typography from "design-system/components/typography"
import Input from "design-system/components/input"
import Select from "design-system/components/select"
import Textarea from "design-system/components/textarea"
import Button from "design-system/components/button"
import Checkbox from "design-system/components/checkbox"

import { emailRegex } from "shared/regex"

import * as Styled from "./Form.styled"

const Form = ({ handleSubmit, submitting }) => {
  const theme = useTheme()
  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: "onChange",
  })

  const handleForm = (data) => {
    handleSubmit({
      Imię: data.firstName,
      Mail: data.email,
      Temat: data.subject === "Wybierz temat wiadomości" ? "-" : data.subject,
      Wiadomość: data.message,
    })
  }

  const determineInputState = (fieldName) => {
    if (dirtyFields[fieldName] && !errors[fieldName]) {
      return "valid"
    }
    if (errors[fieldName]) {
      return "error"
    }
    return null
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
            state={determineInputState("firstName")}
            {...register("firstName", {
              required: "To pole jest wymagane",
              maxLength: {
                value: 20,
                message: "Maksymalna ilość znaków to 20",
              },
            })}
            message={errors.firstName ? errors.firstName.message : ""}
          />
          <Input
            label="Wpisz Twój e-mail"
            placeholder="Twój adres e-mail"
            type="email"
            state={determineInputState("email")}
            {...register("email", {
              required: "To pole jest wymagane",
              pattern: {
                value: emailRegex,
                message: "Wpisz poprawny adres e-mail",
              },
            })}
            message={errors.email ? errors.email.message : ""}
          />
        </Styled.InputContainer>
        <Select
          label="Temat"
          options={[
            "Wybierz temat wiadomości",
            "Adopcja",
            "Dom tymczasowy",
            "Współpraca",
            "Wpłaty",
            "Dary rzeczowe",
            "Inne",
          ]}
          defaultValue="Wybierz temat wiadomości"
          {...register("subject")}
        />
        <Textarea
          label="Twoja wiadomość"
          placeholder="Napisz dla nas wiadomość"
          error={!!errors.message}
          {...register("message", {
            required: "To pole jest wymagane",
            minLength: {
              value: 30,
              message: "Wiadomość musi zawierać co najmniej 30 znaków",
            },
            validate: (value) => {
              if (value.trim() === "") {
                return "Wiadomość nie może zawierać samych spacji"
              }
              return true
            },
          })}
          message={errors.message ? errors.message.message : ""}
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
