/* eslint-disable react/no-danger */
import Container from "design-system/components/container"
import Typography from "design-system/components/typography"
import Illustration from "design-system/components/illustration"
import Title from "design-system/components/title"
import TextBanner from "design-system/patterns/textBanner"
import Panel from "design-system/patterns/panel"
import Feature from "design-system/patterns/feature"

import globalData from "shared/data"

import * as Styled from "./VirtualAdoption.styled"

const data = [
  {
    heading: "Jak adoptować wirtualnie?",
    icon: "money",
    description:
      "Wystarczy, że ustawisz zlecenie stałe w swoim banku, aby wspierać utrzymanie konkretnego zwierzaka.  Koniecznie z dopiskiem: “darowizna i imię zwierzaka”.",
  },
  {
    heading: "Co to konkretnie daje?",
    icon: "bowl",
    description:
      "Wpłacając, pomagasz nam zebrać środki na utrzymanie, leczenie, transport i jedzenie dla niego, sprawiając, że pies ma pełną miskę. Dodatkowo, możemy go uczyć nowych zachowań pod okiem behawiorysty. ",
  },
  {
    heading: "Co się dzieje, gdy pies zostanie adoptowany?",
    icon: "responsibility",
    description:
      "Adopcja rzeczywista ma zawsze pierwszeństwo, ale zostaniesz o tym natychmiast poinformowany. Zaproponujemy Ci innego pupila, który jest w potrzebie, abyś mógł kontynuować adopcję.",
  },
  {
    heading: "Czy otrzymuje coś w zamian?",
    icon: "love",
    description:
      "Oczywiście! Otrzymasz swój <strong>CERTYFIKAT Wirtualnego Opiekuna</strong>! Dodatkowo, otrzymujesz na bieżąco zdjęcia adoptowanego zwierzaka, informacje dotyczące jego stanu zdrowia, kosztów utrzymania oraz filmiki.",
  },
]

const VirtualAdoption = () => (
  <Styled.Section>
    <Container as="section">
      <Styled.Content>
        <TextBanner
          heading="Nie możesz adoptować? Zostań wirtualnym opiekunem!"
          subtitle="Adopcja wirtualna"
          layout="left"
          tabletLayout="left"
          mobileLayout="left"
          size="medium"
        >
          <Typography variant="bodyTitle">
            Adopcja zwierzaka musi być przemyślaną decyzją. W końcu zyskujemy
            nowego członka rodziny na całe życie. Wiemy, że niektórzy nie mogą
            sobie na to pozwolić ze względu na uczulenie na sierść, posiadanie
            czworonogów czy częste nieobecności w domu. Specjalnie dla takich
            osób fundacja zorganizowała Wirtualną Adopcję!
          </Typography>
        </TextBanner>
      </Styled.Content>

      <Styled.List>
        {data.map(({ description, heading, icon }, index) =>
          index !== 0 ? (
            <Styled.FeatureItem key={heading}>
              <Feature heading={heading} icon={icon}>
                <span dangerouslySetInnerHTML={{ __html: description }} />
              </Feature>
            </Styled.FeatureItem>
          ) : (
            <div key={heading}>
              <Styled.FeatureItem>
                <Feature heading={heading} icon={icon}>
                  <span dangerouslySetInnerHTML={{ __html: description }} />
                </Feature>
              </Styled.FeatureItem>
              <Styled.AdditionalNote variant="bodyTitle">
                Swoje zwierzę wybrać możesz również poprzez stronę{" "}
                <a
                  href={globalData.fundraising.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  www.ratujemyzwierzaki.pl/sterczaceuszy
                </a>
              </Styled.AdditionalNote>
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
                      Fundacja {globalData.organizationName} <br />{" "}
                      {globalData.address.street}
                      , <br /> {globalData.address.zipCode} <br /> NIP{" "}
                      {globalData.nip} <br />
                      Tytuł przelewu: Wsparcie dla Fundacji
                    </Typography>
                  </Panel>
                </Styled.PanelWrapper>
                <Illustration name="pawHeart" />
              </Styled.Wrapper>
            </div>
          )
        )}
      </Styled.List>
    </Container>
  </Styled.Section>
)

export default VirtualAdoption
