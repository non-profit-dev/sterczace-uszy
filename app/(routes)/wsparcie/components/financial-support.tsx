import Link from "next/link"

import { ArrowRight, Banknote, CreditCard, HandCoins } from "lucide-react"

import { Section } from "@/components/section"
import { Button } from "@/components/ui"
import { getGlobalData } from "@/lib/contentful"

const donationOptions = [
  {
    amount: "25zł",
    description: "Zapewnia karmę dla podopiecznego na 1 tydzień",
  },
  {
    amount: "50zł",
    description: "Pozwala zakupić szczepionkę przeciwko parowirozie",
  },
  {
    amount: "100zł",
    description: "Pozwala wykupić sesję z behawiorystą i przyspieszyć możliwą adopcję",
  },
]

export async function FinancialSupport() {
  const globalData = await getGlobalData()

  return (
    <Section id="darowizna">
      <Section.Header align="center">
        <p className="text-primary-500 font-bold uppercase">Wsparcie finansowe</p>
        <h2 className="text-3xl lg:text-5xl">Pomóż nam pomagać</h2>
        <p className="text-lg lg:text-xl">
          Każdego dnia mierzymy się z ogromnymi wydatkami, aby zapewnić naszym podopiecznym
          najlepsze warunki. Możesz nam pomóc przekazując wsparcie finansowe.
        </p>
      </Section.Header>

      <Section.Content className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="rounded-2xl border bg-white p-4 lg:p-10">
          <div className="mb-6 flex items-center gap-4">
            <div className="bg-primary-50 flex h-12 w-12 shrink-0 items-center justify-center rounded-full lg:h-14 lg:w-14">
              <Banknote className="text-primary-500 h-5 w-5 lg:h-6 lg:w-6" />
            </div>
            <h3 className="text-lg lg:text-2xl">Przelew lub zlecenie stałe</h3>
          </div>

          <div className="space-y-4 md:text-lg">
            <div>
              <p className="mb-2 text-lg font-bold lg:text-xl">Fundacja Sterczące Uszy</p>
              <p className="text-muted-foreground">
                {globalData.address},
                <br />
                {globalData.city}
              </p>
            </div>

            <div>
              <p className="font-semibold">NIP</p>
              <p className="text-muted-foreground">{globalData.nip}</p>
            </div>

            <div>
              <p className="font-semibold">Tytuł przelewu</p>
              <p className="text-muted-foreground">Darowizna</p>
            </div>

            <div>
              <p className="mb-2 font-semibold">Numer konta</p>
              <div className="bg-primary-50 rounded-lg p-2 lg:p-4">
                <p className="text-primary-600 text-center font-mono text-sm font-bold tracking-wide md:text-lg">
                  {globalData.accountNumber}
                </p>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-muted-foreground text-sm">
                Zlecenie stałe to świetny sposób na regularne wspieranie naszych podopiecznych.
                Nawet niewielka kwota przekazywana co miesiąc pomaga nam planować budżet i zapewniać
                ciągłą opiekę.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border bg-white p-4 lg:p-10">
          <div className="mb-6 flex items-center gap-4">
            <div className="bg-primary-50 flex h-12 w-12 shrink-0 items-center justify-center rounded-full lg:h-14 lg:w-14">
              <CreditCard className="text-primary-500 h-5 w-5 lg:h-6 lg:w-6" />
            </div>
            <h3 className="text-lg lg:text-2xl">Jednorazowa wpłata</h3>
          </div>

          <p className="text-muted-foreground mb-6 text-lg">
            Wybierz wygodną formę dokonania wpłaty za pośrednictwem strony www.ratujemyzwierzaki.pl
          </p>

          <div className="space-y-4">
            {donationOptions.map((option, index) => (
              <div key={index} className="border-primary-200 rounded-lg border p-5">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <HandCoins className="text-primary-500 h-5 w-5 lg:h-6 lg:w-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-primary-500 mb-1 text-lg font-bold lg:text-xl">
                      {option.amount}
                    </p>
                    <p className="text-muted-foreground">{option.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {globalData.fundraisingLink && (
              <Button asChild className="mt-6 w-full">
                <a href={globalData.fundraisingLink} target="_blank" rel="noopener noreferrer">
                  Wpłać teraz
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            )}
          </div>

          <div className="mt-6 border-t pt-6">
            <p className="text-muted-foreground text-sm">
              Możesz też wpłacić dowolną kwotę. Każda złotówka ma znaczenie i trafia bezpośrednio na
              pomoc zwierzętom.
            </p>
          </div>
        </div>
      </Section.Content>
    </Section>
  )
}
