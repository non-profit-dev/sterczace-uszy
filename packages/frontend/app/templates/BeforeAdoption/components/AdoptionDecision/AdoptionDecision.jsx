import { useTheme } from "@emotion/react"
import Accordion from "design-system/components/accordion"
import Icon from "design-system/components/icon"
import Button from "design-system/components/button"
import Typography from "design-system/components/typography"
import List from "design-system/components/list"
import ListItem from "design-system/components/listItem"
import globalData from "shared/data"
import * as Styled from "./AdoptionDecision.styled"

const AdoptionDecision = () => {
  const theme = useTheme()

  const accordions = [
    {
      heading: "Zastanów się nad adopcją wspólnie z każdym członkiem rodziny",
      text: "Adopcja psa wpływa na życie całej rodziny, dlatego powinna być omówiona wspólnie i ostatecznie zostać podjęta przez osobę dorosłą. Podczas takiej rozmowy ustalcie:",
      listItems: [
        "Jakie jest nasze doświadczenie związane z posiadaniem zwierząt w domu? Czy jesteśmy w stanie zapewnić mu potrzebną opiekę, trening i wychowanie?",
        "Kto będzie głównym opiekunem psa? Kto będzie odpowiadał za codzienną opiekę, wychowanie i spacery?",
        "Czy członkowie rodziny są wolni od alergii na sierść?",
        "Jaki będzie nasz plan w przypadku wyjazdów lub wakacji? Czy mamy kogoś, kto może się zająć psem podczas naszej nieobecności, czy będziemy podróżować z psem?",
        "Przemyślcie z jakim usposobieniem psa chcecie adoptować, aby pasował do stylu życia rodziny.",
      ],
      icon: "decisionPeople",
    },
    {
      heading: "Przeanalizuj, czy masz wystarczająco dużo czasu i pieniędzy",
      text: "Posiadanie psa to długoletnie zobowiązanie i wiąże się z szeregiem obowiązków oraz kosztów, aby zapewnić mu:",
      listItems: [
        "odpowiednie karmienie",
        "regularne spacery",
        "odpowiednią higienę i pielęgnację",
        "wychowanie lub specjalistyczne szkolenia",
        "opiekę weterynaryjna zarówno profilaktycznie jak i w przypadku choroby",
        "akcesoria, aby zapewnić mu właściwe warunki mieszkaniowe lub transportowe",
      ],
      textBottom:
        "Przyjmując średnie wartości, koszty związane z posiadaniem psa w Polsce wynoszą od około 1500 zł do 5000 zł rocznie. Warto jednak pamiętać, że to tylko szacunkowe koszty i przed podjęciem decyzji o adopcji psa, warto dokładnie przemyśleć, czy stać nas na takie zobowiązanie finansowe i czy jesteśmy w stanie sprostać wszystkim potrzebom i wymaganiom psa.",
      icon: "decisionClock",
    },
    {
      heading: "Sprawdź swoje warunki mieszkaniowe",
      text: "Oto kilka ważnych czynników, które warto wziąć pod uwagę, aby upewnić się, że mamy odpowiednie warunki mieszkaniowe dla psa:",
      listItems: [
        "Otoczenie, w którym mieszka pies, powinno zapewniać miejsce do snu, jedzenia, a także stały dostęp do wody pitnej.",
        "Warto wziąć pod uwagę dostęp do domu lub mieszkania, jeśli wymagane jest wchodzenie po schodach. Niektóre zwierzęta nie mogą wchodzić po schodach ze względów zdrowotnych.",
        "Warto pomyśleć o sąsiedztwie, niektóre psy są głośne i mogą przeszkadzać innym mieszkańcom, zwłaszcza gdy pies zostaje sam w domu.",
        "Warto mieć w pobliżu naszego mieszkania park lub inny rodzaj zieleni, gdzie będziemy mogli zabrać psa na spacer.",
        "Jeśli wynajmujemy mieszkanie lub dom warto uzgodnić z właścicielem, czy godzi się na zwierzęta.",
      ],
      icon: "decisionHome",
    },
    {
      heading: "Wybierz psa i dowiedz się o nim jak najwięcej",
      text: "Jeśli jakiś pies Cię zainteresował, przeczytaj uważnie jego opis na naszej stronie, aby dowiedzieć się jakie ma potrzeby, temperament oraz jakie jest jego zachowanie. ",
      icon: "decisionPaw",
    },
    {
      heading: "Poznaj psa, zanim go adoptujesz",
      text: "Poznaj wybranego psa na spotkaniu przedadopcyjnym. Spotkaj się z nim i spędź trochę czasu. To pomoże ocenić Ci, czy pasujecie do siebie i czy czujesz z nim więź. Na takim spotkaniu również Fundacja będzie miała okazję poznać bliżej Ciebie.",
      textBottom:
        "W tym celu wypełnij ankietę przedadopcyjną i odeślij do nas:",
      button: {
        text: "Ankieta przedadopcyjna",
        variant: "text",
        color: "primary",
        icon: "download",
        size: "medium",
        href: globalData.surveys.preAdoption,
      },
      icon: "decisionHeart",
    },
  ]

  return (
    <Styled.SectionContainer as="section">
      <Styled.Banner
        heading="Decyzja o adopcji psa"
        descriptionColor={theme.colors.gray[500]}
        size="medium"
        layout="left"
        mobileLayout="left"
        tabletLayout="left"
      >
        Adopcja psa wymaga odpowiedzialnego podejścia i przemyślenia kilku
        kwestii, poniżej znajdziesz wskazówki, które mogą być pomocne w podjęciu
        decyzji.
      </Styled.Banner>
      <Styled.AccordionsContainer>
        {accordions.map((accordion) => (
          <Styled.AccordionContainer key={accordion.icon}>
            <Styled.Icon>
              <Icon name={accordion.icon} color={theme.colors.neutrals[100]} />
            </Styled.Icon>
            <Accordion
              color="black"
              activeColor="black"
              heading={accordion.heading}
              shadow
              key={accordion.icon}
            >
              <Styled.AccordionContent>
                {accordion.text && (
                  <Typography variant="bodySmall">{accordion.text}</Typography>
                )}
                {accordion.listItems && (
                  <List gap={4}>
                    {accordion.listItems.map((listItem) => (
                      <ListItem variant="gray" iconName="dot" key={listItem}>
                        {listItem}
                      </ListItem>
                    ))}
                  </List>
                )}
                {accordion.textBottom && (
                  <Typography variant="bodySmall">
                    {accordion.textBottom}
                  </Typography>
                )}
                {accordion.button && (
                  <Button
                    text={accordion.button.text}
                    variant={accordion.button.variant}
                    color={accordion.button.color}
                    iconEnd={accordion.button.icon}
                    size={accordion.button.size}
                    href={accordion.button.href}
                    target="_blank"
                  />
                )}
              </Styled.AccordionContent>
            </Accordion>
          </Styled.AccordionContainer>
        ))}
      </Styled.AccordionsContainer>

      <Styled.ButtonWrapper>
        <Button
          text="Sprawdź zasady adopcji"
          href="/zasady-adopcji"
          variant="text"
          iconEnd="arrowRight"
        />
      </Styled.ButtonWrapper>
    </Styled.SectionContainer>
  )
}

export default AdoptionDecision
