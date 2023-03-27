import { useTheme } from "@emotion/react"

import Container from "design-system/components/container"
import Title from "design-system/components/title"
import Icon from "design-system/components/icon"
import Typography from "design-system/components/typography"

import TextBanner from "design-system/patterns/textBanner"

import useCopyToClipboard from "design-system/helpers/useCopyToClipboard"

import * as Styled from "./Donations.styled"

const Donations = () => {
  const [isCopied, copyToClipboard] = useCopyToClipboard()
  const theme = useTheme()

  return (
    <Container as="section" id="wplaty">
      <Styled.Content>
        <div>
          <TextBanner
            heading="Pomóż nam pomagać"
            subtitle="Wpłaty"
            size="medium"
            tabletLayout="left"
            mobileLayout="left"
          >
            Nasze potrzeby nigdy nie maleją. Każdego dnia mierzymy się z
            ogromnymi wydatkami, aby zapewnić naszym podopiecznym najlepsze
            warunki. Możesz nam pomóc przekazując wsparcie finansowe. Wybierz
            najbardziej dogodną dla Ciebie opcję - jednorazowa wpłata lub
            zlecenie stałe. Niezależnie od tego, na co się zdecydujesz, będziesz
            mieć wpływ na życie naszych podopiecznych. Dziękujemy za każdą,
            nawet najmniejszą wpłatę.
          </TextBanner>

          <Styled.Box>
            <Title
              text="Przelew jednorazowy lub zlecenie stałe"
              variant="text"
              textSize="h5"
              as="p"
            />
            <div>
              <Typography variant="bodyTitle">
                Fundacja Sterczące Uszy
              </Typography>
              <Typography variant="bodyTitle">
                ul. Adres 1, 91-666 Poznań
              </Typography>
              <Typography variant="bodyTitle">NIP 5648753</Typography>
              <Typography variant="bodyTitle">
                Tytuł przelewu: Wsparcie dla Fundacji
              </Typography>
            </div>

            <Typography variant="h5" as="div">
              41 1870 1045 2078 1072 8639 0001
              {isCopied ? (
                <Styled.CopyInfo
                  variant="bodyTiny"
                  color={theme.colors.primary[500]}
                >
                  Skopiowano
                </Styled.CopyInfo>
              ) : (
                <Styled.CopyButton
                  onClick={() =>
                    copyToClipboard("Fundacja Sterczące Uszy 13146")
                  }
                >
                  <Icon name="copy" />
                </Styled.CopyButton>
              )}
            </Typography>
          </Styled.Box>
        </div>

        <Styled.Image src="/support/donations-image.png" />
      </Styled.Content>
    </Container>
  )
}

export default Donations
