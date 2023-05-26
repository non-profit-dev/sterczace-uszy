import { useState } from "react"
import { useForm } from "@formspree/react"
import { shape, arrayOf, string } from "prop-types"
import Button from "design-system/components/button"
import Typography from "design-system/components/typography"
import Input from "design-system/components/input"
import Select from "design-system/components/select"
import Illustration from "design-system/components/illustration/Illustration"
import TextBanner from "design-system/patterns/textBanner"
import Container from "design-system/components/container"
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

  const dogNames = data.map((dog) => dog.name)

  return state.succeeded && !activeForm ? (
    <>
      <Illustration name="help" />
      <TextBanner size="small" heading="Dziękujemy za Twoje dobre serce!">
        <Typography variant="bodySmall">
          Dostaliśmy Twoją prośbę o potwierdzenie adopcji wirtualnej, w ciągu
          kilku dni otrzymasz od nas wiadomość o Twoim wirtualnym podopiecznym
          na adres mailowy podany w formularzu.
        </Typography>
      </TextBanner>
    </>
  ) : (
    <Container>
      <TextBanner
        size="small"
        heading="Poinformuj nas o dobrym uczynku"
        subtitle="Wyślij potwierdzenie"
      >
        Mamy pełno pracy przy naszych podopiecznych, dlatego niezbędne jest
        potwierdzenie Twojej wirtualnej adopcji, abyśmy mogły niezwłocznie
        zacząć Cię informować o Twoim nowym pupilu.
      </TextBanner>
      <Styled.FormWrapper>
        <Styled.Form onSubmit={(e) => handleForm(e)}>
          <Typography variant="h3">Potwierdzenie adopcji wirtualnej</Typography>
          <Typography variant="bodyTitle">
            Wyślij informację, żebyśmy mogły przesyłać Ci wiadomości o Twoim
            wirtualnym przyjacielu i znalezć Twoją wpłatę.
          </Typography>
          <Styled.InputContainer>
            <Input
              label="Wpisz Twoje imię"
              placeholder="Twoje imię"
              type="text"
              name="Imię"
              required
            />
            <Input
              label="Wpisz Twoje nazwisko"
              placeholder="Twoje nazwisko"
              type="text"
              name="Imię"
              required
            />
          </Styled.InputContainer>
          <Input
            label="Wpisz Twój e-mail"
            placeholder="Twój e-mail"
            type="email"
            name="Mail"
            required
          />
          <Select
            label="Imię pupila"
            name="test"
            options={dogNames}
            defaultValue={dogNames[0]}
            required
          />
          <Styled.ButtonContainer>
            <Button
              text={state.submitting ? "Wysyłanie" : "Wyślij potwierdzenie"}
              disabled={state.submitting}
            />
          </Styled.ButtonContainer>
        </Styled.Form>
      </Styled.FormWrapper>
    </Container>
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
