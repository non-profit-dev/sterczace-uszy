import type { Metadata } from "next"
import Image from "next/image"

import { Footer, Navigation } from "@/app/sections"
import { getAdoptedAnimals } from "@/lib/contentful"

export const metadata: Metadata = {
  title: "Adoptowane",
}

export default async function AdoptedPage() {
  let animals: { name: string; thumbnail: { url: string } }[] = []
  try {
    animals = await getAdoptedAnimals()
  } catch (error) {
    console.error("Failed to fetch adopted animals from Contentful:", error)
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <Navigation />

      <main className="my-10 flex w-full max-w-6xl flex-col items-center gap-y-16 px-4 lg:my-20 lg:gap-y-24">
        <section className="flex w-full flex-col gap-8">
          <div className="flex max-w-2xl flex-col items-start gap-2">
            <p className="text-primary-500 font-bold uppercase">Szczęśliwe zakończenia</p>
            <h2 className="text-3xl lg:text-5xl">Znalazły dom</h2>
            <p className="mt-2 text-xl">
              Te zwierzaki mają już swoich ludzi. Dziękujemy każdej osobie, która zdecydowała się
              otworzyć swoje serce i dom.
            </p>
          </div>

          {animals.length > 0 ? (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-4">
              {animals.map((animal, index) => (
                <div
                  key={`${animal.name}-${index}`}
                  className="group relative overflow-hidden rounded-2xl"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={animal.thumbnail.url}
                      alt={animal.name}
                      fill
                      sizes="(min-width: 1024px) 240px, (min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw"
                      priority={index < 10}
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <p className="absolute right-0 bottom-0 left-0 px-3 py-2 text-center text-sm font-semibold text-white lg:text-base">
                    {animal.name}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xl text-gray-500">Brak adoptowanych zwierząt.</p>
          )}
        </section>
      </main>

      <Footer />
    </div>
  )
}
