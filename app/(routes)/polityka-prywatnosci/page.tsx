import type { Metadata } from "next"

import { ShieldCheck } from "lucide-react"

import { Cta, Footer, Navigation } from "@/app/sections"
import { Hero } from "@/components/hero"
import { getGlobalData } from "@/lib/contentful"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Polityka prywatności",
  description:
    "Przeczytaj, jak Fundacja Sterczące Uszy przetwarza i chroni dane osobowe osób kontaktujących się z fundacją.",
  path: "/polityka-prywatnosci",
})

export default async function PrivacyPolicy() {
  const globalData = await getGlobalData()
  return (
    <div className="flex flex-col items-center justify-center">
      <Navigation />

      <Hero
        subtitle="Fundacja Sterczące Uszy"
        title="Polityka prywatności"
        descriptions={[
          "Chronimy Twoje dane osobowe i zapewniamy transparentność w ich przetwarzaniu.",
        ]}
      />

      <main className="my-10 flex w-full max-w-6xl flex-col items-center gap-y-12 px-4 lg:my-20 lg:gap-y-16">
        <section className="prose md:prose-lg w-full max-w-none">
          <div className="mb-12 rounded-lg bg-gray-100 p-8">
            <h2 className="mb-4 flex items-center gap-3 text-xl font-bold md:text-2xl lg:text-3xl">
              <ShieldCheck className="text-primary-500 h-8 w-8" />
              Drodzy Sympatycy Fundacji!
            </h2>

            <p className="mb-4 text-base md:text-lg">
              Robimy wszystko, aby nasze działania były transparentne i przejrzyste. W celu
              dostarczenia opieki, adopcji i wsparcia naszym podopiecznym potrzebne są nam Twoje
              dane osobowe. Chcemy je chronić i dlatego wdrożyłyśmy Politykę prywatności i plików
              cookies.
            </p>

            <p className="mb-4 text-base md:text-lg">
              Polityka ta wyjaśnia w jakim celu potrzebujemy Twoich danych, w jaki sposób je
              przetwarzamy oraz jakie przysługują Ci prawa dotyczące Twoich danych.
            </p>

            <p className="mb-4 text-base md:text-lg">
              W razie pytań lub wątpliwości możesz się z nami skontaktować pod adresem e-mail:{" "}
              <a href={`mailto:${globalData.email}`} className="text-primary-500 hover:underline">
                {globalData.email}
              </a>
              .
            </p>

            <p className="text-base md:text-lg">
              Zapewniamy Cię, że wdrożone przez nas rozwiązania techniczne i organizacyjne
              gwarantują wysoki standard ochrony Twoich danych osobowych. W ramach prowadzonej przez
              nas działalności zobowiązujemy się do przestrzegania poniższej polityki, jak również
              wymogów obowiązujących przepisów prawa w zakresie przetwarzania danych osobowych.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="mb-6 text-xl font-bold md:text-2xl lg:text-3xl">
              Kto jest administratorem danych osobowych?
            </h2>
            <p className="text-base md:text-lg">
              Administratorem Twoich danych osobowych jest Fundacja Sterczące Uszy,{" "}
              {globalData.address}, {globalData.city}.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-xl font-bold md:text-2xl lg:text-3xl">
              Jakie dane osobowe przetwarzamy?
            </h2>
            <p className="mb-6 text-base md:text-lg">
              Przetwarzamy różne kategorie danych osobowych w zależności od tego, w jaki sposób się
              z nami kontaktujesz, jakie dokumenty wypełniasz lub w jaki sposób przekazujesz nam
              swoje darowizny.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="mb-3 text-lg font-semibold md:text-xl lg:text-2xl">
                  Przekazujesz nam darowiznę
                </h3>
                <p className="mb-3 text-base md:text-lg">
                  Przetwarzamy między innymi następujące rodzaje danych osobowych: imię, drugie
                  imię, nazwisko, pseudonim, płeć, email, adres (ulica, kod pocztowy, miejscowość,
                  kraj), telefon, datę urodzenia, numer konta bankowego, kwotę i informacje o
                  przekazanej nam przez Ciebie darowiźnie.
                </p>
                <p className="text-base md:text-lg">
                  Dane osobowe zbieramy w momencie, kiedy przekazujesz nam darowiznę poprzez konto
                  bankowe lub w formularzu przekazu pocztowego. Dane osobowe zbieramy na podstawie
                  danych z przelewów bankowych, a także za pośrednictwem Poczty Polskiej, jeśli
                  przekazujesz nam darowiznę przekazem.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-semibold md:text-xl lg:text-2xl">
                  Przekazujesz nam 1,5% swojego podatku dochodowego
                </h3>
                <p className="mb-3 text-base md:text-lg">
                  Przetwarzamy następujące rodzaje danych osobowych: imię, drugie imię, nazwisko,
                  płeć, adres zamieszkania (ulica, kod pocztowy, miejscowość, kraj), numer konta
                  bankowego, kwotę oraz inne informacje o przekazanym 1,5% podatku, a także: imię,
                  drugie imię, nazwisko, płeć i adres zamieszkania (ulica, kod pocztowy,
                  miejscowość, kraj) Twojego małżonka, jeżeli rozliczasz się razem z nim, oraz dane
                  Urzędu Skarbowego, w którym rozliczasz PIT.
                </p>
                <p className="text-base md:text-lg">
                  Dane osobowe zbieramy w momencie, kiedy przekazujesz nam 1,5% podatku, podając
                  swoje dane w formularzu PIT-OP. Dane te pozyskujemy na podstawie przekazanych nam
                  informacji z Ministerstwa Finansów.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-semibold md:text-xl lg:text-2xl">
                  Wysyłasz zapytanie poprzez formularz kontaktowy
                </h3>
                <p className="mb-3 text-base md:text-lg">
                  Przetwarzamy następujące rodzaje danych osobowych: imię, adres e-mail.
                </p>
                <p className="text-base md:text-lg">
                  Wpisujesz je sam(a) w formularzu kontaktowym.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-semibold md:text-xl lg:text-2xl">
                  Prosisz o kod promocyjny na rejestrację chipa
                </h3>
                <p className="mb-3 text-base md:text-lg">
                  Przetwarzamy następujące rodzaje danych osobowych: imię, adres e-mail.
                </p>
                <p className="text-base md:text-lg">
                  Wpisujesz je sam(a) w formularzu kontaktowym.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-semibold md:text-xl lg:text-2xl">
                  Zostawiasz swoją opinię
                </h3>
                <p className="mb-3 text-base md:text-lg">
                  Przetwarzamy następujące rodzaje danych osobowych: imię i nazwisko, adres e-mail,
                  dane konta z mediów społecznościowych (jeśli je podałeś).
                </p>
                <p className="text-base md:text-lg">
                  Wpisujesz je sam(a) w Google lub na platformach społecznościowych typu Facebook
                  lub Instagram.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-semibold md:text-xl lg:text-2xl">
                  Wspierasz naszą fundację
                </h3>
                <p className="mb-3 text-base md:text-lg">
                  Przetwarzamy następujące rodzaje danych osobowych: imię i nazwisko lub nazwa
                  firmy, bądź instytucji, link do strony internetowej lub do mediów
                  społecznościowych, adres e-mail.
                </p>
                <p className="text-base md:text-lg">
                  Podajesz je przy współpracy czy wolontariacie na rzecz Fundacji lub poprzez media
                  społecznościowe typu Facebook lub Instagram.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-semibold md:text-xl lg:text-2xl">
                  Przystępujesz do procesu adopcyjnego lub bycia domem tymczasowym
                </h3>
                <p className="mb-3 text-base md:text-lg">
                  Przetwarzamy między innymi następujące rodzaje danych osobowych: imię, drugie
                  imię, nazwisko, pseudonim, płeć, e-mail, adres (ulica, kod pocztowy, miejscowość,
                  kraj), telefon, datę urodzenia, PESEL, informację o liczbie i wieku domowników.
                </p>
                <p className="text-base md:text-lg">
                  Wpisujesz je sam(a) w ankiecie przedadopcyjnej, ankiecie o bycie domem
                  tymczasowym, umowie adopcyjnej i umowie o zostaniu domem tymczasowym.
                </p>
              </div>
            </div>

            <p className="mt-6 text-base md:text-lg">
              Informacje pozyskujemy również, kiedy dzielisz się nimi z nami podczas spotkań, rozmów
              telefonicznych, korespondując z nami mailowo, za pomocą naszej strony lub konta w
              mediach społecznościowych i w sposób tradycyjny.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-xl font-bold md:text-2xl lg:text-3xl">
              W jakim celu przetwarzamy Twoje dane osobowe?
            </h2>
            <p className="mb-4 text-base md:text-lg">Dane osobowe mogą być przetwarzane w celu:</p>

            <ul className="list-inside list-disc space-y-3 text-base md:text-lg">
              <li>
                realizacji dokonywanych przez darczyńców darowizn na rzecz Fundacji Sterczące Uszy,
                w tym darowizn finansowych, tradycyjnych przelewów bankowych, jak również zbiórek za
                pośrednictwem portalu Facebook i strony ratujemyzwierzaki.pl, a także odpisów 1,5%
                podatku oraz przekazów pocztowych,
              </li>
              <li>
                realizacji procesu przekazywanych przez Darczyńców darowizn rzeczowych oraz usług, w
                zakresie niezbędnym do obsługi procesu księgowego i podatkowego w związku z
                dokonywanymi darowiznami lub świadczonymi usługami,
              </li>
              <li>
                prowadzenia z Tobą komunikacji, odnośnie adopcji czy bycia domem tymczasowym,
                współpracy, wpłat, darowizn rzeczowych, wysyłania zapytań o psa, prośby o kod
                promocyjny na rejestrację chipa lub zapraszania na wydarzenia organizowane przez
                Fundację Sterczące Uszy,
              </li>
              <li>
                pokazania opinii o Fundacji Sterczące Uszy i umieszczania podziękowań na naszej
                stronie internetowej,
              </li>
              <li>
                wszelkich działań poprzez media społecznościowe, które mają na celu poprawę warunków
                i przyspieszenie adopcji i opieki dla naszych podopiecznych,
              </li>
              <li>
                zebrania informacji niezbędnych do przystąpienia do procesu adopcyjnego i bycia
                domem tymczasowym,
              </li>
              <li>
                kompletowania umów i niezbędnych oświadczeń przy adopcji i o bycie domem
                tymczasowym,
              </li>
              <li>
                w zakresie niezbędnym do wypełniania prawnych zobowiązań wynikających z przepisów
                prawa powszechnie obowiązującego,
              </li>
              <li>
                marketingu własnych działań, badania rynku i demograficznych oraz zachowań i
                preferencji osób korzystających z naszej strony, a także prowadzenia statystyk
                oglądalności naszej strony, do personalizacji jej zawartości oraz zapewnienia
                sprawnego działania,
              </li>
              <li>
                w celach statystycznych, aby optymalizować przyszłe działania związane z
                prowadzeniem strony internetowej.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-xl font-bold md:text-2xl lg:text-3xl">
              Na jakiej podstawie możemy przetwarzać Twoje dane osobowe?
            </h2>

            <ul className="list-inside list-disc space-y-4 text-base md:text-lg">
              <li>
                Przetwarzamy Twoje dane na podstawie wyrażonej przez Ciebie zgody zgodnie z art. 6
                ust. 1 lit. a) Rozporządzenia 2016/679 z dnia 27 kwietnia 2016 r. (dalej również:
                "RODO") - w przypadku przetwarzania Twoich danych w określonych kanałach komunikacji
                z Tobą, a także w przypadku wyrażenia zgody na przekazanie nam Twoich danych
                osobowych, gdy przekazałeś Fundacji Sterczące Uszy darowiznę w drodze 1,5% podatku
                dochodowego (zgoda jest umieszczona na formularzu PIT-OP),
              </li>
              <li>
                Przetwarzamy Twoje dane, jeżeli jest to niezbędne do wykonania umowy, której jesteś
                stroną (np. umowa adopcji, bycia domem tymczasowym darowizny rzeczowej czy
                pieniężnej) zgodnie z art. 6 ust. 1 lit. b) RODO,
              </li>
              <li>
                Przetwarzamy Twoje dane, jeżeli jest to niezbędne do wypełnienia obowiązku prawnego
                ciążącego na Fundacji Sterczące Uszy zgodnie z art. 6 ust. 1 lit. c) RODO - w
                zakresie obowiązków względem organu nadzorującego, czy też w celu wywiązania się z
                obowiązków wynikających między innymi z ustawy o rachunkowości, ustawy o
                działalności pożytku publicznego i wolontariacie czy przepisów podatkowych, jak
                również realizacji statutu Fundacji Sterczące Uszy.
              </li>
              <li>
                Na podstawie uzasadnionego interesu administratora danych, zgodnie z art. 6 ust. 1
                lit. f) RODO, którym jest pozyskiwanie funduszy na działalność pożytku publicznego -
                w przypadku przetwarzania Twoich danych do kontaktu z Tobą, przekazywania Ci
                materiałów informacyjnych (np. wysyłka komunikacji papierowej do Darczyńców),
                prowadzenie komunikacji z Tobą oraz zapewnienia sprawnego działania strony
                internetowej Fundacji Sterczące Uszy.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-xl font-bold md:text-2xl lg:text-3xl">
              Informacje o odbiorcach danych osobowych
            </h2>
            <p className="text-base md:text-lg">
              Odbiorcami Twoich danych osobowych będą działacze i wolontariusze Fundacji Sterczące
              Uszy odpowiadający za bieżące akcje i opiekę nad zwierzętami lub odpowiedzialni za
              usprawnianie jej działań, a także za przeprowadzenie i pomoc przy Twojej procedurze
              adopcyjnej i o bycie domem tymczasowym. Twoje dane osobowe możemy przekazywać także
              naszym księgowym.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-xl font-bold md:text-2xl lg:text-3xl">
              Okres przetwarzania danych osobowych
            </h2>

            <ul className="list-inside list-disc space-y-3 text-base md:text-lg">
              <li>
                w przypadku adopcji zwierzęcia do czasu zgłoszenia przez adoptującego zgonu
                zwierzęcia lecz nie dłużej niż przez 10 lat od zakończenia procedury adopcyjnej,
              </li>
              <li>
                w przypadku gdy nie dojdzie do adopcji - Twoje dane osobowe zostaną usunięte
                niezwłocznie po zakończeniu procedury adopcyjnej,
              </li>
              <li>
                w przypadku przekazania nam darowizny (samodzielnie czy jako 1,5% podatku) Twoje
                dane osobowe przetwarzamy odpowiednio i w niezbędnym zakresie przez okres
                odpowiadający terminom wynikającym z powszechnie obowiązującego prawa, w tym
                Ordynacji podatkowej, Ustawy o rachunkowości i Kodeksu Cywilnego (termin
                przedawnienia roszczeń),
              </li>
              <li>
                w przypadku korespondencji mailowej czy standardowej drogą pocztową oraz w przypadku
                zamieszczenia opinii czy podziękowań, Twoje dane będziemy przetwarzać do momentu
                wycofania przez Ciebie takiej zgody lub też zgłoszenia przez Ciebie sprzeciwu wobec
                przetwarzania przez nas Twoich danych.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-xl font-bold md:text-2xl lg:text-3xl">
              Jakie są Twoje uprawnienia dotyczące danych osobowych?
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">Prawo dostępu do danych</h3>
                <p className="text-base md:text-lg">
                  Przysługuje Ci prawo uzyskania od nas potwierdzenia, czy przetwarzamy Twoje dane
                  osobowe, a jeżeli ma to miejsce, prawo do uzyskania dostępu do nich, w tym
                  otrzymania ich kopii, oraz uzyskania poszczególnych informacji np. na temat celów
                  przetwarzania danych, na podstawie art. 15 RODO.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">
                  Prawo żądania sprostowania danych
                </h3>
                <p className="text-base md:text-lg">
                  Przysługuje Ci prawo żądania od nas niezwłocznego sprostowania czy uzupełnienia
                  dotyczących Ciebie danych osobowych, które są nieprawidłowe, na podstawie art. 16
                  RODO.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">
                  Prawo do żądania usunięcia danych („prawo do bycia zapomnianym")
                </h3>
                <p className="text-base md:text-lg">
                  Przysługuje Ci prawo żądania od nas niezwłocznego usunięcia Twoich danych
                  osobowych, a my mamy obowiązek bez zbędnej zwłoki usunąć Twoje dane osobowe, o ile
                  prawo nie nakazuje nam dalszego ich przetwarzania lub nie występują inne
                  przesłanki uniemożliwiające realizację żądania, na podstawie art. 17 RODO.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">
                  Prawo ograniczenia przetwarzania danych
                </h3>
                <p className="text-base md:text-lg">
                  Przysługuje Ci prawo do żądania od nas nieprzetwarzania Twoich danych w inny
                  sposób niż tylko ich przechowywanie na czas rozpatrzenia przez nas Twojego innego
                  żądania w zakresie danych osobowych, na podstawie art. 18 RODO.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">
                  Prawo do przenoszenia danych
                </h3>
                <p className="text-base md:text-lg">
                  Przysługuje Ci prawo otrzymania od nas w ustrukturyzowanym, powszechnie używanym
                  formacie nadającym się do odczytu maszynowego lub innej preferowanej przez Ciebie
                  formy, Twoich danych osobowych, oraz prawo do przesłania tych danych osobowych
                  innemu administratorowi bez przeszkód ze strony administratora, któremu
                  dostarczono te dane osobowe, na podstawie art. 20 RODO.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">
                  Prawo wniesienia sprzeciwu
                </h3>
                <p className="text-base md:text-lg">
                  Przysługuje Ci prawo do wniesienia sprzeciwu wobec przetwarzania przez nas Twoich
                  danych, jeśli przetwarzamy je na mocy naszego uzasadnionego interesu lub w
                  interesie publicznym, a także jeśli przetwarzamy je w celu marketingowym, na
                  podstawie art. 21 RODO.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">Prawo wycofania zgody</h3>
                <p className="text-base md:text-lg">
                  Przysługuje Ci prawo, aby w dowolnym momencie wycofać zgodę, na podstawie której
                  przetwarzamy Twoje dane. Wycofanie zgody nie wpływa na zgodność z prawem
                  przetwarzania, którego dokonano na podstawie zgody przed jej wycofaniem, na
                  podstawie art. 7 ust. 3 RODO.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-xl font-bold md:text-2xl lg:text-3xl">
              Wycofanie zgody na przetwarzanie danych osobowych
            </h2>
            <p className="mb-4 text-base md:text-lg">
              W każdym momencie możesz cofnąć udzieloną nam zgodę na przetwarzanie danych osobowych
              w formularzach czy do prowadzenia z Tobą komunikacji, odnośnie adopcji czy bycia domem
              tymczasowym, współpracy, wpłat, darowizn rzeczowych, wysyłania zapytań o psa, prośby o
              kod promocyjny na rejestrację chipa lub zapraszania na wydarzenia organizowane przez
              Fundację Sterczące Uszy.
            </p>
            <p className="mb-4 text-base md:text-lg">
              Usunięcie danych nastąpi automatycznie po wysłaniu na maila{" "}
              <a href={`mailto:${globalData.email}`} className="text-primary-500 hover:underline">
                {globalData.email}
              </a>{" "}
              prośby o wycofanie zgody.
            </p>
            <p className="text-base md:text-lg">
              Musisz jednak pamiętać, że wycofanie zgody w tym zakresie oznacza jedynie usunięcie
              Twoich danych przetwarzanych przez nas w tym celu, jednak ponieważ adoptowałeś zwierzę
              lub przekazałeś nam darowiznę to mogą ciążyć na nas obowiązki prawne, na podstawie
              których musimy przetwarzać Twoje dane także po wycofaniu przez Ciebie zgody. Jest tak,
              ponieważ podstawą prawną przetwarzania Twoich danych w przypadku adopcji czy
              przekazania nam darowizny jest łącząca nas umowa adopcyjna lub darowizny, a także
              ciążące na Fundacji Sterczące Uszy obowiązki prawne.
            </p>
            <p className="mt-4 text-base md:text-lg">
              W celu realizacji powyższych uprawnień lub uzyskania dodatkowych informacji na temat
              przetwarzania Twoich danych, skontaktuj się z nami na maila{" "}
              <a href={`mailto:${globalData.email}`} className="text-primary-500 hover:underline">
                {globalData.email}
              </a>
              .
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-xl font-bold md:text-2xl lg:text-3xl">
              Do kogo zgłaszać zastrzeżenia w zakresie ochrony danych?
            </h2>
            <p className="mb-4 text-base md:text-lg">
              W przypadku gdy masz zastrzeżenia co do sposobu, w jaki przetwarzamy Twoje dane,
              prosimy w pierwszej kolejności o kontakt z nami za pomocą adresu e-mail:{" "}
              <a href={`mailto:${globalData.email}`} className="text-primary-500 hover:underline">
                {globalData.email}
              </a>
              .
            </p>
            <p className="text-base md:text-lg">
              Jednocześnie informujemy, że przysługuje Ci prawo do wniesienia skargi do organu
              nadzorczego zajmującego się ochroną danych osobowych, tj. Prezesa Urzędu Ochrony
              Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-xl font-bold md:text-2xl lg:text-3xl">
              Dlaczego prosimy o Twoje dane?
            </h2>
            <p className="text-base md:text-lg">
              Podanie przez Adoptującego danych osobowych jest dobrowolne, lecz niezbędne do
              realizacja procesu adopcji czy bycia domem tymczasowym. Wyrażenie zgody na przekazanie
              Fundacji Sterczące Uszy Twoich danych osobowych podanych na formularzu PIT-OP w
              związku z przekazaniem 1,5% podatku dochodowego jest dobrowolne i nie jest niezbędne
              do przekazania nam 1,5% podatku. W pozostałych przypadkach podanie danych osobowych
              jest dobrowolne. Masz prawo w dowolnym momencie wnieść sprzeciw wobec przetwarzania
              danych w oparciu o prawnie uzasadniony interes na podstawie art. 6 ust. 1 lit. f RODO.
            </p>
          </section>
        </section>
      </main>

      <Cta variant="contact" />

      <Footer />
    </div>
  )
}
