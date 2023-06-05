import Container from "design-system/components/container"
import Typography from "design-system/components/typography"
import Title from "design-system/components/title"
import TextBanner from "design-system/patterns/textBanner"
import Panel from "design-system/patterns/panel"
import Feature from "design-system/patterns/feature"

import globalData from "shared/data"

import * as Styled from "./VirtualAdoption.styled"

const data = [
  {
    heading: "Jak adoptować wirtualnie?",
    icon: "dog",
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
      "Oczywiście! Otrzymasz swój CERTYFIKAT Wirtualnego Opiekuna! Dodatkowo, otrzymujesz na bieżąco zdjęcia adoptowanego zwierzaka, informacje dotyczące jego stanu zdrowia, kosztów utrzymania oraz filmiki.",
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

        <Styled.List>
          {data.map(({ description, heading, icon }, index) =>
            index !== 0 ? (
              <Feature
                key={heading}
                heading={heading}
                description={description}
                icon={icon}
              />
            ) : (
              <div key={heading}>
                <Feature
                  key={heading}
                  heading={heading}
                  description={description}
                  icon={icon}
                />
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
              </div>
            )
          )}
        </Styled.List>
      </Styled.Content>
    </Container>
  </Styled.Section>
)

export default VirtualAdoption
