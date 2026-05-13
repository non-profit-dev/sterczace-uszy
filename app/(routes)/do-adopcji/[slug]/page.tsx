import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { ArrowLeft } from "lucide-react"

import { Cta, Footer, Navigation } from "@/app/sections"
import { parseRichText } from "@/app/utils"
import { Button } from "@/components/ui"
import { formatAnimalAge, getAnimal, getAnimals, getGlobalData } from "@/lib/contentful"
import { createPageMetadata } from "@/lib/seo"

import {
  AdoptionButtons,
  AdoptionInfo,
  FosterHomeInfo,
  ImageGallery,
  PetAttributes,
  PetInfo,
} from "./components"
import { getAdoptionStatusDisplay, getGenderDisplay } from "./utils"

interface PetDetailsPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: PetDetailsPageProps): Promise<Metadata> {
  const { slug } = await params
  const animal = await getAnimal(slug)

  if (!animal) {
    return createPageMetadata({
      title: "Zwierzę do adopcji",
      description: "Poznaj psy i koty czekające na dom pod opieką Fundacji Sterczące Uszy.",
      path: `/do-adopcji/${slug}`,
    })
  }

  const title = `${animal.name} do adopcji`
  const description =
    animal.excerpt || `Poznaj ${animal.name} i sprawdź szczegóły adopcji w Fundacji Sterczące Uszy.`

  return createPageMetadata({
    title,
    description,
    path: `/do-adopcji/${animal.slug}`,
    image: animal.thumbnail?.url,
  })
}

export async function generateStaticParams() {
  try {
    const animals = await getAnimals()
    return animals.map((animal) => ({
      slug: animal.slug,
    }))
  } catch (error) {
    console.error("Error generating static params:", error)
    return []
  }
}

export default async function PetDetailsPage({ params }: PetDetailsPageProps) {
  const { slug } = await params
  const [animal, globalData] = await Promise.all([getAnimal(slug), getGlobalData()])

  if (!animal) {
    notFound()
  }

  const images = animal.imagesCollection?.items?.map((item) => item.url) || []
  const ageDisplay = formatAnimalAge(animal.dateOfBirth)
  const genderDisplay = getGenderDisplay(animal.type, animal.gender)
  const adoptionStatusDisplay = getAdoptionStatusDisplay(
    animal.adopted || false,
    animal.temporaryHome || false
  )

  return (
    <div className="flex flex-col items-center justify-center">
      <Navigation />

      <div className="w-full max-w-6xl px-4 pt-8 lg:pt-16 lg:pb-8">
        <Button asChild size="sm" variant="link" className="mb-6">
          <Link href="/do-adopcji">
            <ArrowLeft className="h-4 w-4" />
            Powrót do listy
          </Link>
        </Button>
      </div>

      <main className="flex w-full flex-col">
        <section className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-16 lg:flex-row lg:gap-16 lg:pb-24">
          <div className="lg:w-1/3">
            <ImageGallery images={images} />

            <div className="mt-6 hidden border-t pt-6 lg:block">
              <AdoptionButtons
                preAdoptionSurveyLink={globalData.preAdoptionSurveyLink}
                temporaryHomeSurveyLink={globalData.temporaryHomeSurveyLink}
                temporaryHome={animal.temporaryHome || false}
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:w-2/3">
            <PetInfo
              name={animal.name}
              adoptionStatusDisplay={adoptionStatusDisplay}
              ownerPet={animal.ownerPet || false}
              ageDisplay={ageDisplay}
              genderDisplay={genderDisplay}
              weight={animal.weight}
              location={animal.location}
            />

            {(animal.activityLevel ||
              animal.behavior?.length ||
              animal.health?.length ||
              animal.additionalInfo) && (
              <PetAttributes
                activityLevel={animal.activityLevel}
                behavior={animal.behavior}
                health={animal.health}
                additionalInfo={animal.additionalInfo}
              />
            )}

            <div className="flex flex-col gap-6 border-t pt-6">
              {animal.description && (
                <div>
                  <h3 className="text-3xl">Opis</h3>
                  <div className="mt-3 text-lg leading-relaxed">
                    {parseRichText(animal.description)}
                  </div>
                </div>
              )}

              {animal.idealFamily && (
                <div>
                  <h3 className="text-3xl">Kogo szuka?</h3>
                  <div className="mt-3 text-lg leading-relaxed">
                    {parseRichText(animal.idealFamily)}
                  </div>
                </div>
              )}

              <AdoptionInfo />
            </div>
          </div>

          <div className="mt-6 border-t pt-6 lg:hidden">
            <AdoptionButtons
              preAdoptionSurveyLink={globalData.preAdoptionSurveyLink}
              temporaryHomeSurveyLink={globalData.temporaryHomeSurveyLink}
              temporaryHome={animal.temporaryHome || false}
            />
          </div>
        </section>

        {!animal.temporaryHome && !animal.adopted && (
          <FosterHomeInfo name={animal.name} surveyLink={globalData?.temporaryHomeSurveyLink} />
        )}
      </main>

      <Cta variant="adoption" />

      <Footer />
    </div>
  )
}
