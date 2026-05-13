import Image from "next/image"
import Link from "next/link"

import { MoveRight } from "lucide-react"

import { Button } from "@/components/ui"
import { getGlobalData } from "@/lib/contentful"

type CtaVariant =
  | "foster"
  | "contact"
  | "support"
  | "adoption"
  | "documents"
  | "volunteer"
  | "partnership"

interface CtaProps {
  variant: CtaVariant
}

interface CtaButton {
  text: string
  link: string
}

interface CtaContent {
  title: string
  description: string[]
  button: CtaButton
  backgroundImage: string
}

async function getCtaContent(): Promise<Record<CtaVariant, CtaContent>> {
  const globalData = await getGlobalData()

  return {
    foster: {
      title: "Zostań domem tymczasowym",
      description: [
        "Nie możesz adoptować na stałe?",
        "Zostań domem tymczasowym i daj szansę na lepszy start w nowym życiu.",
      ],
      button: {
        text: "Dowiedz się więcej",
        link: "/wsparcie#dom-tymczasowy",
      },
      backgroundImage: "/cta-background.png",
    },
    contact: {
      title: "Masz pytania?",
      description: [
        "Chcesz dowiedzieć się więcej o naszej działalności?",
        "Skontaktuj się z nami - chętnie odpowiemy na wszystkie pytania.",
      ],
      button: {
        text: "Skontaktuj się",
        link: "/kontakt",
      },
      backgroundImage: "/cta-background.png",
    },
    support: {
      title: "Wesprzyj naszą misję",
      description: ["Dołącz do nas i pomóż ratować kolejne życia.", "Każda pomoc się liczy."],
      button: {
        text: "Wesprzyj nas",
        link: "/wsparcie",
      },
      backgroundImage: "/cta-background.png",
    },
    adoption: {
      title: "Gotowy na nowego przyjaciela?",
      description: ["Przeczytałeś wszystko? Czujesz, że jesteś gotowy? Czas na pierwszy krok!"],
      button: {
        text: "Wypełnij ankietę przedadopcyjną",
        link: globalData?.preAdoptionSurveyLink || "#",
      },
      backgroundImage: "/cta-background.png",
    },
    documents: {
      title: "Masz pytania dotyczące umów lub ankiet?",
      description: [
        "Jeśli masz jakiekolwiek wątpliwości dotyczące umów adopcyjnych lub ankiet, skontaktuj się z nami.",
      ],
      button: {
        text: "Skontaktuj się z nami",
        link: "/kontakt",
      },
      backgroundImage: "/cta-background.png",
    },
    volunteer: {
      title: "Masz inny pomysł na wsparcie?",
      description: [
        "Jeśli chcesz pomóc zwierzętom, ale nie wiesz jak to zrobić - napisz do nas! Każde wsparcie jest dla nas cenne.",
      ],
      button: {
        text: "Skontaktuj się z nami",
        link: "/kontakt",
      },
      backgroundImage: "/cta-background.png",
    },
    partnership: {
      title: "Chcesz z nami współpracować?",
      description: [
        "Jeśli prowadzisz markę, usługę lub projekt, który realnie wspiera dobro zwierząt - odezwij się do nas.",
        "Szukamy partnerów, którzy dbają o jakość, chcą wspierać adopcje i wierzą, że pomaganie może iść w parze z dobrym biznesem.",
      ],
      button: {
        text: "Zaproponuj współpracę",
        link: "/kontakt",
      },
      backgroundImage: "/cta-background.png",
    },
  }
}

export async function Cta({ variant }: CtaProps) {
  const ctaContent = await getCtaContent()
  const content = ctaContent[variant]

  return (
    <section className="relative flex min-h-100 w-full items-center py-6 lg:min-h-130">
      <Image src={content.backgroundImage} alt="" fill className="object-cover" />
      <div className="relative mx-auto flex h-full w-full max-w-6xl items-center px-6">
        <div className="flex flex-col gap-6 text-white md:max-w-xl">
          <h2 className="text-3xl lg:text-5xl">{content.title}</h2>

          <div className="flex flex-col gap-4 text-lg lg:text-2xl">
            {content.description.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:gap-8">
            <Button asChild variant="default" className="self-start">
              <Link
                href={content.button.link}
                target={variant === "adoption" ? "_blank" : undefined}
              >
                {content.button.text} <MoveRight className="w-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
