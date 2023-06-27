import { useTheme } from "@emotion/react"

import Container from "design-system/components/container"
import Title from "design-system/components/title"
import Button from "design-system/components/button"
import Typography from "design-system/components/typography"
import Ilustration from "design-system/components/illustration"

import TextBanner from "design-system/patterns/textBanner"
import globalData from "shared/data"

import Image from "design-system/components/image"
import * as Styled from "./Fanimani.styled"

const steps = [
  {
    title: "Pobierz aplikację",
    description: `Możesz też pobrać aplikację na swój telefon, aby być zawsze na bieżąco. `,
    illustration: `smartphone`,
    buttons: [
      <Button
        key="app-store-button"
        variant="text"
        text="AppStore"
        target="_blank"
        href={globalData.surveys.temporaryHome}
      />,
      <Button
        key="google-play-button"
        variant="text"
        text="Google Play"
        target="_blank"
        href={globalData.surveys.temporaryHome}
      />,
    ],
  },
  {
    title: "Zainstaluj przypominajkę na komputerze",
    description:
      "Jeżeli cześciej robisz zakupy na komputerze niż telefonie możesz zainstalować sobie przypominajkę, aby nigdy nie zapomnieć o pomaganiu. Przejdź na stronę  Fanimani i pobierz rozszerzenie",
    illustration: `computer`,
    button: (
      <Button
        variant="text"
        text="Przejdź na stronę"
        iconStart="externalLink"
        target="_blank"
        href={globalData.fanimani.link}
      />
    ),
  },
]

const Fanimani = () => {
  const theme = useTheme()

  return (
    <Container as="section" id="fanimani">
      <Styled.Content>
        <TextBanner
          heading="Rób zakupy i wspieraj fundację"
          subtitle="Pomagaj za darmo"
          tabletLayout="left"
          mobileLayout="left"
        >
          Jeżeli robisz zakupy w internecie, nieważne czy są to buty,
          elektronika, kosmetyki czy książki, możesz nas bezpłatnie wspierać. Z
          każdego Twojego zakupu średnio 2,5% jego wartości trafi do naszej
          Fundacji, jeśli zaczniesz korzystać z serwisu FaniMani.pl. Ty nic nie
          dopłacasz, a nasi podopieczni dostaną szansę na lepsze życie.
          Wystarczy zainstalować przypominajkę na komputerze lub pobrać
          aplikację na telefon by wspierać nas przy okazji codziennych zakupów.
        </TextBanner>

        <Image src="/support/fanimani.png" alt="" />
      </Styled.Content>

      <Styled.Steps>
        {steps.map(({ title, description, illustration, buttons, button }) => (
          <Styled.Step key={title}>
            <Styled.Illustration>
              <Ilustration name={illustration} />
            </Styled.Illustration>

            <Styled.StepContent>
              <div>
                <Title text={title} line={false} as="h3" />

                <Typography variant="bodyTitle" color={theme.colors.gray[600]}>
                  {description}
                </Typography>
              </div>

              {buttons ? (
                <Styled.DownloadButtons>
                  {buttons.map((item) => item)}
                </Styled.DownloadButtons>
              ) : null}

              {button}
            </Styled.StepContent>
          </Styled.Step>
        ))}
      </Styled.Steps>
    </Container>
  )
}
export default Fanimani
