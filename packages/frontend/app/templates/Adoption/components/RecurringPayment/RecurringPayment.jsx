import Container from "design-system/components/container"
import Typography from "design-system/components/typography"
import Illustration from "design-system/components/illustration"
import Title from "design-system/components/title"
import TextBanner from "design-system/patterns/textBanner"
import Panel from "design-system/patterns/panel"

import globalData from "shared/data"

import * as Styled from "./RecurringPayment.styled"

const RecurringPayment = () => (
  <Styled.Section>
    <Container as="section">
      <Styled.Header>
        <TextBanner
          heading="Ustaw zlecenie stałe"
          subtitle="Pomagaj wirtualnie"
          layout="left"
          tabletLayout="left"
          mobileLayout="left"
          size="medium"
        >
          <Typography variant="bodyTitle">
            Tu znajdziesz wszystkie niezbędne dane, aby szybko i sprawnie
            ustawić stały przelew w swoim banku. To trwa dosłownie parę minut.
            Koniecznie z dopiskiem: “darowizna i imię pupila”.
          </Typography>
        </TextBanner>
      </Styled.Header>

      <Styled.Content>
        <Styled.Wrapper>
          <Styled.PanelWrapper>
            <Panel
              title={
                <Title
                  text="Przelew jednorazowy lub zlecenie stałe"
                  iconStart="money"
                  variant="h5"
                  line={false}
                />
              }
              accountNumber={globalData.accountNumber}
            >
              <Typography variant="bodyTitle">
                Fundacja {globalData.organizationName} <br /> ul.{" "}
                {globalData.address.street}
                , <br /> {globalData.address.zipCode} <br /> NIP
                {globalData.nip} <br />
                Tytuł przelewu: Wsparcie dla Fundacji
              </Typography>
            </Panel>
          </Styled.PanelWrapper>
          <Illustration name="heartLine" />
        </Styled.Wrapper>

        <Styled.AdditionalNote>
          <Typography variant="bodyTitle">
            Swoje zwierzę wybrać możesz również poprzez stronę{" "}
            <a
              href={globalData.fundraising.link}
              target="_blank"
              rel="noreferrer"
            >
              {globalData.fundraising.text}
            </a>
          </Typography>

          <Typography variant="bodyTitle">
            Jeśli ustawiłeś zlecenie stałe prosimy o zostawienie do siebie
            kontaktu email. Poniżej znajdziesz miejsce, gdzie szybko możesz
            wpisać te dane. Pozwoli to nam wysłać Ci{" "}
            <strong>Certyfikat Wirtualnego Opiekuna</strong> i wieści o Twoim
            nowym pupilu.
          </Typography>
        </Styled.AdditionalNote>
      </Styled.Content>
    </Container>
  </Styled.Section>
)

export default RecurringPayment
