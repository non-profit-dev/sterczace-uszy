import { useState } from "react"
import { useForm } from "@formspree/react"
import { useForm as useFormReactHook } from "react-hook-form"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import { shape, arrayOf, string } from "prop-types"
import Button from "design-system/components/button"
import Typography from "design-system/components/typography"
import Input from "design-system/components/input"
import Checkbox from "design-system/components/checkbox"
import Select from "design-system/components/select"
import Illustration from "design-system/components/illustration/Illustration"

import { emailRegex } from "shared/regex"

import * as Styled from "./PaymentConfirmationForm.styled"

const PaymentConfirmationForm = ({ data }) => {
  const [activeForm, setActiveForm] = useState(true)
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_CONFIRM_VIRTUAL_ADOPTION_FORM_ID,
    {
      data: {
        "g-recaptcha-response": executeRecaptcha,
        subject: "Potwierdzenie adopcji wirtualnej",
      },
    }
  )

  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors, dirtyFields },
  } = useFormReactHook({
    mode: "onChange",
  })

  const handleForm = (formData) => {
    handleSubmit({
      Imię: formData.firstName,
      Nazwisko: formData.lastName,
      Mail: formData.email,
      "Imię pupila": formData.petName,
    })
    setActiveForm(false)
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

  const petNames = data.map((dog) => dog.name)

  return state.succeeded && !activeForm ? (
    <Styled.ConfirmationContainer>
      <Styled.ConfirmationWrapper>
        <Illustration name="help" />
        <Styled.ConfirmationBanner
          size="small"
          heading="Dziękujemy za Twoje dobre serce!"
          mobileLayout="left"
          tabletLayout="left"
        >
          <Typography variant="bodySmall">
            Dostaliśmy Twoją prośbę o potwierdzenie adopcji wirtualnej, w ciągu
            kilku dni otrzymasz od nas wiadomość o Twoim wirtualnym podopiecznym
            na adres mailowy podany w formularzu.
          </Typography>
        </Styled.ConfirmationBanner>
      </Styled.ConfirmationWrapper>
    </Styled.ConfirmationContainer>
  ) : (
    <Styled.Container>
      <Styled.ConfirmationSendBanner
        heading="Wyślij potwierdzenie"
        subtitle="Poinformuj nas o swoim dobrym uczynku"
        mobileLayout="left"
        tabletLayout="left"
      >
        Mamy pełno pracy przy naszych podopiecznych, dlatego niezbędne jest
        potwierdzenie Twojej wirtualnej adopcji, abyśmy mogły niezwłocznie
        zacząć Cię informować o Twoim nowym pupilu.
      </Styled.ConfirmationSendBanner>
      <Styled.FormWrapper>
        <Styled.Form onSubmit={onSubmit(handleForm)}>
          <Typography variant="h3">Potwierdzenie adopcji wirtualnej</Typography>
          <Typography variant="bodyTitle">
            Wyślij informację, żebyśmy mogły przesyłać Ci wiadomości o Twoim
            wirtualnym przyjacielu i znaleźć Twoją wpłatę.
          </Typography>
          <Styled.InputContainer>
            <Input
              label="Twoje imię"
              placeholder="Twoje imię"
              type="text"
              state={determineInputState("firstName")}
              {...register("firstName", {
                required: "To pole jest wymagane",
                minLength: {
                  value: 2,
                  message: "Minimalna ilość znaków to 2",
                },
                maxLength: {
                  value: 30,
                  message: "Maksymalna ilość znaków to 30",
                },
              })}
              message={errors.firstName ? errors.firstName.message : ""}
            />
            <Input
              label="Twoje nazwisko"
              placeholder="Twoje nazwisko"
              type="text"
              state={determineInputState("lastName")}
              {...register("lastName", {
                required: "To pole jest wymagane",
                minLength: {
                  value: 2,
                  message: "Minimalna ilość znaków to 2",
                },
                maxLength: {
                  value: 30,
                  message: "Maksymalna ilość znaków to 30",
                },
              })}
              message={errors.lastName ? errors.lastName.message : ""}
            />
          </Styled.InputContainer>
          <Input
            label="Twój e-mail"
            placeholder="Twój e-mail"
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
          <Select
            label="Imię pupila"
            name="Imię pupila"
            options={petNames}
            defaultValue={petNames[0]}
            required
            {...register("petName")}
          />
          <Styled.CheckboxContainer>
            <Checkbox
              id="virtual-adoption"
              label={
                <>
                  Wysyłając prośbę o potwierdzenie adopcji wirtualnej wyrażasz
                  zgodę na przetwarzanie Twoich danych osobowych w celu kontaktu
                  w sprawach związanych z pupilem. Przeczytaj{" "}
                  <a
                    href="/polityka-prywatnosci"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Politykę Prywatności
                  </a>
                  , aby poznać szczegóły.
                </>
              }
              required
            />
          </Styled.CheckboxContainer>
          <Styled.ButtonContainer>
            <Button
              text={state.submitting ? "Wysyłanie" : "Wyślij potwierdzenie"}
              disabled={state.submitting}
            />
          </Styled.ButtonContainer>
        </Styled.Form>
      </Styled.FormWrapper>
    </Styled.Container>
  )
}

PaymentConfirmationForm.propTypes = {
  data: arrayOf(
    shape({
      name: string,
    })
  ).isRequired,
}

export default PaymentConfirmationForm
