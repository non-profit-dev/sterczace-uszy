import type { Metadata } from "next"
import Link from "next/link"

import { Check, ExternalLink, Mail } from "lucide-react"

import { Cta, Footer, Navigation } from "@/app/sections"
import { Hero } from "@/components/hero"
import { Button } from "@/components/ui"
import { getGlobalData } from "@/lib/contentful"

export const metadata: Metadata = {
  title: "Ankiety",
}

const surveySteps = [
  "Wypełnij ankietę online",
  "Zweryfikuj wysyłkę ankiety",
  "Poczekaj na odpowiedź od nas",
]

export default async function Surveys() {
  const globalData = await getGlobalData()
  return (
    <div className="flex flex-col items-center justify-center">
      <Navigation />

      <Hero
        subtitle="Dokumenty adopcyjne"
        title="Ankiety"
        descriptions={[
          "Tutaj znajdziesz ankiety adopcyjne i niezbędne informacje, aby je wysłać do fundacji.",
        ]}
      />

      <main className="my-10 flex w-full max-w-6xl flex-col items-center gap-y-12 px-4 lg:my-20 lg:gap-y-16">
        <section className="w-full">
          <div className="mb-12">
            <h3 className="mb-6 text-xl lg:text-2xl">Co musisz zrobić?</h3>

            <ul className="space-y-3">
              {surveySteps.map((step, index) => (
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
              <h3 className="mb-6 text-xl lg:text-2xl">Ankieta przedadopcyjna</h3>

              <div className="mb-6 flex-1">
                <p className="text-lg">
                  Formularz dla osób zainteresowanych adopcją zwierzęcia z fundacji.
                </p>
              </div>

              {globalData.preAdoptionSurveyLink ? (
                <Button variant="outline" asChild className="w-full">
                  <a href={globalData.preAdoptionSurveyLink} target="_blank">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Ankieta przedadopcyjna
                  </a>
                </Button>
              ) : (
                <Button asChild className="w-full">
                  <Link href="/kontakt">Skontaktuj się z nami w spawie ankiety</Link>
                </Button>
              )}
            </div>

            <div className="flex flex-col rounded-lg border-2 border-gray-200 bg-white p-5 lg:p-8">
              <h3 className="mb-6 text-xl lg:text-2xl">Ankieta dla domu tymczasowego</h3>

              <div className="mb-6 flex-1">
                <p className="text-lg">
                  Formularz dla osób zainteresowanych zostaniem domem tymczasowym dla zwierzęcia z
                  fundacji.
                </p>
              </div>

              {globalData.temporaryHomeSurveyLink ? (
                <Button variant="outline" asChild className="w-full">
                  <a href={globalData.temporaryHomeSurveyLink} target="_blank">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Ankieta dla domu tymczasowego
                  </a>
                </Button>
              ) : (
                <Button asChild className="w-full">
                  <Link href="/kontakt">Skontaktuj się z nami w spawie ankiety</Link>
                </Button>
              )}
            </div>
          </div>

          <div className="border-secondary-600 bg-secondary-200 rounded-lg border-l-4 p-6">
            <p className="mb-2 flex items-center gap-2 text-lg">
              <Mail className="text-secondary-600 h-5 w-5" />
              <span className="font-semibold">Jak otrzymam odpowiedź?</span>
            </p>
            <p className="mb-2 text-lg">
              Odpowiedź otrzymasz telefonicznie lub z{" "}
              <a href={`mailto:${globalData?.email}`} className="text-primary-500 hover:underline">
                {globalData?.email}
              </a>
            </p>
            <p className="text-lg">Jak tylko ją przeanalizujemy, skontaktujemy się z Tobą.</p>
          </div>
        </section>
      </main>

      <Cta variant="documents" />

      <Footer />
    </div>
  )
}
