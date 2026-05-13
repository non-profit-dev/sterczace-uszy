import type { Metadata } from "next"
import Image from "next/image"

import { Check, Heart, ScrollText, Users } from "lucide-react"

import { Achievements, Cta, Footer, Navigation, Team, Testimonials } from "@/app/sections"
import { Hero } from "@/components/hero"
import { getManagementPeople, getTestimonials } from "@/lib/contentful"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "O fundacji",
  description:
    "Poznaj misję, zespół i działania Fundacji Sterczące Uszy, która pomaga bezdomnym psom i kotom znaleźć bezpieczny dom.",
  path: "/fundacja",
})

export default async function About() {
  let testimonials
  let managementPeople
  try {
    ;[testimonials, managementPeople] = await Promise.all([
      getTestimonials(),
      getManagementPeople(),
    ])
  } catch (error) {
    console.error("Failed to fetch data from Contentful:", error)
    testimonials = undefined
    managementPeople = undefined
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <Navigation />

      <Hero
        subtitle="Fundacja Sterczące Uszy"
        title="Poznaj nas lepiej"
        descriptions={[
          "Ratujemy zwierzęta, które straciły dom lub nigdy go nie miały.",
          "Zapewniamy im leczenie, opiekę i ciepłe schronienie, aż znajdą swoją idealną rodzinę.",
        ]}
        backgroundImage="/about.png"
      />

      <main className="mt-4 flex w-full flex-col items-center">
        <section className="flex w-full max-w-5xl flex-col gap-8 px-4 py-12 md:flex-row lg:gap-16 lg:py-24">
          <div className="flex flex-col gap-2 md:max-w-sm lg:mt-8 lg:max-w-lg">
            <p className="text-primary-500 font-bold uppercase">Nasza historia</p>
            <h2 className="text-3xl lg:text-5xl">Z pasji do misji</h2>

            <div className="mt-6 flex flex-col items-start gap-y-4 text-xl">
              <p>
                14 kwietnia 2022 – to data, kiedy przyjaźń dwóch miłośniczek zwierząt przerodziła
                się w Fundację Sterczące Uszy.
              </p>

              <p>
                Nasza historia zaczęła się od domów tymczasowych, bezsennych nocy z chorymi
                szczeniakami i niezliczonej ilości zdjęć „do adopcji". Działałyśmy wolontariacko, aż
                pewnego dnia pomyślałyśmy: a gdyby tak oficjalnie?
              </p>

              <p>I stało się.</p>

              <p>
                Dziś, bez własnego schroniska, ale z całą armią wspaniałych domów tymczasowych,
                ratujemy życie zwierzętom, które świat odrzucił. Każdego dnia szukamy dla nich tego
                jedynego, właściwego domu.
              </p>

              <p>
                Żyjemy dzięki ludziom, którzy tak jak my nie umieją przejść obojętnie. A plany?
                Większe niż kiedykolwiek. Więcej miejsc, więcej uratowanych istnień, więcej
                szczęśliwych zakończeń.
              </p>

              <p>Nie poddajemy się. Działamy. I nie zamierzamy przestać.</p>
            </div>
          </div>

          <div className="w-full">
            <Image
              src="/about-section-image.png"
              alt=""
              width={200}
              height={50}
              className="h-auto w-full"
            />
          </div>
        </section>

        <Team people={managementPeople} />

        <section className="flex w-full max-w-5xl flex-col gap-8 px-4 py-12 lg:py-24">
          <div>
            <p className="text-primary-500 font-bold uppercase">Nasze wartości</p>
            <h2 className="mt-2 text-3xl lg:text-5xl">Pomagamy kierując się wartościami</h2>
          </div>

          <p className="text-lg">
            Stawiamy na dobre relacje i prowadzimy otwarty dialog z rodzinami adopcyjnymi.
            Angażujemy się w nasze działania z wielką pasją, dbając o dobre warunki i opiekę dla
            każdego zwierzaka, którego ratujemy.
          </p>

          <p className="text-lg font-semibold">
            Wartości stanowią podstawę naszej fundacji i kierują naszymi działaniami.
          </p>

          <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:gap-20">
            <div className="lg:w-2/5">
              <Image
                src="/values.png"
                alt=""
                width={600}
                height={400}
                className="h-full w-auto rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col gap-8 lg:w-3/5">
              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="bg-primary-500 flex h-14 w-14 items-center justify-center rounded-full lg:h-16 lg:w-16">
                    <Heart className="h-5 w-5 text-white lg:h-7 lg:w-7" fill="currentColor" />
                  </div>
                </div>
                <div>
                  <p className="text-primary-500 mb-2 text-xl font-bold lg:text-2xl">Miłość</p>
                  <p className="text-lg">
                    Kieruje naszą pasją i zaangażowaniem w ratowanie zwierząt, a każdego
                    podopiecznego traktujemy z uczuciem i troską.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="bg-primary-500 flex h-14 w-14 items-center justify-center rounded-full lg:h-16 lg:w-16">
                    <Check className="h-5 w-5 text-white lg:h-7 lg:w-7" strokeWidth={3} />
                  </div>
                </div>
                <div>
                  <p className="text-primary-500 mb-2 text-xl font-bold lg:text-2xl">
                    Odpowiedzialność
                  </p>
                  <p className="text-lg">
                    Bierzemy opowiedzialność za każdą adopcję, za każdą decyzję weterynaryjną, za
                    wybór rodziny.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="bg-primary-500 flex h-14 w-14 items-center justify-center rounded-full lg:h-16 lg:w-16">
                    <Users className="h-5 w-5 text-white lg:h-7 lg:w-7" strokeWidth={2.5} />
                  </div>
                </div>
                <div>
                  <p className="text-primary-500 mb-2 text-xl font-bold lg:text-2xl">Zaufanie</p>
                  <p className="text-lg">
                    Każdą rodzinę adopcyjną poznajemy osobiście, odpowiadamy na wszystkie pytania i
                    jesteśmy w kontakcie długo po adopcji. Bo adopcja to początek, nie koniec naszej
                    relacji.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="bg-primary-500 flex h-14 w-14 items-center justify-center rounded-full lg:h-16 lg:w-16">
                    <ScrollText className="h-5 w-5 text-white lg:h-7 lg:w-7" strokeWidth={2.5} />
                  </div>
                </div>
                <div>
                  <p className="text-primary-500 mb-2 text-xl font-bold lg:text-2xl">
                    Transparentność
                  </p>
                  <p className="text-lg">
                    Każda złotówka policzona, każda decyzja wytłumaczona. Działamy jawnie, bo wiemy,
                    że Wasze wsparcie to wyraz zaufania.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-secondary-200 w-full">
          <Achievements />
        </div>

        <Testimonials testimonials={testimonials} />
      </main>

      <Cta variant="contact" />

      <Footer />
    </div>
  )
}
