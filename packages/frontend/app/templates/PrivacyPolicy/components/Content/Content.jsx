import Container from "design-system/components/container"
import Typography from "design-system/components/typography"

import * as Styled from "./Content.styled"

const Content = () => (
  <Container as="section">
    <Styled.Content>
      <Typography variant="h5">Drodzy Sympatycy Fundacji!</Typography>

      <Typography variant="bodyTitle">
        Robimy wszystko, aby nasze działania były transparentne i przejrzyste. W
        celu dostarczenia opieki, adopcji i wsparcia naszym podopiecznym
        potrzebne są nam Twoje dane osobowe. Chcemy je chronić i dlatego
        wdrożyłyśmy Politykę prywatności i plików cookies. Polityka ta wyjaśnia
        w jakim celu potrzebujemy Twoich danych, w jaki sposób je przetwarzamy
        oraz jakie przysługują Ci prawa dotyczące Twoich danych.
      </Typography>

      <Typography variant="bodyTitle">
        W razie pytań lub wątpliwości możesz się z nami skontaktować pod adresem
        e-mail: fundacjasterczaceuszy@gmail.com.
      </Typography>

      <Typography variant="bodyTitle">
        Zapewniamy Cię, że wdrożone przez nas rozwiązania techniczne i
        organizacyjne gwarantują wysoki standard ochrony Twoich danych
        osobowych. W ramach prowadzonej przez nas działalności zobowiązujemy się
        do przestrzegania poniższej polityki, jak również wymogów obowiązujących
        przepisów prawa w zakresie przetwarzania danych osobowych.
      </Typography>

      <Typography variant="h5">Dziękujemy, że jesteś z nami.</Typography>

      <Styled.Heading variant="h3">Polityka prywatności</Styled.Heading>

      <Styled.ContentSection>
        <Typography variant="h5">
          Kto jest administratorem i inspektorem danych osobowych?
        </Typography>

        <Typography variant="bodyTitle">
          Administratorem Twoich danych osobowych jest Fundacja Sterczące Uszy,
          ul. Gen. Władysława Sikorskiego 3, 62-030 Luboń.
        </Typography>
      </Styled.ContentSection>

      <Styled.ContentSection>
        <Typography variant="h5">Jakie dane osobowe przetwarzamy?</Typography>

        <Typography variant="bodyTitle">
          Przetwarzamy różne kategorie danych osobowych w zależności od tego, w
          jaki sposób się z nami kontaktujesz, jakie dokumenty wypełniasz lub w
          jaki sposób przekazujesz nam swoje darowizny.
        </Typography>

        <Typography variant="h6">Przekazujesz nam darowiznę.</Typography>

        <Typography variant="bodyTitle">
          - Przetwarzamy między innymi następujące rodzaje danych osobowych:
          imię, drugie imię, nazwisko, pseudonim, płeć, email, adres (ulica, kod
          pocztowy, miejscowość, kraj), telefon, datę urodzenia, numer konta
          bankowego, kwotę i informacje o przekazanej nam przez Ciebie
          darowiźnie.
        </Typography>

        <Typography variant="bodyTitle">
          - Dane osobowe zbieramy w momencie, kiedy przekazujesz nam darowiznę
          poprzez konto bankowe lub w formularzu przekazu pocztowego. Dane
          osobowe zbieramy na podstawie danych z przelewów bankowych, a także za
          pośrednictwem Poczty Polskiej, jeśli przekazujesz nam darowiznę
          przekazem.
        </Typography>

        <Typography variant="h6">
          Wyraziłeś zgodę na przekazanie nam Twoich danych na formularzu PIT
          przekazując nam 1,5% swojego podatku dochodowego.
        </Typography>

        <Typography variant="bodyTitle">
          - Przetwarzamy następujące rodzaje danych osobowych: imię, drugie
          imię, nazwisko, płeć, adres zamieszkania (ulica, kod pocztowy,
          miejscowość, kraj), numer konta bankowego, kwotę oraz inne informacje
          o przekazanym 1,5% podatku, a także: imię, drugie imię, nazwisko, płeć
          i adres zamieszkania (ulica, kod pocztowy, miejscowość, kraj) Twojego
          małżonka, jeżeli rozliczasz się razem z nim, oraz dane Urzędu
          Skarbowego, w którym rozliczasz PIT.
        </Typography>

        <Typography variant="bodyTitle">
          - Dane osobowe zbieramy w momencie, kiedy przekazujesz nam 1,5%
          podatku, podając swoje dane w formularzu PIT-OP. Dane te pozyskujemy
          na podstawie przekazanych nam informacji z Ministerstwa Finansów.
        </Typography>

        <Typography variant="h6">
          Wysyłasz zapytanie poprzez formularz kontaktowy.
        </Typography>

        <Typography variant="bodyTitle">
          - Przetwarzamy następujące rodzaje danych osobowych: imię, adres
          e-mail.
        </Typography>

        <Typography variant="bodyTitle">
          - Wpisujesz je sam/(a) w formularzu kontaktowym.
        </Typography>

        <Typography variant="h6">
          Prosisz o kod promocyjny na rejestracje chipa.
        </Typography>

        <Typography variant="bodyTitle">
          - Przetwarzamy następujące rodzaje danych osobowych: imię, adres
          e-mail.
        </Typography>

        <Typography variant="bodyTitle">
          - Wpisujesz je sam/(a) w formularzu kontaktowym.
        </Typography>

        <Typography variant="h6">Zostawiasz swoją opinię.</Typography>

        <Typography variant="bodyTitle">
          - Przetwarzamy następujące rodzaje danych osobowych: imię i nazwisko,
          adres e-mail, dane konta z mediów społecznościowych(jeśli je podałeś).
        </Typography>

        <Typography variant="bodyTitle">
          - Wpisujesz je sam/(a) w Google lub na platformach społecznościowych
          typu Facebook lub Instagram.
        </Typography>

        <Typography variant="h6">
          Dziękujemy Tobie za okazane wsparcie.
        </Typography>

        <Typography variant="bodyTitle">
          - Przetwarzamy następujące rodzaje danych osobowych: imię i nazwisko
          lub nazwa firmy, bądz instytucji, link do strony internetowej lub do
          mediów społecznościowych, adres e-mail.
        </Typography>

        <Typography variant="bodyTitle">
          - Podajesz je przy współpracy czy wolontariacie na rzecz Fundacji lub
          poprzez media społecznościowe typu Facebook lub Instagram.
        </Typography>

        <Typography variant="h6">
          Przystępujesz do procesu adopcyjnego lub bycia domem tymczasowym.
        </Typography>

        <Typography variant="bodyTitle">
          - Przetwarzamy między innymi następujące rodzaje danych osobowych:
          imię, drugie imię, nazwisko, pseudonim, płeć, e-mail, adres (ulica,
          kod pocztowy, miejscowość, kraj), telefon, datę urodzenia, PESEL,
          informację o liczbie i wieku domowników.
        </Typography>

        <Typography variant="bodyTitle">
          - Wpisujesz je sam/(a) w ankiecie przedadopcyjnej, ankiecie o bycie
          domem tymczasowym, umowie adopcyjnej i umowie o zostaniu domem
          tymczasowym.
        </Typography>

        <Typography variant="bodyTitle">
          Informacje pozyskujemy również, kiedy dzielisz się nimi z nami podczas
          spotkań, rozmów telefonicznych, korespondując z nami mailowo, za
          pomocą naszej strony lub konta w mediach społecznościowych i w sposób
          tradycyjny.
        </Typography>
      </Styled.ContentSection>

      <Styled.ContentSection>
        <Typography variant="h5">
          W jakim celu przetwarzamy Twoje dane osobowe?
        </Typography>

        <Typography variant="bodyTitle">
          Dane osobowe mogą być przetwarzane w celu:
        </Typography>

        <Typography variant="bodyTitle">
          - realizacji dokonywanych przez darczyńców darowizn na rzecz Fundacji
          Sterczące Uszy, w tym darowizn finansowych, tradycyjnych przelewów
          bankowych, jak również zbiórek za pośrednictwem portalu Facebook i
          strony ratujemyzwierzaki.pl, a także odpisów 1,5% podatku oraz
          przekazów pocztowych,
        </Typography>
        <Typography variant="bodyTitle">
          - realizacji procesu przekazywanych przez Darczyńców darowizn
          rzeczowych oraz usług, w zakresie niezbędnym do obsługi procesu
          księgowego i podatkowego w związku z dokonywanymi darowiznami lub
          świadczonymi usługami,
        </Typography>
        <Typography variant="bodyTitle">
          - prowadzenia z Tobą komunikacji, odnośnie adopcji czy bycia domem
          tymczasowym, współpracy, wpłat, darowizn rzeczowych, wysyłania zapytań
          o psa, prośby o kod promocyjny na rejestrację chipa lub zapraszania na
          wydarzenia organizowane przez Fundacje Sterczące Uszy,
        </Typography>
        <Typography variant="bodyTitle">
          - pokazania opinii o Fundacji Sterczące Uszy i umieszczania
          podziękowań na naszej stronie internetowej,
        </Typography>
        <Typography variant="bodyTitle">
          - wszelkich działań poprzez media społecznościowe, które mają na celu
          poprawę warunków i przyspieszenie adopcji i opieki dla naszych
          podopiecznych,
        </Typography>
        <Typography variant="bodyTitle">
          - zebrania informacji niezbędnych do przystąpienia do procesu
          adopcyjnego i bycia domem tymczasowym,
        </Typography>
        <Typography variant="bodyTitle">
          - kompletowania umów i niezbędnych oświadczeń przy adopcji i o bycie
          domem tymczasowym,
        </Typography>
        <Typography variant="bodyTitle">
          - w zakresie niezbędnym do wypełniania prawnych zobowiązań
          wynikających z przepisów prawa powszechnie obowiązującego,
        </Typography>
        <Typography variant="bodyTitle">
          - marketingu własnych działań, badania rynku i demograficznych oraz
          zachowań i preferencji osób korzystających z naszej strony, a także
          prowadzenia statystyk oglądalności naszej strony, do personalizacji
          jej zawartości oraz zapewnienia sprawnego działania,
        </Typography>
        <Typography variant="bodyTitle">
          - w celach statystycznych, aby optymalizować przyszłe działania
          związane z prowadzeniem strony internetowej.
        </Typography>
      </Styled.ContentSection>

      <Styled.ContentSection>
        <Typography variant="h5">
          Na jakiej podstawie możemy przetwarzać Twoje dane osobowe?
        </Typography>
        <Typography variant="bodyTitle">
          - Przetwarzamy Twoje dane na podstawie wyrażonej przez Ciebie zgody
          zgodnie z art. 6 ust. 1 lit. a) Rozporządzenia 2016/679 z dnia 27
          kwietnia 2016 r. (dalej również: ”RODO”) – w przypadku przetwarzania
          Twoich danych w określonych kanałach komunikacji z Tobą, a także w
          przypadku wyrażenia zgody na przekazanie nam Twoich danych osobowych,
          gdy przekazałeś Fundacji Sterczące Uszy darowiznę w drodze 1,5%
          podatku dochodowego (zgoda jest umieszczona na formularzu PIT-OP),
        </Typography>

        <Typography variant="bodyTitle">
          - Przetwarzamy Twoje dane, jeżeli jest to niezbędne do wykonania
          umowy, której jesteś stroną (np. umowa adopcji, bycia domem
          tymczasowym darowizny rzeczowej czy pieniężnej) zgodnie z art. 6 ust.
          1 lit. b) RODO,
        </Typography>
        <Typography variant="bodyTitle">
          - Przetwarzamy Twoje dane, jeżeli jest to niezbędne do wypełnienia
          obowiązku prawnego ciążącego na Fundacji Sterczące Uszy zgodnie z art.
          6 ust. 1 lit. c) RODO – w zakresie obowiązków względem organu
          nadzorującego, czy też w celu wywiązania się z obowiązków wynikających
          między innymi z ustawy o rachunkowości, ustawy o działalności pożytku
          publicznego i wolontariacie czy przepisów podatkowych, jak również
          realizacji statutu Fundacji Sterczące Uszy.
        </Typography>
        <Typography variant="bodyTitle">
          - Na podstawie uzasadnionego interesu administratora danych, zgodnie z
          art. 6 ust. 1 lit. f) RODO, którym jest pozyskiwanie funduszy na
          działalność pożytku publicznego - w przypadku przetwarzania Twoich
          danych do kontaktu z Tobą, przekazywania Ci materiałów informacyjnych
          (np. wysyłka komunikacji papierowej do Darczyńców), prowadzenie
          komunikacji z Tobą oraz zapewnienia sprawnego działania strony
          internetowej Fundacji Sterczące Uszy.
        </Typography>
      </Styled.ContentSection>

      <Styled.ContentSection>
        <Typography variant="h5">
          Informacje o odbiorcach danych osobowych
        </Typography>
        <Typography variant="bodyTitle">
          Odbiorcami Twoich danych osobowych będą działacze i wolontariusze
          Fundacji Sterczące Uszy odpowiadający za bieżące akcje i opiekę nad
          zwierzętami lub odpowiedzialni za usprawnianie jej działań, a także za
          przeprowadzenie i pomoc przy Twojej procedurze adopcyjnej i o bycie
          domem tymczasowym. Twoje dane osobowe możemy przekazywać także naszym
          księgowym.
        </Typography>
      </Styled.ContentSection>

      <Styled.ContentSection>
        <Typography variant="h5">
          Okres przetwarzania danych osobowych:
        </Typography>

        <Typography variant="bodyTitle">
          - w przypadku adopcji zwierzęcia do czasu zgłoszenia przez
          adoptującego zgonu zwierzęcia lecz nie dłużej niż przez 10 lat od
          zakończenia procedury adopcyjnej,
        </Typography>

        <Typography variant="bodyTitle">
          - w przypadku gdy nie dojdzie do adopcji – Twoje dane osobowe zostaną
          usunięte niezwłocznie po zakończeniu procedury adopcyjnej,{" "}
        </Typography>
        <Typography variant="bodyTitle">
          - w przypadku przekazania nam darowizny (samodzielnie czy jako 1,5%
          podatku) Twoje dane osobowe przetwarzamy odpowiednio i w niezbędnym
          zakresie przez okres odpowiadający terminom wynikającym z powszechnie
          obowiązującego prawa, w tym Ordynacji podatkowej, Ustawy o
          rachunkowości i Kodeksu Cywilnego (termin przedawnienia roszczeń),
        </Typography>
        <Typography variant="bodyTitle">
          - w przypadku korespondencji mailowej czy standardowej droga pocztową
          oraz w przypadku zamieszczenia opinii czy podziękowań, Twoje dane
          będziemy przetwarzać do momentu wycofania przez Ciebie takiej zgody
          lub też zgłoszenia przez Ciebie sprzeciwu wobec przetwarzania przez
          nas Twoich danych.
        </Typography>
      </Styled.ContentSection>

      <Styled.ContentSection>
        <Typography variant="h5">
          Jakie są Twoje uprawnienia dotyczące danych osobowych?
        </Typography>
        <Typography variant="bodyTitle">
          - Prawo dostępu do danych – przysługuje Ci prawo uzyskania od nas
          potwierdzenia, czy przetwarzamy Twoje dane osobowe, a jeżeli ma to
          miejsce, prawo do uzyskania dostępu do nich, w tym otrzymania ich
          kopii, oraz uzyskania poszczególnych informacji np. na temat celów
          przetwarzania danych, na podstawie art. 15 RODO.
        </Typography>
        <Typography variant="bodyTitle">
          - Prawo żądania sprostowania danych – przysługuje Ci prawo żądania od
          nas niezwłocznego sprostowania czy uzupełnienia dotyczących Ciebie
          danych osobowych, które są nieprawidłowe, na podstawie art. 16 RODO.
        </Typography>
        <Typography variant="bodyTitle">
          - Prawo do żądania usunięcia danych („prawo do bycia zapomnianym”) –
          przysługuje Ci prawo żądania od nas niezwłocznego usunięcia Twoich
          danych osobowych, a my mamy obowiązek bez zbędnej zwłoki usunąć Twoje
          dane osobowe, o ile prawo nie nakazuje nam dalszego ich przetwarzania
          lub nie występują inne przesłanki uniemożliwiające realizację żądania,
          na podstawie art. 17 RODO.
        </Typography>
        <Typography variant="bodyTitle">
          - Prawo ograniczenia przetwarzania danych – przysługuje Ci prawo do
          żądania od nas nieprzetwarzania Twoich danych w inny sposób niż tylko
          ich przechowywanie na czas rozpatrzenia przez nas Twojego innego
          żądania w zakresie danych osobowych, na podstawie art. 18 RODO.
        </Typography>
        <Typography variant="bodyTitle">
          - Prawo do przenoszenia danych – przysługuje Ci prawo otrzymania od
          nas w ustrukturyzowanym, powszechnie używanym formacie nadającym się
          do odczytu maszynowego lub innej preferowanej przez Ciebie formy,
          Twoich danych osobowych, oraz prawo do przesłania tych danych
          osobowych innemu administratorowi bez przeszkód ze strony
          administratora, któremu dostarczono te dane osobowe, na podstawie art.
          20 RODO.
        </Typography>
        <Typography variant="bodyTitle">
          - Prawo wniesienia sprzeciwu – przysługuje Ci prawo do wniesienia
          sprzeciwu wobec przetwarzania przez nas Twoich danych, jeśli
          przetwarzamy je na mocy naszego uzasadnionego interesu lub w interesie
          publicznym, a także jeśli przetwarzamy je w celu marketingowym, na
          postawie art. 21 RODO.
        </Typography>
        <Typography variant="bodyTitle">
          - Prawo wycofania zgody – przysługuje Ci prawo, aby w dowolnym
          momencie wycofać zgodę, na podstawie której przetwarzamy Twoje dane.
          Wycofanie zgody nie wpływa na zgodność z prawem przetwarzania, którego
          dokonano na podstawie zgody przed jej wycofaniem, na podstawie art. 7
          ust. 3 RODO.
        </Typography>
      </Styled.ContentSection>

      <Styled.ContentSection>
        <Typography variant="h5">
          Wycofanie zgody na przetwarzanie danych osobowych
        </Typography>
        <Typography variant="bodyTitle">
          W każdym momencie możesz cofnąć udzieloną nam zgodę na przetwarzanie
          danych osobowych w formularzach czy do prowadzenia z Tobą komunikacji,
          odnośnie adopcji czy bycia domem tymczasowym, współpracy, wpłat,
          darowizn rzeczowych, wysyłania zapytań o psa, prośby o kod promocyjny
          na rejestrację chipa lub zapraszania na wydarzenia organizowane przez
          Fundacje Sterczące Uszy. Usunięcie danych nastąpi automatycznie po
          wysłaniu na maila fundacjasterczaceuszy@gmail.com prośby o wycofanie
          zgody. Musisz jednak pamiętać, że wycofanie zgody w tym zakresie
          oznacza jedynie usunięcie Twoich danych przetwarzanych przez nas w tym
          celu, jednak ponieważ adoptowałeś zwierzę lub przekazałeś nam
          darowiznę to mogą ciążyć na nas obowiązki prawne, na podstawie których
          musimy przetwarzać Twoje dane także po wycofaniu przez Ciebie zgody.
          Jest tak, ponieważ podstawą prawną przetwarzania Twoich danych w
          przypadku adopcji czy przekazania nam darowizny jest łącząca nas umowa
          adopcyjna lub darowizny, a także ciążące na Fundacji Sterczące Uszy
          obowiązki prawne. W celu realizacji powyższych uprawnień lub uzyskania
          dodatkowych informacji na temat przetwarzania Twoich danych,
          skontaktuj się z nami na maila fundacjasterczaceuszy@gmail.com.
        </Typography>
      </Styled.ContentSection>

      <Styled.ContentSection>
        <Typography variant="h5">
          Do kogo zgłaszać zastrzeżenia w zakresie ochrony danych?
        </Typography>
        <Typography variant="bodyTitle">
          W przypadku gdy masz zastrzeżenia co do sposobu, w jaki przetwarzamy
          Twoje dane, prosimy w pierwszej kolejności o kontakt z nami za pomocą
          adresu e-mail: fundacjasterczaceuszy@gmail.com. Jednocześnie
          informujemy, że przysługuje Ci prawo do wniesienia skargi do organu
          nadzorczego zajmującego się ochroną danych osobowych, tj. Prezesa
          Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.
        </Typography>
      </Styled.ContentSection>

      <Styled.ContentSection>
        <Typography variant="h5">Dlaczego prosimy o Twoje dane?</Typography>
        <Typography variant="bodyTitle">
          Podanie przez Adoptującego danych osobowych jest dobrowolne, lecz
          niezbędne do realizacja procesu adopcji czy bycia domem tymczasowym.
          Wyrażenie zgody na przekazanie Fundacji Sterczące Uszy Twoich danych
          osobowych podanych na formularzu PIT-OP w związku z przekazaniem 1,5%
          podatku dochodowego jest dobrowolne i nie jest niezbędne do
          przekazania nam 1,5% podatku. W pozostałych przypadkach podanie danych
          osobowych jest dobrowolne. Masz prawo w dowolnym momencie wnieść
          sprzeciw wobec przetwarzania danych w oparciu o prawnie uzasadniony
          interes na podstawie art. 6 ust. 1 lit. f RODO.{" "}
        </Typography>
      </Styled.ContentSection>
    </Styled.Content>
  </Container>
)
export default Content
