import Image from "next/image"

import { Check, Heart, PartyPopper, PawPrint } from "lucide-react"

export function AdoptionSteps() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-14 lg:py-24">
      <div className="mb-10 flex max-w-3xl flex-col gap-2">
        <p className="text-primary-500 font-bold uppercase">Proces adopcyjny krok po kroku</p>
        <h2 className="text-3xl lg:text-5xl">Od zainteresowania do szczęśliwej adopcji</h2>
      </div>

      <div className="relative">
        <div className="bg-primary-200 absolute top-0 bottom-0 left-12 hidden w-1 lg:block"></div>

        <div className="space-y-14">
          <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:gap-10">
            <div className="bg-primary-500 font-mogra z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-3xl font-bold text-white lg:h-24 lg:w-24 lg:text-6xl">
              1
            </div>
            <div className="flex-1">
              <h3 className="mb-3 text-2xl font-bold lg:text-3xl">Wypełniasz ankietę</h3>
              <p className="mb-4 text-lg lg:text-xl">
                Wybrałeś swojego pupila? Czas nam o tym powiedzieć! Wypełnij ankietę przedadopcyjną
                - to sposób żebyśmy poznali Ciebie, Twoje warunki i oczekiwania.
              </p>

              <p className="rounded-lg bg-gray-100 p-3">
                My analizujemy Twoją ankietę (zwykle 2-5 dni roboczych) i sprawdzamy, czy warunki
                pasują do potrzeb wybranego zwierzaka. Jeśli wszystko gra - dostaniesz od nas maila
                z akceptacją i propozycją terminu wizyty.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:gap-10">
            <div className="bg-primary-500 font-mogra z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-3xl font-bold text-white lg:h-24 lg:w-24 lg:text-6xl">
              2
            </div>
            <div className="flex-1">
              <h3 className="mb-3 text-2xl font-bold lg:text-3xl">Poznajemy się</h3>
              <p className="text-lg lg:text-xl">
                Przyjeżdżamy do Ciebie na wizytę przedadopcyjną podczas której:
              </p>

              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="shrink-0 font-bold">
                    <Check className="h-6 w-6" />
                  </span>
                  <p>Sprawdzamy warunki - ogrodzenie, schody, bezpieczne miejsca dla psa</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="shrink-0 font-bold">
                    <Check className="h-6 w-6" />
                  </span>
                  <p>Rozmawiamy o pupilu - jego potrzebach, charakterze, wyzwaniach</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="shrink-0 font-bold">
                    <Check className="h-6 w-6" />
                  </span>
                  <p>Doradzamy - żywienie, wychowanie, wybór weterynarza</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="shrink-0 font-bold">
                    <Check className="h-6 w-6" />
                  </span>
                  <p>Odpowiadamy na pytania - teraz lub nigdy, pytaj o wszystko!</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:gap-10">
            <div className="bg-primary-500 font-mogra z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-3xl font-bold text-white lg:h-24 lg:w-24 lg:text-6xl">
              3
            </div>
            <div className="flex-1">
              <h3 className="mb-3 text-2xl font-bold lg:text-3xl">Podpisujemy umowę</h3>
              <p className="mb-4 text-lg lg:text-xl">
                Czas na formalności! Wysyłamy Ci umowę adopcyjną na maila. Możesz ją podpisać:
              </p>

              <ul className="ml-4 list-inside list-disc space-y-2 text-lg">
                <li>Online - cyfrowo, szybko i wygodnie poprzez platformę Autenti</li>
                <li>
                  Stacjonarnie - przy odbiorze pupila, jak wolisz tradycyjnie (jeśli rodzina
                  adopcyjna mieszka w Poznaniu lub Luboniu)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 rounded-lg border p-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
          <div className="flex-1/3">
            <Image src="/adoption-success.png" alt="" width={800} height={400} />
          </div>

          <div className="flex-2/3">
            <h3 className="mb-5 flex items-center gap-2 text-xl lg:text-2xl">
              <PartyPopper className="h-7 w-7" />I to wszystko!
            </h3>
            <p className="mb-4 text-lg lg:text-xl">
              Teraz możesz odebrać swojego pupila i rozpocząć wspólną przygodę!
            </p>
            <p className="mb-3 text-lg lg:text-xl">
              Pamiętaj - nie jesteś sam! Jesteśmy z Tobą w kontakcie i służymy pomocą przez cały
              czas.
            </p>
            <p className="mt-8 flex items-center gap-2 text-lg font-bold lg:text-xl">
              Witaj w rodzinie Sterczących Uszu! <PawPrint className="text-primary-500 h-6 w-6" />
              <Heart className="text-primary-500 h-6 w-6" />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
