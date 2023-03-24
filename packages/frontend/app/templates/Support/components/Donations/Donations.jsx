import Container from "design-system/components/container"

import TextBanner from "design-system/patterns/textBanner"

import * as Styled from "./Donations.styled"

const Donations = () => (
  <Container as="section">
    <Styled.Content>
      <TextBanner heading="Pomóż nam pomagać" subtitle="Wpłaty" size="medium">
        Nasze potrzeby nigdy nie maleją. Każdego dnia mierzymy się z ogromnymi
        wydatkami, aby zapewnić naszym podopiecznym najlepsze warunki. Możesz
        nam pomóc przekazując wsparcie finansowe. Wybierz najbardziej dogodną
        dla Ciebie opcję - jednorazowa wpłata lub zlecenie stałe. Niezależnie od
        tego, na co się zdecydujesz, będziesz mieć wpływ na życie naszych
        podopiecznych. Dziękujemy za każdą, nawet najmniejszą wpłatę.
      </TextBanner>
    </Styled.Content>
  </Container>
)

export default Donations
