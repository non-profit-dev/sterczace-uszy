import { useTheme } from "@emotion/react"

import Container from "design-system/components/container"
import Typography from "design-system/components/typography"

import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"
import SupportBanner from "design-system/blocks/supportBanner"
import CtaBanner from "design-system/patterns/ctaBanner"

import TextBanner from "design-system/patterns/textBanner"

import Page from "../Page"

import * as Styled from "./ThankYou.styled"

const ThankYou = () => {
  const theme = useTheme()

  return (
    <Page title="Podziękowanie">
      <main>
        <Styled.PageWrapper>
          <SupportBanner />
          <Navigation />
          <Container size="large">
            <Styled.ContentWrapper>
              <TextBanner
                subtitle="Twoja pomoc ma moc"
                heading="Bardzo dziękujemy za wsparcie"
                descriptionColor={theme.colors.gray[500]}
                tabletLayout="left"
                mobileLayout="left"
              >
                Twoja wpłata sprawia, że nasza praca dla bezdomnych zwierząt ma
                sens. Dzięki Twojemu wsparciu, mamy nadzieję na lepsze życie dla
                każdego futrzanego przyjaciela. Dziękujemy z całego serca za
                Twoją hojność i życzliwość!
              </TextBanner>

              <Typography variant="h5" as="p" color={theme.colors.gray[500]}>
                Dobrze mieć przyjaciół takich jak TY
                <Styled.Icon name="heartFilled" />
              </Typography>

              <div>
                <Styled.FounderImage src="/thank-you/founder.png" alt="" />

                <Styled.FounderText>
                  <Typography variant="h5" as="p">
                    Vanessa Szmatuła
                  </Typography>
                  <Typography variant="bodyTitle">
                    Prezes Fundacji Sterczące Uszy
                  </Typography>
                  <Typography variant="bodyTitle">
                    W imieniu swoim i podopiecznych:)
                  </Typography>
                </Styled.FounderText>
              </div>
            </Styled.ContentWrapper>
          </Container>

          <Styled.Background src="/thank-you/background.png" alt="" />
        </Styled.PageWrapper>

        <CtaBanner
          buttonHref="/kontakt"
          buttonText="Skontaktuj się z nami"
          heading="Masz pytania lub wątpliwości?"
          mobileLayout="left"
        />
      </main>

      <Footer />
    </Page>
  )
}
export default ThankYou
