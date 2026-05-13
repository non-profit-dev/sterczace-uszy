import Link from "next/link"

import { CircleCheck, Heart, PawPrint, Stethoscope } from "lucide-react"

import { Section } from "@/components/section"
import { Button } from "@/components/ui"

interface FosterHomeInfoProps {
  name?: string
  surveyLink?: string
}

const benefits = [
  {
    icon: CircleCheck,
    title: "Masz wszystko na start",
    description: "Zapewniamy karmę oraz niezbędne akcesoria",
  },
  {
    icon: Stethoscope,
    title: "Nie martwisz się o leczenie",
    description: "Pokrywamy wszystkie koszty weterynaryjne",
  },
  {
    icon: PawPrint,
    title: "Nie zostajesz sam",
    description: "Oferujemy wsparcie behawiorysty w razie potrzeby",
  },
  {
    icon: Heart,
    title: "Jesteśmy w stałym kontakcie",
    description: "Wspieramy Cię na każdym etapie",
  },
]

export function FosterHomeInfo({ name, surveyLink }: FosterHomeInfoProps) {
  return (
    <Section className="bg-secondary-200 px-4">
      <Section.Header align="center">
        <h3 className="text-3xl font-semibold lg:text-5xl">{name} szuka domu tymczasowego</h3>
        <p className="text-xl lg:text-2xl">
          Ty dajesz miejsce i serce. My zajmujemy się całą resztą.
        </p>
      </Section.Header>

      <Section.Content className="mx-auto max-w-4xl">
        <p className="text-primary font-mogra text-3xl font-semibold md:text-center lg:text-4xl">
          Dlaczego warto?
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:mt-8 lg:gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4 rounded-xl bg-white p-3 lg:p-6">
              <benefit.icon className="text-primary mt-2 h-6 w-6 shrink-0" />
              <div>
                <p className="text-xl font-medium lg:text-2xl">{benefit.title}</p>
                <p className="mt-3 text-gray-600 lg:text-xl">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 py-4 text-center text-xl text-gray-600 lg:py-8">
          Dom tymczasowy to nie adopcja na zawsze - jesteśmy z Tobą od pierwszego dnia aż do momentu
          znalezienia stałego domu.
        </p>
      </Section.Content>

      {surveyLink && (
        <Button asChild className="md:mt-4 md:self-center">
          <a target="_blank" rel="noopener noreferrer" href={surveyLink}>
            <Heart className="mr-2 h-4 w-4" />
            Zostań domem tymczasowym
          </a>
        </Button>
      )}
    </Section>
  )
}
