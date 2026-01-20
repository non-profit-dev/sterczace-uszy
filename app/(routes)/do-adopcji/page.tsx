import type { Metadata } from "next"

import { Cta, Footer, Navigation } from "@/app/sections"
import { PetCard } from "@/components/pet-card"
import { getAnimals, type AnimalFields } from "@/lib/contentful"
import { formatAnimalAge } from "@/lib/contentful/utils"

export const metadata: Metadata = {
  title: "Do adopcji",
}

export default async function AdoptionPage() {
  let animals: AnimalFields[] = []
  try {
    animals = await getAnimals()
  } catch (error) {
    console.error("Failed to fetch animals from Contentful:", error)
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <Navigation />

      <main className="my-10 flex w-full max-w-6xl flex-col items-center gap-y-16 px-4 lg:my-20 lg:gap-y-24">
        {animals.length > 0 ? (
          <section className="flex w-full flex-col gap-8">
            <div className="flex max-w-2xl flex-col items-start gap-2">
              <p className="text-primary-500 font-bold uppercase">Nasi podopieczni</p>
              <h2 className="text-3xl lg:text-5xl">Czekają na nowy dom</h2>
              <p className="mt-2 text-xl">
                Każdy z nich jest wyjątkowy. Starszaki i szczeniaki, duże i małe, lubiące kanapę lub
                długie spacery. Potrzebują jedynie miłości. Sprawdź, któremu odmienisz życie?
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {animals.map((animal) => (
                <PetCard
                  key={animal.slug}
                  id={animal.slug}
                  name={animal.name}
                  image={animal.thumbnail.url}
                  age={formatAnimalAge(animal.dateOfBirth)}
                  gender={animal.gender?.toLowerCase() === "on" ? "on" : "ona"}
                  location={animal.location}
                  excerpt={animal.excerpt}
                />
              ))}
            </div>
          </section>
        ) : (
          <div>
            <h1 className="text-3xl lg:text-5xl">Brak zwierząt do adopcji</h1>
          </div>
        )}
      </main>

      <Cta variant="foster" />

      <Footer />
    </div>
  )
}
