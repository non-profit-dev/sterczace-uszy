import type { Metadata } from "next"

import { Cta, Footer, Navigation } from "@/app/sections"
import { Hero } from "@/components/hero"
import { getVolunteerNeeds } from "@/lib/contentful"
import { createPageMetadata } from "@/lib/seo"

import {
  FinancialSupport,
  FreeSupport,
  TaxDonation,
  TemporaryHome,
  VolunteerSection,
} from "./components"

export const metadata: Metadata = createPageMetadata({
  title: "Jak pomóc fundacji",
  description:
    "Wesprzyj Fundację Sterczące Uszy darowizną, domem tymczasowym, wolontariatem, podatkiem 1,5% lub bezpłatnymi zakupami online.",
  path: "/wsparcie",
})

export default async function Support() {
  const volunteerNeeds = await getVolunteerNeeds()

  return (
    <div className="flex flex-col items-center justify-center">
      <Navigation />

      <Hero
        subtitle="Wsparcie fundacji"
        title="Jak pomóc?"
        descriptions={[
          "Każda forma wsparcia ma ogromne znaczenie dla naszych podopiecznych. Możesz pomóc na wiele sposobów – od wsparcia finansowego, przez wolontariat, aż po dom tymczasowy.",
        ]}
      />

      <main className="flex w-full flex-col items-center">
        <FinancialSupport />

        <TaxDonation />

        <TemporaryHome />

        {volunteerNeeds.length > 0 && <VolunteerSection volunteerNeeds={volunteerNeeds} />}

        <FreeSupport />
      </main>

      <Cta variant="volunteer" />

      <Footer />
    </div>
  )
}
