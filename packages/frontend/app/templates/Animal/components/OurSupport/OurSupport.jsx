import Typography from "design-system/components/typography"
import Button from "design-system/components/button"

import List from "design-system/components/list"
import * as Styled from "./OurSupport.styled"

const supportList = [
  {
    text: "radził sobie ze stresem",
  },
  {
    text: "panował nad emocjami",
  },
  {
    text: "akceptował inne psy na spacerach",
  },
  {
    text: "nie ciągnął na smyczy",
  },
]

const OurSupport = () => (
  <Styled.BackgroundWrapper>
    <Styled.ContainerSection as="section" size="medium">
      <Styled.Wrapper>
        <Styled.Banner
          heading="Relacja z pupilem"
          subtitle="Pomagamy"
          size="medium"
          mobileLayout="left"
          tabletLayout="left"
        />
        <Styled.TextWrapper>
          <Typography variant="bodyTitle">
            Mając na uwadze potrzeby naszych podopiecznych i ich przyszłych
            właścicieli współpracujemy na stałe z behawiorystką{" "}
            <a href="https://cotenpies.pl/">Joanną Jankowską.</a>
          </Typography>
          <Typography variant="h5">
            W czym uzyskacie od niej wsparcie?
          </Typography>
          <Typography variant="bodyTitle">
            Asia znajduje przyczynę, przez którą szwankują Wasze kontakty z psem
            i pomaga je naprawić. Sprawi, że Twój pies będzie:
          </Typography>
          <List gap={18}>
            {supportList.map(({ text }) => (
              <Styled.Items key={text} variant="gray" iconName="check">
                {text}
              </Styled.Items>
            ))}
          </List>
          <Typography variant="bodyTitle">
            Więcej o Asi na{" "}
            <a href="https://www.facebook.com/CoTenPies">Facebooku</a> i{" "}
            <a href="https://www.instagram.com/co_ten_pies/"> Instagramie.</a>
          </Typography>
          <Typography variant="bodyTitle">
            Usługi zostaną wykonane odpłatnie ze specjalnym rabatem dla naszych
            adoptowanych podopiecznych.
          </Typography>
          <Typography variant="bodyTitle">
            Dodatkowo, jeśli masz jakiekolwiek pytania w trakcie czy po adopcji
            nie wahaj się pisać!
          </Typography>
          <Styled.ButtonContainer>
            <Button text="Skontaktuj się z nami" href="/kontakt" />
          </Styled.ButtonContainer>
        </Styled.TextWrapper>
        <Styled.Img
          alt="pet relation"
          src="../../single-animal/pet-realation.png"
        />
      </Styled.Wrapper>
    </Styled.ContainerSection>
  </Styled.BackgroundWrapper>
)

export default OurSupport
