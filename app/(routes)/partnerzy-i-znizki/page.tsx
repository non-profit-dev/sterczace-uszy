import type { Metadata } from "next"
import Image from "next/image"

import { MoveRight } from "lucide-react"

import { Cta, Footer, Navigation } from "@/app/sections"
import { Hero } from "@/components/hero"
import { Section } from "@/components/section"
import { Button } from "@/components/ui"
import { getPartnerships, type PartnershipFields } from "@/lib/contentful"
import { createPageMetadata } from "@/lib/seo"

import { DiscountCodeModal } from "./discount-code-modal"
import { PartnerCardWithCopy } from "./partner-card-with-copy"

export const metadata: Metadata = createPageMetadata({
  title: "Partnerzy i zniżki",
  description:
    "Sprawdź partnerów Fundacji Sterczące Uszy oraz dostępne zniżki i oferty wspierające opiekunów zwierząt.",
  path: "/partnerzy-i-znizki",
})

export default async function PartnersAndDiscounts() {
  const safeAnimalFormId = process.env.NEXT_PUBLIC_SAFE_ANIMAL_FORM_ID

  let partnerships: PartnershipFields[] = []
  try {
    partnerships = await getPartnerships()
  } catch (error) {
    console.error("Failed to fetch partnerships from Contentful:", error)
  }

  const generalPartnerships = partnerships.filter((p) => !p.adoptionFamilyOnly)
  const adoptiveFamilyPartnerships = partnerships.filter((p) => p.adoptionFamilyOnly)

  return (
    <div className="flex flex-col items-center justify-center">
      <Navigation />

      <Hero
        subtitle="Partnerzy i zniżki"
        title="Sieć wspólnych korzyści"
        descriptions={[
          "Na tej stronie poznasz naszych partnerów, z którymi regularnie współpracujemy oraz znajdziesz zniżki na praktyczne usługi, które świadczą.",
        ]}
        backgroundImage="/hand-and-paw.png"
      />

      <main className="flex w-full flex-col items-center">
        {generalPartnerships.length > 0 && (
          <Section>
            <Section.Header align="center">
              <p className="text-primary-500 font-bold uppercase">Partnerskie Korzyści</p>
              <h2 className="text-3xl lg:text-5xl">Dla wszystkich</h2>
              <p className="text-lg lg:text-xl">
                Zapraszamy do skorzystania z kodów zniżkowych i korzystnych ofert.
              </p>
            </Section.Header>

            <Section.Content className="flex flex-col gap-6">
              {generalPartnerships.map((partnership) => (
                <PartnerCardWithCopy
                  key={partnership.title}
                  logo={partnership.image.url}
                  discount={partnership.discount || ""}
                  title={partnership.title}
                  description={partnership.description || ""}
                  code={partnership.discountCode}
                  offerLink={partnership.url || "#"}
                />
              ))}
            </Section.Content>
          </Section>
        )}

        {adoptiveFamilyPartnerships.length > 0 && (
          <Section>
            <Section.Header align="center">
              <p className="text-primary-500 font-bold uppercase">Partnerskie Korzyści</p>
              <h2 className="text-3xl lg:text-5xl">Dla Rodzin Adopcyjnych</h2>
              <p className="text-lg lg:text-xl">
                Szczególne oferty kierujemy do osób, które tworzą nowy dom dla naszych
                podopiecznych. Kody zniżkowe otrzymasz po dokonaniu adopcji.
              </p>
            </Section.Header>

            <Section.Content className="flex flex-col gap-6">
              {adoptiveFamilyPartnerships.map((partnership) => (
                <PartnerCardWithCopy
                  key={partnership.title}
                  logo={partnership.image.url}
                  discount={partnership.discount || ""}
                  title={partnership.title}
                  description={partnership.description || ""}
                  code={partnership.discountCode}
                  offerLink={partnership.url || "#"}
                />
              ))}
            </Section.Content>
          </Section>
        )}

        {partnerships.length === 0 && (
          <section className="w-full py-16 text-center">
            <p className="text-muted-foreground text-lg lg:text-xl">
              Wkrótce pojawią się tutaj oferty naszych partnerów.
            </p>
          </section>
        )}

        <section className="bg-secondary-200 w-full px-4 py-16">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 md:flex-row lg:gap-12 lg:py-16">
            <div className="flex-2/6 px-10 md:px-0">
              <Image
                src="/safe-animal.jpg"
                alt=""
                width={400}
                height={800}
                className="rounded-2xl"
              />
            </div>
            <div className="flex flex-4/6 flex-col gap-6">
              <div className="lg:pt-8">
                <p className="text-primary-500 mb-2 font-bold uppercase">Safe Animal</p>
                <h2 className="text-3xl lg:text-5xl">Rejestracja Mikroczipa</h2>
              </div>

              <div className="lg:text-xl">
                <p>
                  Mikroczip pozwala w łatwy sposób odnaleźć właściciela, kiedy zwierzę zostanie
                  zagubione.
                </p>

                <p className="mt-3">
                  Międzynarodowa Baza Danych SAFE-ANIMAL nadzoruje elektroniczny system znakowania
                  zwierząt czipem w Polsce.
                </p>

                <p className="mt-3">
                  Jeśli chcesz oznaczyć swojego pupila mikrochipem poproś nas o kod promocyjny,
                  zapewniający zniżkę 10% przy rejestracji w bazie danych.
                </p>
              </div>

              <div className="mt-3 flex flex-col gap-6 lg:flex-row">
                {safeAnimalFormId ? (
                  <DiscountCodeModal formId={safeAnimalFormId} />
                ) : (
                  <Button asChild>
                    <a href="/kontakt">Poproś o kod</a>
                  </Button>
                )}

                <Button asChild variant="link" size="sm">
                  <a
                    href="https://www.safe-animal.eu/pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Przejdź do strony Safe Animal <MoveRight className="w-3.5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Cta variant="partnership" />

      <Footer />
    </div>
  )
}
