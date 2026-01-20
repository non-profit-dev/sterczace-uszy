import type { Metadata } from "next"
import Link from "next/link"

import { Check, Download } from "lucide-react"

import { Cta, Footer, Navigation } from "@/app/sections"
import { Hero } from "@/components/hero"
import { Button } from "@/components/ui"
import { getGlobalData } from "@/lib/contentful"

export const metadata: Metadata = {
  title: "Umowy",
}

const agreementSteps = [
  "Przeczytaj umowę uważnie",
  "Upewnij się, że wszystko jest dla Ciebie jasne i rozumiesz warunki",
  "Podpisz i przekaż umowę osobiście lub według indywidualnych ustaleń",
]

export default async function Agreements() {
  const globalData = await getGlobalData()
  return (
    <div className="flex flex-col items-center justify-center">
      <Navigation />

      <Hero
        subtitle="Dokumenty adopcyjne"
        title="Umowy"
        descriptions={[
          "Tutaj znajdziesz umowy adopcyjne i niezbędne informacje, żeby dokończyć adopcję wybranego czworonoga.",
        ]}
      />

      <main className="my-10 flex w-full max-w-6xl flex-col items-center gap-y-12 px-4 lg:my-20 lg:gap-y-16">
        <section className="w-full">
          <div className="mb-12">
            <h3 className="mb-6 text-xl lg:text-2xl">Co musisz zrobić?</h3>

            <ul className="space-y-3">
              {agreementSteps.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 shrink-0">
                    <div className="bg-primary-500 flex h-6 w-6 items-center justify-center rounded-full">
                      <Check className="h-4 w-4 text-white" strokeWidth={3} />
                    </div>
                  </div>
                  <p className="text-lg">{step}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12 grid gap-8 md:grid-cols-2">
            <div className="flex flex-col rounded-lg border-2 border-gray-200 bg-white p-5 lg:p-8">
              <h3 className="mb-6 text-xl lg:text-2xl">Umowa adopcyjna</h3>

              <div className="mb-6 flex-1">
                <p className="text-lg">
                  Dokument prawny regulujący warunki adopcji zwierzęcia z fundacji.
                </p>
              </div>

              {globalData.adoptionAgreement ? (
                <Button variant="outline" asChild className="w-full">
                  <a href={globalData.adoptionAgreement} target="_blank">
                    <Download className="mr-2 h-5 w-5" />
                    Umowa adopcyjna
                  </a>
                </Button>
              ) : (
                <Button variant="outline" asChild className="w-full">
                  <Link href="/kontakt">Skontaktuj się z nami w sprawie umowy</Link>
                </Button>
              )}
            </div>

            <div className="flex flex-col rounded-lg border-2 border-gray-200 bg-white p-5 lg:p-8">
              <h3 className="mb-6 text-xl lg:text-2xl">Umowa zostania domem tymczasowym</h3>

              <div className="mb-6 flex-1">
                <p className="text-lg">
                  Dokument prawny regulujący warunki tymczasowej opieki nad zwierzęciem z fundacji.
                </p>
              </div>

              {globalData.temporaryHomeAgreement ? (
                <Button variant="outline" asChild className="w-full">
                  <a href={globalData.temporaryHomeAgreement} target="_blank">
                    <Download className="mr-2 h-5 w-5" />
                    Umowa domu tymczasowego
                  </a>
                </Button>
              ) : (
                <Button variant="outline" asChild className="w-full">
                  <Link href="/kontakt">Skontaktuj się z nami w sprawie umowy</Link>
                </Button>
              )}
            </div>
          </div>

          <div className="border-secondary-600 bg-secondary-200 rounded-lg border-l-4 p-6">
            <p className="mb-2 text-lg">
              <span className="font-semibold">Jak przekazać podpisaną umowę?</span>
            </p>
            <p className="mb-2 text-lg">Umowę możesz dostarczyć osobiście odbierając zwierzę.</p>
            <p className="text-lg">Jeśli jest to niemożliwe, ustalimy indywidualnie.</p>
          </div>
        </section>
      </main>

      <Cta variant="documents" />

      <Footer />
    </div>
  )
}
