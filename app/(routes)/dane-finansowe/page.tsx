import type { Metadata } from "next"
import Image from "next/image"

import { Download, Heart } from "lucide-react"

import { Cta, Footer, Navigation } from "@/app/sections"
import { Hero } from "@/components/hero"
import { Button } from "@/components/ui"
import { getFinancialStatements, type FinancialStatementFields } from "@/lib/contentful"

export const metadata: Metadata = {
  title: "Dane finansowe",
}

export default async function FinancialData() {
  let financialStatements: FinancialStatementFields[] = []
  try {
    financialStatements = await getFinancialStatements()
  } catch (error) {
    console.error("Failed to fetch financial statements from Contentful:", error)
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <Navigation />

      <Hero
        subtitle="Nasza fundacja"
        title="Dane finansowe"
        descriptions={[
          "Trzymamy rękę na pulsie i starannie notujemy nasze wydatki, które publikujemy w sprawozdaniach finansowych.",
        ]}
        backgroundImage="/finance.png"
      />

      <main className="my-10 flex w-full max-w-6xl flex-col items-center gap-y-16 px-4 lg:my-20 lg:gap-y-24">
        <section className="flex w-full flex-col gap-12 lg:flex-row lg:gap-16">
          <div className="flex flex-col gap-4 lg:w-3/4">
            <p className="text-primary-500 font-bold uppercase">Dbamy o transparentność</p>
            <h2 className="text-3xl lg:text-5xl">Sprawozdania finansowe</h2>

            <p className="mt-2 text-xl">
              Wierzymy, że zaufanie do fundacji jest podstawowym warunkiem skutecznego pomagania.
              Przejrzystość naszej pracy i transparentność wobec darczyńców cenimy sobie ponad
              wszystko.
            </p>

            <div className="mt-4">
              <h3 className="mb-4 text-xl font-semibold">
                Tutaj znajdziesz wszystkie sprawozdania z działalności fundacji:
              </h3>

              <div className="flex flex-col gap-3">
                {financialStatements.length > 0 ? (
                  financialStatements.map((statement) => (
                    <Button
                      key={statement.name}
                      asChild
                      variant="link"
                      size="sm"
                      className="justify-start"
                    >
                      <a href={statement.url || "#"} target="_blank" rel="noopener noreferrer">
                        <Download className="mr-2 h-5 w-5" />
                        {statement.name}
                      </a>
                    </Button>
                  ))
                ) : (
                  <p className="text-muted-foreground">
                    Sprawozdania finansowe będą dostępne wkrótce.
                  </p>
                )}
              </div>

              <p className="mt-8 flex items-center gap-2 text-xl font-semibold lg:text-2xl">
                Dziękujemy za Wasze wsparcie{" "}
                <Heart className="text-primary h-6 w-6" fill="currentColor" />
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center lg:w-1/2">
            <div className="relative w-full max-w-md">
              <p className="mb-6 text-center text-xl font-semibold">Nasze najważniejsze koszty:</p>

              <div className="aspect-square w-full">
                <Image
                  src="/financial-chart.png"
                  alt="Wykres kosztów fundacji"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Cta variant="contact" />

      <Footer />
    </div>
  )
}
