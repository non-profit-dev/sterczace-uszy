import { useTheme } from "@emotion/react"

import Container from "design-system/components/container"
import Title from "design-system/components/title"
import Button from "design-system/components/button"
import Typography from "design-system/components/typography"
import Ilustration from "design-system/components/illustration"

import TextBanner from "design-system/patterns/textBanner"
import globalData from "shared/data"

import * as Styled from "./Fanimani.styled"

const steps = [
  {
    title: "Pobierz aplikację",
    description: `Możesz też pobrać aplikację na swój telefon, aby być zawsze na bieżąco. `,
    illustration: `smartphone`,
    buttons: [
      <a
        key="app-store-button"
        title="Pobierz z AppStore"
        aria-label="Pobierz z AppStore"
        target="_blank"
        href={globalData.fanimani.appStore}
        rel="noreferrer"
      >
        <img src="/free-support/app-store.png" alt="" width="145" />
      </a>,
      <a
        key="google-play-button"
        aria-label="Pobierz z Google Play"
        title="Pobierz z Google Play"
        target="_blank"
        href={globalData.fanimani.googlePlay}
        rel="noreferrer"
      >
        <img src="/free-support/google-play.png" alt="" width="145" />
      </a>,
    ],
  },
  {
    title: "Zainstaluj przypominajkę na komputerze",
    description:
      "Jeżeli częściej robisz zakupy na komputerze niż telefonie możesz zainstalować sobie przypominajkę, aby nigdy nie zapomnieć o pomaganiu. Przejdź na stronę Fanimani i pobierz rozszerzenie",
    illustration: `computer`,
    button: (
      <Button
        variant="text"
        text="Przejdź na stronę"
        iconEnd="externalLink"
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
          subtitle="Fanimani"
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

        <Styled.Image src="/free-support/fanimani.png" alt="" />
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

                <Typography variant="bodyTitle" color={theme.colors.gray[500]}>
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
