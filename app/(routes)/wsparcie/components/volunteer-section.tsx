import Link from "next/link"

import { Heart } from "lucide-react"

import { Section } from "@/components/section"
import { Button } from "@/components/ui"
import type { VolunteerNeedFields } from "@/lib/contentful/queries"

interface VolunteerSectionProps {
  volunteerNeeds: VolunteerNeedFields[]
}

export function VolunteerSection({ volunteerNeeds }: VolunteerSectionProps) {
  return (
    <Section id="wolontariat">
      <Section.Header align="center">
        <p className="text-primary-500 font-bold uppercase">Wolontariat</p>
        <h2 className="text-3xl lg:text-5xl">Zostań wolontariuszem</h2>
        <p className="text-lg">
          Poszukujemy ludzi o wielkim sercu, którzy chcą poświęcić swój czas i energię, aby poprawić
          życie bezdomnych zwierząt.
        </p>
      </Section.Header>

      <Section.Content>
        <div className="mx-auto flex max-w-3xl flex-col gap-5 md:gap-8">
          {volunteerNeeds.map((need) => (
            <div key={need.name} className="rounded-2xl border bg-white p-5 md:p-8">
              <div className="flex items-start gap-6">
                <div className="bg-primary-50 hidden h-16 w-16 shrink-0 items-center justify-center rounded-full md:flex">
                  <Heart className="text-primary-500 h-5 w-5 md:h-7 md:w-7" />
                </div>
                <div className="flex-1">
                  <h4 className="mb-3 text-xl lg:text-2xl">{need.name}</h4>
                  <p className="text-muted-foreground">{need.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild>
            <Link href="/kontakt">Zgłoś się</Link>
          </Button>
        </div>
      </Section.Content>
    </Section>
  )
}
