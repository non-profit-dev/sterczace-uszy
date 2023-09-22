import Navigation from "./Navigation"

export default {
  title: "Blocks/Navigation",
  component: Navigation,
}

export const Controls = {
  args: {
    navigationData: [
      {
        title: "Strona główna",
        href: "/",
      },
      {
        title: "O nas",
        links: [
          { title: "Historia", href: "/o-nas/historia" },
          { title: "Zespół", href: "/o-nas/zespol" },
          { title: "Misja", href: "/o-nas/misja" },
        ],
      },
      {
        title: "Usługi",
        links: [
          { title: "Usługa 1", href: "/uslugi/usluga-1" },
          { title: "Usługa 2", href: "/uslugi/usluga-2" },
          { title: "Usługa 3", href: "/uslugi/usluga-3" },
        ],
      },
    ],
  },
}
