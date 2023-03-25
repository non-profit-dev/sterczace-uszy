import Container from "design-system/components/container"
import Title from "design-system/components/title"
import Typography from "design-system/components/typography"

import TextBanner from "design-system/patterns/textBanner"

import * as Styled from "./Donations.styled"

const Donations = () => (
  <Container as="section" id="wplaty">
    <Styled.Content>
      <div>
        <TextBanner heading="Pomóż nam pomagać" subtitle="Wpłaty" size="medium">
          Nasze potrzeby nigdy nie maleją. Każdego dnia mierzymy się z ogromnymi
          wydatkami, aby zapewnić naszym podopiecznym najlepsze warunki. Możesz
          nam pomóc przekazując wsparcie finansowe. Wybierz najbardziej dogodną
          dla Ciebie opcję - jednorazowa wpłata lub zlecenie stałe. Niezależnie
          od tego, na co się zdecydujesz, będziesz mieć wpływ na życie naszych
          podopiecznych. Dziękujemy za każdą, nawet najmniejszą wpłatę.
        </TextBanner>

        <Styled.Box>
          <Title text="Przelew jednorazowy lub zlecenie stałe" variant="text" />
          <Typography variant="bodyTitle">
            Fundacja Sterczące Uszy ul. Adres 1, 91-666 Poznań NIP 5648753 Tytuł
            przelewu: Wsparcie dla Fundacji
          </Typography>
          <Typography variant="h5">41 1870 1045 2078 1072 8639 0001</Typography>
        </Styled.Box>
      </div>

      <Styled.Image src="/support/donations-image.png" />
    </Styled.Content>
  </Container>
)

export default Donations
