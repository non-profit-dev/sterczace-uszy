import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { ExternalLink } from "lucide-react"

import { Footer, Navigation } from "@/app/sections"
import { Hero } from "@/components/hero"
import { Button } from "@/components/ui"
import { getGlobalData } from "@/lib/contentful"

export const metadata: Metadata = {
  title: "Adopcja za granicę",
}

export default async function InternationalAdoption() {
  const globalData = await getGlobalData()
  return (
    <div className="flex flex-col items-center justify-center">
      <Navigation />

      <Hero
        subtitle="Wyjazd poza Polskę"
        title="Adopcja za granicę"
        descriptions={[
          "Tutaj znajdziesz wszystkie niezbędne informacje dotyczące procedur, dokumentów oraz opieki nad zwierzęciem podczas podróży i po przybyciu do nowego domu.",
        ]}
      />

      <main className="flex w-full max-w-6xl flex-col items-center px-4">
        <section className="w-full bg-white py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 flex max-w-3xl flex-col gap-4">
              <h2 className="text-3xl lg:text-5xl">Warunki adopcji za granicę</h2>
              <p className="text-xl">
                Adopcja za granicę przebiega podobnie do standardowej adopcji. Jedynym dodatkowym
                elementem jest kwarantanna.
              </p>

              <p className="text-xl font-semibold">
                Sprawdź jakie są 4 warunki, aby stała się możliwa.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:gap-20">
            <div className="lg:w-1/3">
              <Image
                src="/international-adoption.png"
                alt=""
                width={600}
                height={400}
                className="h-full w-auto rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col gap-10 pt-6 lg:w-2/3">
              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-500 lg:h-18 lg:w-18">
                    <p className="font-mogra text-3xl text-white lg:text-4xl">1</p>
                  </div>
                </div>
                <div>
                  <p className="text-primary-500 mb-2 text-xl font-bold lg:text-2xl">Wiek</p>
                  <p className="text-lg">
                    Pies lub kot musi mieć ukończone 3 miesiące przed podróżą za granicę.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-500 lg:h-18 lg:w-18">
                    <p className="font-mogra text-3xl text-white lg:text-4xl">2</p>
                  </div>
                </div>
                <div>
                  <p className="text-primary-500 mb-2 text-xl font-bold lg:text-2xl">Opłata</p>
                  <p className="text-lg">
                    Opłacisz szczepienie na wściekliznę, paszport i jeśli potrzeba chip.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-500 lg:h-18 lg:w-18">
                    <p className="font-mogra text-3xl text-white lg:text-4xl">3</p>
                  </div>
                </div>
                <div>
                  <p className="text-primary-500 mb-2 text-xl font-bold lg:text-2xl">Kwarantanna</p>
                  <p className="text-lg">
                    Ulokujesz psa w zaufanym miejscu na czas kwarantanny poszczepiennej (21 dni).
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-500 lg:h-18 lg:w-18">
                    <p className="font-mogra text-3xl text-white lg:text-4xl">4</p>
                  </div>
                </div>
                <div>
                  <p className="text-primary-500 mb-2 text-xl font-bold lg:text-2xl">Odbiór</p>
                  <p className="text-lg">
                    Współpracujemy z organizacją{" "}
                    <a
                      href="https://www.facebook.com/polnischehundeu.katzen/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-500 underline"
                    >
                      Polnische Hunde und Katzen
                    </a>
                    , która organizuje regularne transporty zwierząt za granicę. Dzięki temu nie
                    musisz odbierać zwierzaka osobiście w Polsce.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 flex max-w-4xl flex-col gap-12">
            <div>
              <h2 className="mb-6 text-3xl lg:text-4xl">
                Adopcja zwierzaka młodszego niż 3 miesiące
              </h2>

              <div className="flex flex-col gap-4">
                <p className="text-xl">
                  Adopcja zwierzęcia (psa lub kota) za granicę, które nie ukończyło jeszcze 3.
                  miesiąca życia, jest możliwa. W takiej sytuacji konieczne jest jednak zapewnienie
                  mu bezpiecznego miejsca pobytu do momentu ukończenia 3 miesięcy oraz dopełnienia
                  wszystkich wymaganych formalności.
                </p>

                <p className="text-xl">
                  Może to być pobyt u zaufanej rodziny lub w domu tymczasowym we współpracy z
                  Fundacją. W przypadku podpisania umowy o dom tymczasowy koszty opieki
                  weterynaryjnej oraz karmy pokrywa osoba adoptująca.
                </p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl lg:text-4xl">Wyjątkowe sytuacje</h2>

              <div className="flex flex-col gap-4">
                <p className="text-xl">
                  W szczególnych przypadkach, po wcześniejszym ustaleniu i za zgodą Fundacji,
                  istnieje możliwość pozostawienia zwierzęcia w domu tymczasowym do czasu wykonania
                  wymaganych szczepień oraz odbycia obowiązkowej kwarantanny poszczepiennej.
                </p>

                <p className="text-xl">
                  W takiej sytuacji osoba adoptująca pokrywa koszty opieki weterynaryjnej, karmy
                  oraz innych niezbędnych wydatków, które są wcześniej ustalane z Domem Tymczasowym.
                </p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl lg:text-4xl">
                Ankieta i umowa adopcyjna – adopcja za granicę
              </h2>

              <div className="flex flex-col gap-4">
                <p className="text-xl">
                  W przypadku adopcji za granicę obowiązuje ta sama ankieta adopcyjna, co przy
                  adopcjach krajowych.
                </p>

                <p className="text-xl">
                  Umowa adopcyjna zawiera natomiast dodatkowe zapisy dotyczące pobytu zwierzęcia w
                  Domu Tymczasowym oraz zasad jego utrzymania do momentu wyjazdu.
                </p>

                <div className="mt-6 flex flex-col items-start gap-8">
                  {globalData.preAdoptionSurveyLink && (
                    <Button asChild variant="link" size="sm">
                      <a
                        href={globalData.preAdoptionSurveyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-5 w-5" />
                        Pobierz ankietę adopcyjną
                      </a>
                    </Button>
                  )}

                  {globalData.adoptionAgreement && (
                    <Button asChild variant="link" size="sm">
                      <a
                        href={globalData.adoptionAgreement}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-5 w-5" />
                        Pobierz umowę adopcyjną
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl lg:text-4xl">Warunki wyjazdu zwierzęcia poza Polskę</h2>

              <div className="flex flex-col gap-4">
                <p className="text-xl">
                  Wyjazd zwierzęcia za granicę jest możliwy po podpisaniu umowy adopcyjnej oraz
                  spełnieniu wszystkich jej warunków. Ma to na celu zapewnienie bezpieczeństwa i
                  dobra zwierzęcia na każdym etapie procesu adopcyjnego.
                </p>

                <p className="text-xl">
                  W przypadku braku możliwości spełnienia ustaleń zawartych w umowie Fundacja
                  zastrzega sobie prawo do wstrzymania adopcji i poszukania innego, odpowiedniego
                  domu dla zwierzęcia.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
