import Button from "design-system/components/button"

import TextBanner from "./TextBanner"

export default {
  title: "Patterns/TextBanner",
  component: TextBanner,
}

export const Overview = {
  args: {
    layout: "left",
    heading: "Pomóż nam pomagać",
    subtitle: "FUNDACJA STERCZĄCE USZY",
    children:
      "Nasi podopieczni czekają na Twoją pomoc. Nowy dom, wsparcie finansowe, spacery, pełna miska, opieka lekarza to tylko niektóre formy wsparcia. Jeżeli chcesz czynić dobro sprawdz, co możesz zrobić.",
    button: (
      <Button
        text="Button"
        variant="text"
        color="primary"
        iconEnd="arrowRight"
      />
    ),
    href: "https://google.com",
  },
}
