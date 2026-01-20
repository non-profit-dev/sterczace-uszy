import Image from "next/image"

import { User } from "lucide-react"

import { Section } from "@/components/section"
import type { PeopleFields } from "@/lib/contentful"

interface TeamProps {
  people?: PeopleFields[]
}

export function Team({ people }: TeamProps) {
  if (!people || people.length === 0) {
    return null
  }

  return (
    <Section className="bg-secondary-200">
      <div className="mx-auto w-full max-w-5xl">
        <Section.Header align="center">
          <p className="text-primary-500 font-bold uppercase">Poznaj nasz zespół</p>
          <h2 className="mt-2 text-3xl lg:text-5xl">Kto stoi za fundacją?</h2>
        </Section.Header>

        <Section.Content align="center" className="mt-6 flex flex-wrap justify-center lg:mt-14">
          {people.map((person) => (
            <div
              key={person.name}
              className="flex w-full flex-col items-center p-6 text-center sm:w-1/2 lg:w-1/3"
            >
              {person.image?.url ? (
                <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full">
                  <Image
                    src={person.image.url}
                    alt={person.image.title || person.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="mb-3 flex h-32 w-32 items-center justify-center rounded-full bg-white">
                  <User className="text-primary-500 h-12 w-12" />
                </div>
              )}

              <h3 className="mt-2 text-xl font-bold">{person.name}</h3>
              {person.position && <p className="text-primary-500 mt-1">{person.position}</p>}

              {person.phoneNumber && <p className="mt-1">{person.phoneNumber}</p>}
            </div>
          ))}
        </Section.Content>
      </div>
    </Section>
  )
}
