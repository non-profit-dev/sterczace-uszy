import Image from "next/image"

import { CopyButton } from "@/app/sections/footer/copy-button"
import { Section } from "@/components/section"
import { getGlobalData } from "@/lib/contentful"

export async function TaxDonation() {
  const globalData = await getGlobalData()

  return (
    <section className="max-w-6xl px-4 pb-16 lg:pb-24" id="przekaz-podatek">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="flex items-center justify-center">
          <Image
            src="/tax.png"
            alt=""
            width={400}
            height={400}
            className="h-auto w-full max-w-md rounded-2xl"
          />
        </div>

        <div>
          <p className="text-primary-500 mb-2 font-bold uppercase">Twoja pomoc ma moc</p>
          <h2 className="mb-6 text-3xl lg:text-5xl">1.5% podatku</h2>

          <p className="text-muted-foreground mb-6 text-lg lg:text-xl">
            Możesz wesprzeć działania naszej Fundacji przekazując 1,5% swojego podatku na konto
            Fundacji.
          </p>

          <p className="text-muted-foreground mb-6 text-lg lg:text-xl">
            Aby to zrobić w trakcie wypełniania swojego zeznania podatkowego wybierz:
          </p>

          <div className="space-y-4 text-lg lg:text-xl">
            <div className="flex flex-col gap-2 lg:flex-row">
              <span className="text-muted-foreground">Numer KRS:</span>
              <p className="flex items-center gap-2">
                <span className="font-bold">0000270261</span>
                <CopyButton text={globalData.krs} />
              </p>
            </div>

            <div className="flex flex-col gap-2 lg:flex-row">
              <span className="text-muted-foreground">Dopisek:</span>
              <p className="flex items-center gap-2">
                <span className="font-bold">Fundacja Sterczące Uszy 13146</span>
                <CopyButton text="Fundacja Sterczące Uszy 13146" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
