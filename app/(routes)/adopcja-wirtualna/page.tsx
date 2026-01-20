import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { Award, CreditCard, Heart, Mail, Search } from "lucide-react"

import { Cta, Footer, Navigation } from "@/app/sections"
import { Hero } from "@/components/hero"
import { Section } from "@/components/section"
import { Button } from "@/components/ui"
import { getGlobalData } from "@/lib/contentful"

export const metadata: Metadata = {
  title: "Adopcja wirtualna",
}

export default async function VirtualAdoption() {
  const globalData = await getGlobalData()

  return (
    <div className="flex flex-col items-center justify-center">
      <Navigation />

      <Hero
        subtitle="Pokaż dobre serce"
        title="Adopcja wirtualna"
        descriptions={[
          "Nie możesz adoptować? I tak możesz pomóc! Wybierz swojego pupila i adoptuj go wirtualnie.",
        ]}
      />

      <main className="flex w-full flex-col items-center">
        <Section>
          <Section.Header align="center">
            <p className="text-primary-500 font-bold uppercase">Prosto i skutecznie</p>
            <h2 className="text-3xl lg:text-5xl">Jak adoptować wirtualnie?</h2>
          </Section.Header>

          <Section.Content className="grid gap-8 md:grid-cols-3">
            <div className="lg:text-center">
              <div className="bg-primary-50 mb-4 inline-flex items-center justify-center rounded-full p-4 lg:p-6">
                <Search className="text-primary-500 h-6 w-6 lg:h-8 lg:w-8" />
              </div>
              <h3 className="mb-3 text-xl lg:text-2xl">1. Wybierz pupila</h3>
              <p>
                Zadecyduj, kto ma zostać Twoim wirtualnym przyjacielem i zapamiętaj jego imię.
                Możesz adoptować dowolną liczbę pupili.
              </p>
            </div>

            <div className="lg:text-center">
              <div className="bg-primary-50 mb-4 inline-flex items-center justify-center rounded-full p-4 lg:p-6">
                <CreditCard className="text-primary-500 h-6 w-6 lg:h-8 lg:w-8" />
              </div>
              <h3 className="mb-3 text-xl lg:text-2xl">2. Ustaw zlecenie stałe</h3>
              <p>
                Na swoim koncie bankowym ustaw polecenie przelewu. Koniecznie z dopiskiem:
                "darowizna i imię podopiecznego".
              </p>
            </div>

            <div className="lg:text-center">
              <div className="bg-primary-50 mb-4 inline-flex items-center justify-center rounded-full p-4 lg:p-6">
                <Mail className="text-primary-500 h-6 w-6 lg:h-8 lg:w-8" />
              </div>
              <h3 className="mb-3 text-xl lg:text-2xl">3. Wyślij potwierdzenie</h3>
              <p>
                Wyślij informację za pomocą formularza, żebyśmy mogli znalezć Twoją wpłatę i
                informować o stanie pupila.
              </p>
            </div>
          </Section.Content>

          <Button asChild className="mt-14 md:mx-auto">
            <Link href="/do-adopcji">
              <Search className="h-6 w-6" />
              Zobacz kto czeka na adopcję
            </Link>
          </Button>
        </Section>

        <Section className="bg-secondary-200">
          <Section.Header align="center">
            <h2 className="text-3xl lg:text-4xl">Co daje wirtualna adopcja?</h2>
          </Section.Header>

          <Section.Content className="mx-auto max-w-4xl">
            <div className="space-y-6">
              <div className="rounded-lg border bg-white p-6">
                <h3 className="mb-2 flex items-start gap-2 text-xl font-bold">
                  <Heart className="text-primary-500 mt-1 h-6 w-6 shrink-0" />
                  <span>Realną pomoc dla zwierzaka</span>
                </h3>
                <p className="ml-8">
                  Wpłacając, pomagasz nam zebrać środki na utrzymanie, leczenie, transport i
                  jedzenie dla niego, sprawiając, że pies ma pełną miskę. Dodatkowo, możemy go uczyć
                  nowych zachowań pod okiem behawiorysty.
                </p>
              </div>

              <div className="rounded-lg border bg-white p-6">
                <h3 className="mb-2 flex items-start gap-2 text-xl font-bold">
                  <Award className="text-primary-500 mt-1 h-6 w-6 shrink-0" />
                  <span>Certyfikat Wirtualnego Opiekuna</span>
                </h3>
                <p className="ml-8">
                  Otrzymasz swój indywidualny certyfikat w podziękowaniu od wybranego podopiecznego
                  i Fundacji.
                </p>
              </div>

              <div className="rounded-lg border bg-white p-6">
                <h3 className="mb-2 flex items-start gap-2 text-xl font-bold">
                  <Mail className="text-primary-500 mt-1 h-6 w-6 shrink-0" />
                  <span>Aktualności o pupilu</span>
                </h3>
                <p className="ml-8">
                  Otrzymujesz na bieżąco zdjęcia adoptowanego zwierzaka, informacje dotyczące jego
                  stanu zdrowia, kosztów utrzymania oraz filmiki.
                </p>
              </div>
            </div>
          </Section.Content>
        </Section>

        <Section>
          <Section.Header align="center">
            <p className="text-primary-500 font-bold uppercase">Pomagaj wirtualnie</p>
            <h2 className="text-3xl lg:text-5xl">Ustaw zlecenie stałe</h2>
            <p className="text-xl">
              Tu znajdziesz wszystkie niezbędne dane, aby szybko i sprawnie ustawić stały przelew w
              swoim banku. To trwa dosłownie parę minut.
            </p>
          </Section.Header>

          <Section.Content className="mx-auto max-w-3xl rounded-lg bg-gray-100 p-4 text-left lg:p-8">
            <div className="mb-6 grid gap-6 md:grid-cols-2">
              <div>
                <p className="mb-1 text-sm font-semibold text-gray-600">Odbiorca</p>
                <p className="text-lg font-bold">{globalData.pageTitle}</p>
              </div>

              <div>
                <p className="mb-1 text-sm font-semibold text-gray-600">NIP</p>
                <p className="text-lg font-bold">{globalData.nip}</p>
              </div>

              <div className="md:col-span-2">
                <p className="mb-1 text-sm font-semibold text-gray-600">Adres</p>
                <p className="text-lg font-bold">
                  {globalData.address}, {globalData.city}
                </p>
              </div>

              <div className="md:col-span-2">
                <p className="mb-1 text-sm font-semibold text-gray-600">Numer konta</p>
                <p className="text-xl font-bold tracking-wider lg:text-2xl">
                  {globalData.accountNumber}
                </p>
              </div>

              <div className="md:col-span-2">
                <p className="mb-1 text-sm font-semibold text-gray-600">Tytuł przelewu (WAŻNE!)</p>
                <p className="text-primary-700 text-lg font-bold">
                  darowizna WA + imię podopiecznego
                </p>
              </div>
            </div>

            <div className="border-primary-300 rounded border-2 bg-white p-4">
              <p className="text-sm">
                <strong>Ważne:</strong> Koniecznie dodaj imię wybranego zwierzaka w tytule przelewu,
                abyśmy mogli przypisać wpłatę do właściwego pupila!
              </p>
            </div>
          </Section.Content>

          {globalData.fundraisingLink && (
            <div className="md:self-center">
              <p>
                Swoje zwierzę wybrać możesz również poprzez stronę{" "}
                <a
                  href={globalData.fundraisingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-500 font-semibold hover:underline"
                >
                  ratujemyzwierzaki.pl
                </a>
              </p>
            </div>
          )}
        </Section>

        <section className="border-primary-500 bg-primary-50 w-full max-w-4xl rounded-xl border px-4 py-4 lg:py-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-primary-500 mb-4 text-xl lg:text-3xl">
              Poinformuj nas o swojej adopcji
            </h2>
            <p className="mb-6 md:text-lg">
              Mamy pełno pracy przy naszych podopiecznych, dlatego niezbędne jest potwierdzenie
              Twojej wirtualnej adopcji, abyśmy mogły niezwłocznie zacząć Cię informować o Twoim
              nowym pupilu.
            </p>
            <p className="md:text-lg">
              Jeśli ustawiłeś zlecenie stałe, prosimy o zostawienie do siebie kontaktu email.
              Pozwoli to nam wysłać Ci Certyfikat Wirtualnego Opiekuna i wieści o Twoim nowym
              pupilu.
            </p>
          </div>
        </section>

        <Section>
          <Section.Header align="center">
            <p className="text-primary-500 font-bold uppercase">Zastanawiasz się czy warto?</p>
            <h2 className="text-3xl font-bold lg:text-5xl">Certyfikat Wirtualnego Opiekuna</h2>
            <p className="text-xl">
              Każdy, kto zdecyduje się na comiesięczne wpłaty w podziękowaniu od wybranego
              podopiecznego i Fundacji, otrzyma swój indywidualny CERTYFIKAT Wirtualnego Opiekuna!
            </p>
          </Section.Header>

          <Section.Content align="center">
            <Image
              src="/virtual-certificate.png"
              alt=""
              width={800}
              height={800}
              className="mx-auto"
            />

            <p className="mt-8 font-serif text-2xl font-bold lg:mt-14 lg:text-3xl">
              Dziękujemy za każdą wirtualną adopcję!{" "}
              <Heart className="inline h-6 w-6 fill-current" />
            </p>
          </Section.Content>
        </Section>
      </main>

      <Cta variant="contact" />

      <Footer />
    </div>
  )
}
