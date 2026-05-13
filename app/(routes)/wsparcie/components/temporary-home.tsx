import Link from "next/link"

import { Download } from "lucide-react"

import { Section } from "@/components/section"
import { Button } from "@/components/ui"
import { getGlobalData } from "@/lib/contentful/queries"

export async function TemporaryHome() {
  const globalData = await getGlobalData()

  return (
    <Section id="dom-tymczasowy" className="bg-secondary-200">
      <Section.Header align="center">
        <p className="text-primary-500 font-bold uppercase">Pomagaj</p>
        <h2 className="text-3xl lg:text-5xl">Zostań domem tymczasowym</h2>
        <p className="text-muted-foreground text-lg lg:text-xl">
          Dom tymczasowy to pierwsze bezpieczne miejsce, jakie poznaje uratowane zwierzę. <br />
          To tutaj uczy się, że człowiek może być dobry, że miska zawsze będzie pełna, a dotyk nie
          boli.
        </p>
      </Section.Header>

      <Section.Content className="mx-auto max-w-4xl">
        <p className="text-2xl font-bold md:text-center lg:text-3xl">
          Jak to wygląda krok po kroku?
        </p>

        <div className="mt-6 flex flex-col gap-6 lg:mt-12 lg:gap-10">
          <div className="flex md:gap-6">
            <div className="h-10 w-10 flex-none lg:h-16 lg:w-16">
              <p className="font-mogra text-primary-500 mb-2 text-4xl lg:text-6xl">1</p>
            </div>

            <div>
              <h3 className="mb-4 text-xl lg:text-2xl">Wypełnij ankietę</h3>
              <p className="text-muted-foreground text-md lg:text-lg">
                Cieszymy się, że chcesz pomóc. Dla dobra naszych podopiecznych musimy upewnić się,
                że trafiają w odpowiednie ręce - dlatego prosimy Cię o wypełnienie krótkiej ankiety.
              </p>
              <p className="text-muted-foreground text-md mt-2 lg:text-lg">
                Uzupełnioną ankietę prześlij na adres:{" "}
                <Button asChild variant="link" size="sm">
                  <a href={`mailto:${globalData?.email}`}>{globalData?.email}</a>
                </Button>
              </p>

              {globalData?.temporaryHomeSurveyLink && (
                <Button asChild variant="link" size="sm" className="mt-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={globalData?.temporaryHomeSurveyLink}
                  >
                    <Download className="h-4 w-4" />
                    Pobierz ankietę
                  </a>
                </Button>
              )}
            </div>
          </div>

          <div className="flex md:gap-6">
            <div className="h-10 w-10 flex-none lg:h-16 lg:w-16">
              <p className="font-mogra text-primary-500 mb-2 text-4xl lg:text-6xl">2</p>
            </div>

            <div>
              <h3 className="mb-4 text-xl lg:text-2xl">Zdecyduj na jak długo</h3>
              <p className="text-muted-foreground text-md lg:text-lg">
                Zostając domem tymczasowym deklarujesz, jak długo jesteś w stanie zapewnić opiekę.
                Minimalny okres to 6 miesięcy, ale pamiętaj:
              </p>

              <p className="text-muted-foreground text-md mt-2 font-semibold lg:text-lg">
                Dom stały ma zawsze pierwszeństwo w adopcji
              </p>

              <p className="text-muted-foreground text-md mt-2 lg:text-lg">
                Jeśli się zakochasz i zechcesz zostać domem na zawsze — daj nam znać To zdarza się
                częściej, niż myślisz.
              </p>
            </div>
          </div>

          <div className="flex md:gap-6">
            <div className="h-10 w-10 flex-none lg:h-16 lg:w-16">
              <p className="font-mogra text-primary-500 mb-2 text-4xl lg:text-6xl">3</p>
            </div>

            <div>
              <h3 className="mb-4 text-xl lg:text-2xl">Daj dom i miłość</h3>
              <p className="text-muted-foreground text-md lg:text-lg">Fundacja zapewnia:</p>
              <ul className="text-muted-foreground text-md mt-2 mb-4 list-inside list-disc space-y-2 lg:text-lg">
                <li>karmę, miski, zabawki i legowisko</li>
                <li>pełne wsparcie weterynaryjne (opłacamy wizyty — wystarczy zbierać faktury)</li>
              </ul>
              <p className="text-muted-foreground text-md mt-2 lg:text-lg">
                Ty dajesz to, co najważniejsze: cierpliwość, spokój i poczucie bezpieczeństwa. Nawet
                jeśli tylko na chwilę - ta chwila zmienia całe życie.
              </p>
            </div>
          </div>
        </div>
      </Section.Content>

      <div className="mt-4 rounded-2xl bg-white p-4 md:self-center md:p-8">
        <p className="md:text-center md:text-lg">
          <span className="font-bold">Masz pytania?</span> Napisz do nas na{" "}
          <Button asChild variant="link" size="sm">
            <a href={`mailto:${globalData?.email}`}>{globalData?.email}</a>
          </Button>{" "}
          lub zajrzyj do sekcji{" "}
          <Button asChild variant="link" size="sm">
            <Link href="/kontakt">kontakt</Link>
          </Button>
          .
        </p>
      </div>
    </Section>
  )
}
