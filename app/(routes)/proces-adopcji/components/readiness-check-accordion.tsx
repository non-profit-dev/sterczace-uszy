import { CheckCircle, Clock, Home, Wallet } from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui"

export function ReadinessCheckAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="family">
        <AccordionTrigger className="hover:no-underline">
          <div className="flex items-center gap-3">
            <div className="bg-primary-50 flex h-14 w-14 shrink-0 items-center justify-center rounded-full">
              <CheckCircle className="text-primary-500 h-5 w-5 lg:h-7 lg:w-7" />
            </div>
            <h3 className="text-xl">Czy cała rodzina jest na "tak"?</h3>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-4 pl-11">
            <p className="leading-relaxed md:text-lg">
              Pies nie jest prezentem dla dziecka – to odpowiedzialność całej rodziny.
              Porozmawiajcie wspólnie i ustalcie:
            </p>
            <ul className="ml-4 list-none space-y-2 md:text-lg">
              <li>• Kto będzie głównym opiekunem? Kto wyprowadzi psa o 6 rano, gdy pada?</li>
              <li>• Kto zajmie się psem podczas waszej nieobecności?</li>
              <li>• Czy wszyscy są wolni od alergii na sierść?</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="budget">
        <AccordionTrigger className="hover:no-underline">
          <div className="flex items-center gap-3">
            <div className="bg-primary-50 flex h-14 w-14 shrink-0 items-center justify-center rounded-full">
              <Wallet className="text-primary-500 h-5 w-5 lg:h-7 lg:w-7" />
            </div>

            <h3 className="text-xl">Czy stać Cię na psa?</h3>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="pl-11">
            <p className="leading-relaxed md:text-lg">
              Rocznie pies kosztuje 1500-5000 zł (karma, weterynarz, akcesoria, szkolenia). To
              minimum. Do tego dochodzą nieprzewidziane wydatki – choroba, nagła operacja,
              specjalistyczne treningi.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="time">
        <AccordionTrigger className="hover:no-underline">
          <div className="flex items-center gap-3">
            <div className="bg-primary-50 flex h-14 w-14 shrink-0 items-center justify-center rounded-full">
              <Clock className="text-primary-500 h-5 w-5 lg:h-7 lg:w-7" />
            </div>
            <h3 className="text-xl">Czy masz czas?</h3>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-4 pl-11">
            <p className="leading-relaxed md:text-lg">
              Pies to nie zabawka, którą odłożysz na półkę. To:
            </p>
            <ul className="ml-4 list-none space-y-2 md:text-lg">
              <li>• 2-3 spacery dziennie (min. 1,5h łącznie)</li>
              <li>• Codzienne karmienie, pielęgnacja, szkolenie</li>
              <li>• Uwaga, zabawa, obecność</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="conditions">
        <AccordionTrigger className="hover:no-underline">
          <div className="flex items-center gap-3">
            <div className="bg-primary-50 flex h-14 w-14 shrink-0 items-center justify-center rounded-full">
              <Home className="text-primary-500 h-5 w-5 lg:h-7 lg:w-7" />
            </div>
            <h3 className="text-xl">Czy Twoje warunki są OK?</h3>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-4 pl-11">
            <p className="text-lg leading-relaxed">Sprawdź:</p>
            <ul className="ml-4 list-none space-y-2 md:text-lg">
              <li>• Czy wynajmujący zgadza się na psa?</li>
              <li>• Czy masz bezpieczne ogrodzenie (jeśli dom z ogrodem)?</li>
              <li>• Czy w pobliżu są tereny na spacery?</li>
              <li>• Czy sąsiedzi tolerują szczekanie? (niektóre psy są głośne)</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
