import { useState } from "react"
import { useForm } from "@formspree/react"
import { shape, arrayOf, string } from "prop-types"
import Button from "design-system/components/button"
import Typography from "design-system/components/typography"
import Input from "design-system/components/input"
import Checkbox from "design-system/components/checkbox"
import Select from "design-system/components/select"
import Illustration from "design-system/components/illustration/Illustration"

import * as Styled from "./PaymentConfirmationForm.styled"

const PaymentConfirmationForm = ({ data }) => {
  const [activeForm, setActiveForm] = useState(true)
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_CONFIRM_VIRTUAL_ADOPTION_FORM_ID,
    {
      data: {
        subject: "Potwierdzenie adopcji wirtualnej",
      },
    }
  )

  const handleForm = (e) => {
    e.preventDefault()
    setActiveForm(false)
    handleSubmit(e)
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
        <Styled.Form onSubmit={(e) => handleForm(e)}>
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
              name="Imię"
              required
            />
            <Input
              label="Twoje nazwisko"
              placeholder="Twoje nazwisko"
              type="text"
              name="Nazwisko"
              required
            />
          </Styled.InputContainer>
          <Input
            label="Twój e-mail"
            placeholder="Twój e-mail"
            type="email"
            name="Mail"
            required
          />
          <Select
            label="Imię pupila"
            name="Imię pupila"
            options={petNames}
            defaultValue={petNames[0]}
            required
          />
          <Styled.ButtonContainer>
            <Button
              text={state.submitting ? "Wysyłanie" : "Wyślij potwierdzenie"}
              disabled={state.submitting}
            />
          </Styled.ButtonContainer>
          <Checkbox
            id="virtual-adoption"
            label={
              <>
                Wysyłając formularz kontaktowy wyrażasz zgodę na przetwarzanie
                Twoich danych osobowych w celu obsługi Twojego zapytania.
                Przeczytaj{" "}
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
          />
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
