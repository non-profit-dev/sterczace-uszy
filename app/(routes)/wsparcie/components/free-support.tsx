import Image from "next/image"
import Link from "next/link"

import { Download, ExternalLink, Smartphone } from "lucide-react"

import { Section } from "@/components/section"
import { Button } from "@/components/ui"

export function FreeSupport() {
  return (
    <Section id="pomagaj-za-darmo">
      <Section.Header align="center">
        <p className="text-primary-500 mb-2 font-bold uppercase">Pomagaj za darmo</p>
        <h2 className="mb-4 text-3xl lg:text-5xl">Nie potrzeba wiele by pomóc</h2>
        <p className="text-muted-foreground text-xl">
          Wpłaty finansowe to nie jedyny sposób by nam pomóc. I choć wiemy, że w życiu bywa różnie,
          jedno zawsze pozostaje niezmienne - miłość do zwierząt.
        </p>
      </Section.Header>

      <Section.Content className="text-left">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-12 lg:p-10">
          <div className="flex flex-col items-center lg:w-2/5 lg:items-start">
            <Image src="/fanimani.png" alt="" width={400} height={400} />
          </div>

          <div className="space-y-6 lg:w-3/5">
            <h3 className="mb-4 text-2xl lg:text-3xl">Fanimani</h3>
            <p className="text-primary-500 mb-4 text-xl font-semibold">
              Rób zakupy i wspieraj fundację
            </p>
            <p className="text-muted-foreground text-lg">
              Jeżeli robisz zakupy w internecie, nieważne czy są to buty, elektronika, kosmetyki czy
              książki, możesz nas bezpłatnie wspierać. Z każdego Twojego zakupu średnio 2,5% jego
              wartości trafi do naszej Fundacji, jeśli zaczniesz korzystać z serwisu FaniMani.pl.
            </p>
            <p className="text-muted-foreground text-lg">
              Ty nic nie dopłacasz, a nasi podopieczni dostaną szansę na lepsze życie. Wystarczy
              zainstalować przypominajkę na komputerze lub pobrać aplikację na telefon by wspierać
              nas przy okazji codziennych zakupów.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-6 lg:flex-row">
          <div className="flex-1 rounded-lg border p-6">
            <div className="mb-4 flex items-center gap-3">
              <Smartphone className="text-primary-500 h-6 w-6" />
              <h4 className="text-lg font-semibold">Pobierz aplikację</h4>
            </div>
            <p className="text-muted-foreground mb-4">
              Możesz też pobrać aplikację na swój telefon, aby być zawsze na bieżąco.
            </p>
            <div className="flex max-w-sm gap-4 pr-8">
              <a
                href="https://apps.apple.com/us/app/przypominajka-fanimani-pl/id1600681632?ct=fanimani"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/app-store.png"
                  alt="Pobierz z App Store"
                  width={200}
                  height={60}
                  className="h-auto w-full"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=pl.fanimani.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/google-play.png"
                  alt="Pobierz z Google Play"
                  width={200}
                  height={60}
                  className="h-auto w-full"
                />
              </a>
            </div>
          </div>

          <div className="flex-1 rounded-lg border p-6">
            <div className="mb-4 flex items-center gap-3">
              <Download className="text-primary-500 h-6 w-6" />
              <h4 className="text-lg font-semibold">Zainstaluj przypominajkę</h4>
            </div>
            <p className="text-muted-foreground mb-4">
              Jeżeli częściej robisz zakupy na komputerze niż telefonie możesz zainstalować sobie
              przypominajkę, aby nigdy nie zapomnieć o pomaganiu.
            </p>

            <Button asChild variant="link" size="sm" className="mt-4">
              <a
                href="https://fanimani.pl/sterczaceuszy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-5 w-5" />
                Przejdź na stronę
              </a>
            </Button>
          </div>
        </div>
      </Section.Content>
    </Section>
  )
}
