import type { Metadata } from "next"
import Image from "next/image"

import { Check, CreditCard } from "lucide-react"

import { Cta, Footer, Navigation } from "@/app/sections"
import { Hero } from "@/components/hero"

export const metadata: Metadata = {
  title: "Regulamin płatności",
}

const paymentMethods = [
  {
    text: "Karty płatnicze: Visa, Visa Electron, MasterCard, MasterCard Electronic, Maestro",
  },
  {
    text: "Płatności online",
  },
  {
    text: "Płatności mobilne BLIK",
  },
]

export default function PaymentTerms() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Navigation />

      <Hero
        subtitle="Fundacja Sterczące Uszy"
        title="Regulamin płatności"
        descriptions={["Bezpieczne i wygodne formy płatności dla Twojego wsparcia."]}
      />

      <main className="my-10 flex w-full max-w-6xl flex-col items-center gap-y-12 px-4 lg:my-20 lg:gap-y-16">
        <section className="w-full max-w-4xl">
          <div className="mb-12 rounded-lg bg-gray-100 p-8">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold lg:text-3xl">
              <CreditCard className="text-secondary-600 h-8 w-8" />
              Płatności elektroniczne
            </h2>

            <p className="mb-6 text-lg">
              Strona internetowa może udostępniać płatności elektroniczne.
            </p>

            <h3 className="mb-4 font-semibold lg:text-xl">Dostępne formy płatności:</h3>

            <ul className="mb-8 space-y-4">
              {paymentMethods.map(({ text }) => (
                <li key={text} className="flex items-start gap-3">
                  <div className="mt-1 shrink-0">
                    <div className="bg-secondary-600 flex h-6 w-6 items-center justify-center rounded-full">
                      <Check className="h-4 w-4 text-white" strokeWidth={3} />
                    </div>
                  </div>
                  <p className="text-lg">{text}</p>
                </li>
              ))}
            </ul>

            <div className="my-8 flex justify-center">
              <Image
                src="/tpay-logos.svg"
                alt="Tpay - dostępne metody płatności"
                width={600}
                height={200}
                className="h-auto w-full max-w-2xl"
              />
            </div>
          </div>

          <div className="space-y-6">
            <section className="rounded-lg border border-gray-200 bg-white p-8">
              <h2 className="mb-4 text-xl font-bold lg:text-2xl">Operator płatności</h2>
              <p className="text-lg">
                Podmiotem świadczącym obsługę płatności online drogą elektroniczną jest Krajowy
                Integrator Płatności S.A.
              </p>
            </section>

            <section className="rounded-lg border border-gray-200 bg-white p-8">
              <h2 className="mb-4 text-xl font-bold lg:text-2xl">Zwrot środków</h2>
              <p className="text-lg">
                W przypadku wystąpienia konieczności zwrotu środków za transakcję dokonaną przez
                wpłacającego kartą płatniczą, przyjmujący wpłatę dokona zwrotu na rachunek bankowy
                przypisany do karty płatniczej wpłacającego.
              </p>
            </section>
          </div>
        </section>
      </main>

      <Cta variant="contact" />

      <Footer />
    </div>
  )
}
