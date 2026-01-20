import type { Metadata } from "next"

import { Cta, Footer, Navigation } from "@/app/sections"
import { Hero } from "@/components/hero"
import { Section } from "@/components/section"

import {
  AdoptionSteps,
  PreAdoptionVisit,
  ReadinessCheckAccordion,
  RejectionReasons,
} from "./components"

export const metadata: Metadata = {
  title: "Proces adopcji",
}

export default function AdoptionProcess() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Navigation />

      <Hero
        subtitle="Adoptuj z głową i sercem"
        title="Jak przebiega adopcja?"
        descriptions={[
          "Adopcja to jedna z najpiękniejszych decyzji, jakie możesz podjąć. To też odpowiedzialność na lata.",
          "Przygotowaliśmy dla Ciebie przewodnik, który krok po kroku przeprowadzi Cię przez cały proces – od pierwszych przemyśleń po odbiór Twojego nowego przyjaciela.",
        ]}
      />

      <main className="flex w-full flex-col items-center">
        <Section>
          <Section.Header>
            <p className="text-primary-500 font-bold uppercase">Zanim zdecydujesz</p>
            <h2 className="text-3xl lg:text-5xl">Sprawdź, czy jesteś gotowy</h2>
            <p className="mt-3 text-xl">
              Adopcja to nie spontaniczny pomysł na weekend. To decyzja na 10-15 lat.
            </p>
            <p className="mt-3 text-xl font-semibold">
              Zanim wypełnisz ankietę, odpowiedz sobie szczerze na kilka pytań:
            </p>
          </Section.Header>

          <ReadinessCheckAccordion />
        </Section>

        <AdoptionSteps />

        <PreAdoptionVisit />

        <RejectionReasons />
      </main>

      <Cta variant="adoption" />

      <Footer />
    </div>
  )
}
