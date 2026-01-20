import { Section } from "@/components/section"
import {
  getAdoptedAnimalsCount,
  getAllAnimalsCount,
  getYearsLabel,
  getYearsSinceFoundation,
} from "@/lib/contentful"

export async function Achievements() {
  let yearsActive = 0
  let adoptedCount = 0
  let totalAnimals = 0

  try {
    yearsActive = getYearsSinceFoundation()
    adoptedCount = await getAdoptedAnimalsCount()
    totalAnimals = await getAllAnimalsCount()
  } catch (error) {
    console.error("Failed to fetch achievements data from Contentful:", error)
    yearsActive = getYearsSinceFoundation()
    adoptedCount = 195
    totalAnimals = 215
  }

  return (
    <Section>
      <Section.Header align="center">
        <p className="text-primary-500 font-bold uppercase">Fundacja w liczbach</p>
        <h2 className="text-3xl lg:text-5xl">Nasze osiągnięcia</h2>
        <p className="text-xl">
          Te statystyki to nasz wspólny sukces. Pokazują, że konsekwentna pomoc zmienia świat na
          lepsze.
        </p>
      </Section.Header>

      <Section.Content align="center" className="text-center">
        <div className="mx-auto flex max-w-4xl flex-col justify-center gap-10 md:flex-row lg:px-6">
          <div className="flex-1">
            <p className="text-primary-500 font-mogra text-6xl lg:text-8xl">{yearsActive}</p>
            <p className="text-xl font-semibold lg:text-2xl">{getYearsLabel(yearsActive)}</p>
          </div>

          <div className="flex-1">
            <p className="text-primary-500 font-mogra text-6xl lg:text-8xl">{adoptedCount}</p>
            <p className="text-xl font-semibold lg:text-2xl">Szczęśliwych adopcji</p>
          </div>

          <div className="flex-1">
            <p className="text-primary-500 font-mogra text-6xl lg:text-8xl">{totalAnimals}</p>
            <p className="text-xl font-semibold lg:text-2xl">Uratowanych zwierząt</p>
          </div>
        </div>
      </Section.Content>
    </Section>
  )
}
