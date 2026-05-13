import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import {
  Check,
  Heart,
  HeartHandshake,
  Home as HomeIcon,
  MoveRight,
  Shield,
  Stethoscope,
  Users,
} from "lucide-react"

import { Achievements, Announcement, Collabo, Cta, Footer, Navigation } from "@/app/sections"
import { PetCard } from "@/components/pet-card"
import { Section } from "@/components/section"
import { Button } from "@/components/ui"
import {
  formatAnimalAge,
  getAnimals,
  getGlobalData,
  getPartnerships,
  type AnimalFields,
} from "@/lib/contentful"

export const metadata: Metadata = {
  title: {
    absolute: "Fundacja Sterczące Uszy",
  },
}

export default async function Home() {
  let globalData
  let partnerships
  let animals: AnimalFields[] = []
  try {
    globalData = await getGlobalData()
    partnerships = await getPartnerships()
    animals = await getAnimals()
  } catch (error) {
    console.error("Failed to fetch data from Contentful:", error)
    partnerships = undefined
  }

  const previewAnimals = animals.slice(0, 8)

  return (
    <div className="flex flex-col items-center justify-center">
      <Announcement />

      <Navigation />

      <header className="w-full bg-gray-700 pt-10 md:pb-12 lg:pt-10 lg:pb-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 md:flex-row md:gap-18">
          <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
            <p className="text-primary-500 font-bold uppercase">Fundacja Sterczące Uszy</p>
            <h1 className="text-4xl font-bold text-white lg:text-6xl">
              Każdy zasługuje na kochający dom
            </h1>

            <p className="text-xl text-white lg:mr-20 lg:text-2xl">
              Ratujemy zwierzęta, które straciły dom lub nigdy go nie miały. Zapewniamy im leczenie,
              opiekę i ciepłe schronienie, aż znajdą swoją idealną rodzinę.
            </p>

            <Button asChild className="mt-3">
              <Link href="#do-adopcji">Poznaj naszych podopiecznych</Link>
            </Button>
          </div>

          <div className="w-full px-6 md:w-7xl">
            <Image
              src="/hero-background.png"
              alt=""
              width={1030}
              height={1086}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </header>

      <main className="flex w-full flex-col items-center">
        <section className="mt-10 grid w-full max-w-6xl grid-cols-1 gap-6 px-4 md:-mt-8 md:grid-cols-3 lg:-mt-26 lg:gap-10">
          <div className="flex flex-col gap-6 rounded-2xl border bg-white p-6 lg:p-8">
            <Users className="text-primary-500 h-7 w-7" />
            <h3 className="text-xl lg:text-2xl">O fundacji</h3>
            <p>
              Najważniejszym celem naszej organizacji jest szerzenie pomocy bezdomnym zwierzakom.
            </p>
            <Link
              href="/fundacja"
              className="text-primary-500 flex items-center gap-2 font-semibold transition-all hover:gap-3"
            >
              Misja fundacji <MoveRight className="w-3.5" />
            </Link>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl border bg-white p-6 lg:p-8">
            <HomeIcon className="text-primary-500 h-7 w-7" />
            <h3 className="text-xl lg:text-2xl">Dom tymczasowy</h3>
            <p>Chcesz pomóc, ale nie jesteś gotowy na adopcję? Zostań domem tymczasowym.</p>
            <Link
              href="/wsparcie#dom-tymczasowy"
              className="text-primary-500 flex items-center gap-2 font-semibold transition-all hover:gap-3"
            >
              Sprawdź zasady <MoveRight className="w-3.5" />
            </Link>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl border bg-white p-6 lg:p-8">
            <HeartHandshake className="text-primary-500 h-7 w-7" />
            <h3 className="text-xl lg:text-2xl">Inne sposoby pomocy</h3>
            <p>
              Wolontariat, darowizny, zakupy z naszym linkiem - poznaj wszystkie sposoby na
              wsparcie.
            </p>
            <Link
              href="/wsparcie"
              className="text-primary-500 flex items-center gap-2 font-semibold transition-all hover:gap-3"
            >
              Wesprzyj nas <MoveRight className="w-3.5" />
            </Link>
          </div>
        </section>

        <Achievements />

        <section className="flex w-full max-w-5xl flex-col gap-8 px-4 pb-16 md:flex-row lg:gap-16 lg:pb-24">
          <div className="w-full">
            <Image
              src="/about-section-image.png"
              alt=""
              width={200}
              height={50}
              className="h-auto w-full"
            />
          </div>

          <div className="flex flex-col gap-2 md:max-w-sm lg:mt-8 lg:max-w-lg">
            <p className="text-primary-500 font-bold uppercase">O nas</p>
            <h2 className="text-3xl lg:text-5xl">Zwierzęta to nasza rodzina</h2>

            <div className="mt-6 flex flex-col items-start gap-y-4 text-xl">
              <p>
                Fundacja Sterczące Uszy powstała z pasji do pomagania. Przez lata byłyśmy
                wolontariuszkami i domami tymczasowymi dla dziesiątek bezdomnych zwierząt.
              </p>

              <p>
                Dziś jako fundacja ratujemy psy i koty z trudnych sytuacji - od podrzutków w
                kartonach po zwierzęta z zaniedbanych hodowli. Każdy nasz podopieczny dostaje szansę
                na godne życie: opiekę weterynaryjną, rehabilitację behawioralną i czas na
                znalezienie idealnego domu.
              </p>

              <p>Wierzymy, że razem możemy zmienić więcej niż każdy z nas z osobna.</p>
            </div>

            <Button asChild className="mt-6 self-start">
              <Link href="/fundacja">Poznaj nas lepiej</Link>
            </Button>
          </div>
        </section>

        <Section className="bg-secondary-200">
          <Section.Header align="center">
            <p className="text-primary-500 font-bold uppercase">Co robimy?</p>
            <h2 className="text-3xl lg:text-5xl">Nasze działania</h2>
            <p className="text-xl">
              Każdego dnia walczymy o lepsze jutro dla naszych podopiecznych. Od ratowania po
              znalezienie kochającego domu.
            </p>
          </Section.Header>

          <Section.Content align="center">
            <div className="flex flex-col justify-center gap-8 md:flex-row md:items-center lg:gap-14">
              <div className="flex flex-col gap-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white md:mx-auto lg:h-20 lg:w-20">
                  <Heart className="text-primary-500 m-4 h-6 w-6 lg:h-8 lg:w-8" />
                </div>

                <p className="text-2xl font-bold lg:text-3xl">Pomagamy</p>
                <ul className="flex flex-col gap-3 md:text-start">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5" />
                    <span>Pomagamy w adopcjach w Polsce i za granicą</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5" />
                    <span>Wspieramy przyszłe rodziny adopcyjne</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5" />
                    <span>Organizujemy wirtualne zbiórki</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white md:mx-auto lg:h-20 lg:w-20">
                  <Shield className="text-primary-500 m-4 h-6 w-6 lg:h-8 lg:w-8" />
                </div>

                <p className="text-2xl font-bold lg:text-3xl">Chronimy</p>
                <ul className="flex flex-col gap-3 md:text-start">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5" />
                    <span>Zapewniamy domy tymczasowe</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5" />
                    <span>Dbamy o profilaktykę i odporność</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5" />
                    <span>Szukamy różnych form realnej pomocy</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white md:mx-auto lg:h-20 lg:w-20">
                  <Stethoscope className="text-primary-500 h-6 w-6 lg:h-8 lg:w-8" />
                </div>

                <p className="text-2xl font-bold lg:text-3xl">Leczymy</p>
                <ul className="flex flex-col gap-3 md:text-start">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5" />
                    <span>Diagnozujemy i leczymy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5" />
                    <span>Szczepimy i sterylizujemy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5" />
                    <span>Otaczamy zwierzęta długoterminową opieką</span>
                  </li>
                </ul>
              </div>
            </div>

            {globalData?.facebook && (
              <Button asChild className="mt-12">
                <a href={globalData.facebook} target="_blank" rel="noopener noreferrer">
                  Sprawdź aktualności
                </a>
              </Button>
            )}
          </Section.Content>
        </Section>

        {previewAnimals.length > 0 && (
          <Section id="do-adopcji">
            <Section.Header>
              <p className="text-primary-500 font-bold uppercase">Nasi podopieczni</p>
              <h2 className="text-3xl lg:text-5xl">Czekają na Ciebie</h2>
              <p className="mt-2 text-xl">
                Oferujemy dom i schronienie dla psów i kotów. Dokładamy wszelkich starań, aby
                zapewnić im jak najlepsze życie. Jeśli chcesz pomóc, zapraszamy do sprawdzenia, kto
                czeka na nowy dom.
              </p>
            </Section.Header>

            <Section.Content>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {previewAnimals.map((animal) => (
                  <PetCard
                    key={animal.slug}
                    id={animal.slug}
                    name={animal.name}
                    image={animal.thumbnail.url}
                    age={formatAnimalAge(animal.dateOfBirth)}
                    location={animal.location}
                    gender={animal.gender?.toLowerCase() === "on" ? "on" : "ona"}
                    excerpt={animal.excerpt}
                  />
                ))}
              </div>
            </Section.Content>

            <Button asChild className="md:mx-auto lg:mt-8">
              <Link href="/do-adopcji">Zobacz wszystkich</Link>
            </Button>
          </Section>
        )}

        <Section className="bg-secondary-200">
          <Section.Header align="center">
            <p className="text-primary-500 font-bold uppercase">Adopcja to odpowiedzialność</p>
            <h2 className="text-3xl lg:text-5xl">Gotowy na kolejne lata razem?</h2>
            <p className="text-xl">
              Zanim otworzysz drzwi swojego domu, zadaj sobie kilka ważnych pytań.
            </p>
          </Section.Header>

          <Section.Content align="center">
            <div className="flex flex-col gap-6 md:flex-row lg:gap-14">
              <div className="flex flex-1 flex-col gap-6">
                <p className="text-primary font-mogra -mb-5 text-5xl font-bold lg:text-7xl">1.</p>
                <p className="text-2xl font-bold lg:text-3xl">Czy masz czas?</p>
                <p>
                  2-3 spacery dziennie, zabawa, treningi, wizyty u weterynarza. Pies potrzebuje Cię
                  każdego dnia – czy Twój tryb życia na to pozwala?
                </p>
              </div>

              <div className="flex flex-1 flex-col gap-6">
                <p className="text-primary font-mogra -mb-5 text-5xl font-bold lg:text-7xl">2.</p>
                <p className="text-2xl font-bold lg:text-3xl">Czy masz środki?</p>
                <p>
                  Karma, leczenie, szczepienia, kastracja, niespodziewane koszty weterynaryjne.
                  Przygotuj budżet na co najmniej 200-300 zł miesięcznie.
                </p>
              </div>

              <div className="flex flex-1 flex-col gap-6">
                <p className="text-primary font-mogra -mb-5 text-5xl font-bold lg:text-7xl">3.</p>
                <p className="text-2xl font-bold lg:text-3xl">Czy jesteś gotowy na zmiany?</p>
                <p>
                  Mniej spontanicznych wyjazdów, pogryzione buty, sierść na kanapie. Pies zmieni
                  Twoje życie – na lepsze, ale wymaga kompromisów.
                </p>
              </div>
            </div>
          </Section.Content>
        </Section>

        <Collabo partnerships={partnerships} />
      </main>

      <Cta variant="support" />

      <Footer />
    </div>
  )
}
