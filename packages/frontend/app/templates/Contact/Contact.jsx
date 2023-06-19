import { useForm } from "@formspree/react"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"

import Container from "design-system/components/container/Container"

import Banner from "design-system/components/banner"

import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"

import Page from "../Page"
import Form from "./components/Form"
import ContactInfo from "./components/ContactInfo"
import Response from "./components/Response"

import * as Styled from "./Contact.styled"

const Contact = () => {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM_ID, {
    data: {
      "g-recaptcha-response": executeRecaptcha,
      subject: "Kontakt - nowa wiadomość",
    },
  })

  return (
    <Page title="Kontakt">
      <Styled.Banner>
        <Banner>
          Nasi podopieczni czekają na Twoje wsparcie! Chcesz nam pomóc? Zajrzyj{" "}
          <a href="/wsparcie">tutaj</a>
        </Banner>
      </Styled.Banner>
      <Navigation />
      <Container as="main" size="medium">
        <Styled.ContactContainer>
          <ContactInfo />
          {state.succeeded ? (
            <Response />
          ) : (
            <Form handleSubmit={handleSubmit} submitting={state.submitting} />
          )}
        </Styled.ContactContainer>
      </Container>
      <Footer />
    </Page>
  )
}
export default Contact
