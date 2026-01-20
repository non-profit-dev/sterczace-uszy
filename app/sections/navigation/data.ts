type NavLink = {
  title: string
  href: string
  description?: string
}

type NavItemWithLinks = {
  title: string
  links: NavLink[]
}

type NavItemDirect = {
  title: string
  href: string
}

type NavItem = NavItemWithLinks | NavItemDirect

export function hasLinks(item: NavItem): item is NavItemWithLinks {
  return "links" in item
}

const data: NavItem[] = [
  {
    title: "Fundacja",
    links: [
      {
        title: "O nas",
        href: "/fundacja",
        description: "Poznaj lepiej naszą fundację.",
      },
      {
        title: "Dane finansowe",
        href: "/dane-finansowe",
        description: "Finanse i transparentność fundacji.",
      },
      {
        title: "Partnerzy i zniżki",
        href: "/partnerzy-i-znizki",
        description: "Sprawdź, kto z nami współpracuje.",
      },
    ],
  },
  {
    title: "Adopcja",
    links: [
      {
        title: "Zwierzęta do adopcji",
        href: "/do-adopcji",
        description: "Sprawdź, kto szuka domu.",
      },
      {
        title: "Proces adopcji",
        href: "/proces-adopcji",
        description: "Dowiedz się, jak wygląda adopcja.",
      },
      {
        title: "Adopcja za granicę",
        href: "/adopcja-za-granice",
        description: "Adopcja zwierząt za granicę Polski.",
      },
      {
        title: "Adopcja wirtualna",
        href: "/adopcja-wirtualna",
        description: "Wspieraj zwierzęta na odległość.",
      },
      {
        title: "Najczęstsze pytania",
        href: "/faq",
        description: "Odpowiedzi na często zadawane pytania.",
      },
    ],
  },
  {
    title: "Jak pomóc?",
    links: [
      {
        title: "Wpłać darowiznę",
        href: "/wsparcie#darowizna",
      },
      {
        title: "Przekaż 1.5% podatku",
        href: "/wsparcie#przekaz-podatek",
      },
      {
        title: "Zostań domem tymczasowym",
        href: "/wsparcie#dom-tymczasowy",
      },
      {
        title: "Zostań wolontariuszem",
        href: "/wsparcie#wolontariat",
      },
      {
        title: "Pomagaj za darmo",
        href: "/wsparcie#pomagaj-za-darmo",
      },
    ],
  },
  {
    title: "Dokumenty",
    links: [
      {
        title: "Umowy",
        href: "/umowy",
        description: "Pobierz umowy i dokumenty.",
      },
      {
        title: "Ankiety",
        href: "/ankiety",
        description: "Wypełnij ankiety adopcyjne.",
      },
    ],
  },
  {
    title: "Kontakt",
    href: "/kontakt",
  },
]

export default data
