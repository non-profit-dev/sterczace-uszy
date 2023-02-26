import Container from "design-system/components/container/Container"
import * as Styled from "./Contact.styled"
import Page from "../Page"
// import Form from "./components/Form"
import ContactInfo from "./components/ContactInfo"
import Response from "./components/Response"

const Contact = () => (
  <Page title="Kontakt">
    <Container size="medium">
      <Styled.ContactContainer>
        <ContactInfo />
        {/* <Form /> */}
        <Response />
      </Styled.ContactContainer>
    </Container>
  </Page>
)
export default Contact
