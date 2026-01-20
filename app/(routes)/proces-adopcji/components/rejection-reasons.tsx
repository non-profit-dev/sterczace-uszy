import { Activity, Baby, Check, Dog, GraduationCap, Home, Sparkles } from "lucide-react"

export function RejectionReasons() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
      <div className="mb-12 flex max-w-3xl flex-col gap-4">
        <p className="text-primary-500 font-bold uppercase">
          Dlaczego czasem musimy powiedzieć "nie"
        </p>
        <h2 className="text-3xl lg:text-5xl">Czasem najlepsza decyzja to "nie teraz"</h2>
        <p className="text-xl">
          Zdarza się, że musimy odmówić adopcji konkretnego psa. To nie znaczy, że jesteś złą osobą
          ani że nie możesz adoptować w ogóle. To znaczy, że w tej chwili ten konkretny pies nie
          pasuje do Twojej sytuacji – ale może inny będzie idealny!
        </p>
      </div>

      <div className="mb-12">
        <h3 className="mb-8 text-2xl font-bold lg:text-3xl">Najczęstsze przyczyny odmowy:</h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="border-primary-500 rounded-lg border-l-4 bg-white p-6 shadow-sm">
            <div className="mb-3 flex gap-3">
              <Activity className="text-primary-500 h-8 w-8 shrink-0" />
              <h4 className="text-xl font-bold">Pies potrzebuje bardzo aktywnego domu</h4>
            </div>
            <p>
              Młody, energiczny owczarek australijski nie będzie szczęśliwy w małym mieszkaniu z
              osobą pracującą 10h dziennie. To nie złość – to dbałość o psa i o Ciebie.
            </p>
          </div>

          <div className="border-primary-500 rounded-lg border-l-4 bg-white p-6 shadow-sm">
            <div className="mb-3 flex gap-3">
              <Baby className="text-primary-500 h-8 w-8 shrink-0" />
              <h4 className="text-xl font-bold">Pies nie akceptuje dzieci</h4>
            </div>
            <p>
              Niektóre psy mają trudne doświadczenia. Nie możemy ryzykować bezpieczeństwa Twoich
              dzieci ani stresu psa.
            </p>
          </div>

          <div className="border-primary-500 rounded-lg border-l-4 bg-white p-6 shadow-sm">
            <div className="mb-3 flex gap-3">
              <Dog className="text-primary-500 h-8 w-8 shrink-0" />
              <h4 className="text-xl font-bold">Pies nie toleruje innych zwierząt</h4>
            </div>
            <p>
              Jeśli masz w domu kota czy drugiego psa, a nasz podopieczny źle reaguje na zwierzęta –
              to przepis na katastrofę.
            </p>
          </div>

          <div className="border-primary-500 rounded-lg border-l-4 bg-white p-6 shadow-sm">
            <div className="mb-3 flex gap-3">
              <Home className="text-primary-500 h-8 w-8 shrink-0" />
              <h4 className="text-xl font-bold">Warunki mieszkaniowe</h4>
            </div>
            <p>
              Brak ogrodzenia dla psa, który ucieka. Wysokie schody dla psa z problemami stawowymi.
              Wynajmujący, który nie zgadza się na psa. To nie są nasze fanaberie – to realne
              zagrożenia.
            </p>
          </div>

          <div className="border-primary-500 rounded-lg border-l-4 bg-white p-6 shadow-sm md:col-span-2">
            <div className="mb-3 flex gap-3">
              <GraduationCap className="text-primary-500 h-8 w-8 shrink-0" />
              <h4 className="text-xl font-bold">Pies potrzebuje doświadczonego opiekuna</h4>
            </div>
            <p>
              Psy ze złożonymi problemami behawioralnymi potrzebują kogoś, kto wie co robi. Jeśli to
              Twój pierwszy pies – poszukajmy Ci łatwiejszego kompana!
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="mb-6 text-2xl font-bold lg:text-3xl">Co możesz zrobić?</h3>
        <div className="rounded-lg bg-white p-8 shadow-sm">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Check className="h-7 w-7 shrink-0 text-green-600" />
              <p className="text-lg">
                Zapytaj o inne psy – może ktoś inny lepiej do Ciebie pasuje?
              </p>
            </li>
            <li className="flex items-start gap-3">
              <Check className="h-7 w-7 shrink-0 text-green-600" />
              <p className="text-lg">
                Popracuj nad warunkami – zabezpiecz ogrodzenie, zmień umowę najmu
              </p>
            </li>
            <li className="flex items-start gap-3">
              <Check className="h-7 w-7 shrink-0 text-green-600" />
              <p className="text-lg">
                Zdobądź doświadczenie – może najpierw zostań domem tymczasowym?
              </p>
            </li>
            <li className="flex items-start gap-3">
              <Check className="h-7 w-7 shrink-0 text-green-600" />
              <p className="text-lg">
                Daj nam znać, jeśli coś się zmieni – może za pół roku sytuacja będzie inna!
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-primary-500 rounded-lg p-8 text-center text-white">
        <p className="mb-3 text-xl font-bold lg:text-2xl">
          Pamiętaj: Nasze "nie" zawsze ma głęboki powód.
        </p>
        <p className="flex items-center justify-center gap-2 text-xl">
          Dbamy o psy i o Was. Nie poddawaj się – razem znajdziemy dla Ciebie idealnego przyjaciela!{" "}
          <Sparkles className="h-6 w-6" />
        </p>
      </div>
    </section>
  )
}
