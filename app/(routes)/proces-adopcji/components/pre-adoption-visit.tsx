import { Dog, Home, Info, Lightbulb, MessageCircle } from "lucide-react"

import { Section } from "@/components/section"

export function PreAdoptionVisit() {
  return (
    <Section className="bg-secondary-200">
      <Section.Header>
        <p className="text-primary-500 font-bold uppercase">Wizyta przedadopcyjna</p>
        <h2 className="text-3xl lg:text-5xl">Jak wygląda wizyta przedadopcyjna?</h2>
        <p className="text-xl">
          To nie kontrola – to spotkanie, które pomaga nam poznać się lepiej i rozwiać wszystkie
          Twoje wątpliwości zanim zwierzę trafi do nowego domu.
        </p>
      </Section.Header>

      <Section.Content className="mb-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-lg bg-white p-4 lg:p-8">
          <div className="bg-primary-50 mb-4 inline-flex items-center justify-center rounded p-3">
            <Home className="text-primary-500 h-5 w-5 lg:h-7 lg:w-7" />
          </div>

          <h3 className="mb-3 text-xl lg:text-2xl">Sprawdzamy warunki</h3>
          <p>
            Zwracamy uwagę na bezpieczeństwo miejsca gdzie będzie przebywało zwierzę – ogrodzenie,
            schody, potencjalne zagrożenia. Doradzamy jak je wyeliminować.
          </p>
        </div>

        <div className="rounded-lg bg-white p-4 lg:p-8">
          <div className="bg-primary-50 mb-4 inline-flex items-center justify-center rounded p-3">
            <MessageCircle className="text-primary-500 h-5 w-5 lg:h-7 lg:w-7" />
          </div>
          <h3 className="mb-3 text-xl lg:text-2xl">Rozmawiamy</h3>
          <p>
            Omawiamy potrzeby pupila, jego charakter, przeszłość i wyzwania. Upewniamy się, że wiesz
            jak zaopiekować się nowym członkiem rodziny.
          </p>
        </div>

        <div className="rounded-lg bg-white p-4 lg:p-8">
          <div className="bg-primary-50 mb-4 inline-flex items-center justify-center rounded p-3">
            <Lightbulb className="text-primary-500 h-5 w-5 lg:h-7 lg:w-7" />
          </div>
          <h3 className="mb-3 text-xl lg:text-2xl">Doradzamy</h3>
          <p>
            Udzielamy porad odnośnie żywienia, wychowania, wyboru weterynarza czy behawiorysty. To
            czas na wszystkie Twoje pytania!
          </p>
        </div>

        <div className="rounded-lg bg-white p-4 lg:p-8">
          <div className="bg-primary-50 mb-4 inline-flex items-center justify-center rounded p-3">
            <Dog className="text-primary-500 h-5 w-5 lg:h-7 lg:w-7" />
          </div>
          <h3 className="mb-3 text-xl lg:text-2xl">Czasem przywozimy psa</h3>
          <p>
            Jeśli to możliwe, przyjeżdżamy z Twoim przyszłym pupilem, żeby mógł od razu poznać nowy
            dom i zobaczyć jak reaguje na otoczenie.
          </p>
        </div>
      </Section.Content>

      <div className="border-secondary-600 rounded border-l-4 bg-white p-6">
        <div className="mb-3 flex items-center gap-2">
          <Info className="text-secondary-600 h-5 w-5" />
          <p className="text-lg font-bold">Jak się przygotować?</p>
        </div>

        <p>
          Nie musisz robić generalnych porządków! Zadbaj jedynie, aby (o ile to możliwe) byli obecni
          wszyscy domownicy. Chcemy poznać prawdziwą Was, nie wersję idealną. W wyjątkowych
          sytuacjach wizyta może odbyć się online poprzez Messenger, Zoom lub Google Meet.
        </p>
      </div>
    </Section>
  )
}
