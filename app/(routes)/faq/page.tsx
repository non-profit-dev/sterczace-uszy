import type { Metadata } from "next"

import { Cta, Footer, Navigation } from "@/app/sections"
import { parseRichText } from "@/app/utils"
import { Hero } from "@/components/hero"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui"
import { getFaqs } from "@/lib/contentful"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "FAQ",
  description:
    "Znajdź odpowiedzi na najczęstsze pytania dotyczące adopcji, domu tymczasowego i pomocy zwierzętom w Fundacji Sterczące Uszy.",
  path: "/faq",
})

export default async function Faq() {
  const faqs = await getFaqs()

  const faqsByCategory = faqs.reduce(
    (acc, faq) => {
      if (!acc[faq.category]) {
        acc[faq.category] = []
      }
      acc[faq.category].push(faq)
      return acc
    },
    {} as Record<string, typeof faqs>
  )
  return (
    <div className="flex flex-col items-center justify-center">
      <Navigation />

      <Hero
        subtitle="FAQ"
        title="Najczęstsze pytania"
        descriptions={[
          "Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące adopcji, opieki nad zwierzętami, adopcji wirtualnej i wsparcia fundacji.",
        ]}
      />

      <main className="my-10 flex min-h-125 w-full max-w-6xl px-4 lg:my-20">
        {faqs.length > 0 ? (
          <section className="flex w-full gap-8 lg:gap-12">
            <Tabs
              defaultValue={Object.keys(faqsByCategory)[0]}
              className="flex w-full gap-8 lg:flex-row lg:gap-12"
            >
              <aside className="hidden w-64 shrink-0 lg:block">
                <div className="sticky top-24">
                  <p className="text-gray-5600 mb-4 text-sm font-semibold uppercase">Kategorie</p>
                  <TabsList className="flex h-auto flex-col items-stretch gap-2 bg-transparent p-0">
                    {Object.keys(faqsByCategory).map((category) => (
                      <TabsTrigger
                        key={category}
                        value={category}
                        className="data-[state=active]:border-primary-500 data-[state=active]:bg-primary-50 data-[state=active]:text-primary-700 justify-start rounded-lg border border-gray-200 bg-white px-4 py-3 text-left font-medium transition-colors hover:bg-gray-50"
                      >
                        {category}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>
              </aside>

              <div className="mb-6 w-full lg:hidden">
                <TabsList className="flex h-auto w-full flex-wrap justify-start gap-2 bg-transparent p-0">
                  {Object.keys(faqsByCategory).map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      className="data-[state=active]:border-primary-500 data-[state=active]:bg-primary-500 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50 data-[state=active]:text-white"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              <div className="flex-1">
                {Object.entries(faqsByCategory).map(([category, categoryFaqs]) => (
                  <TabsContent key={category} value={category} className="mt-0">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                      {categoryFaqs.map((faq, index) => (
                        <AccordionItem
                          key={`${category}-${index}`}
                          value={`${category}-${index}`}
                          className="rounded-lg border border-gray-200 bg-white px-6 shadow-sm data-[state=open]:shadow-md"
                        >
                          <AccordionTrigger className="py-4 text-left text-lg font-semibold text-gray-900 hover:no-underline md:text-xl">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="pb-4 text-base leading-relaxed">
                            {parseRichText(faq.answer)}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabsContent>
                ))}
              </div>
            </Tabs>
          </section>
        ) : (
          <section>
            <h2 className="text-3xl">Tu pojawią się pytania i odpowiedzi :)</h2>
          </section>
        )}
      </main>

      <Cta variant="contact" />

      <Footer />
    </div>
  )
}
