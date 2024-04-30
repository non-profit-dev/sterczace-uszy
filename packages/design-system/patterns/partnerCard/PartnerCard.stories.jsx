import PartnerCard from "./PartnerCard"

export default {
  title: "Patterns/PartnerCard",
  component: PartnerCard,
}

export const Controls = {
  args: {
    imageSrc:
      "https://www.wojtkowszkolenia.pl/wp-content/themes/wojtkow/assets/images/logo.svg",
    title: "Książki, kursy i webinary dla właścicieli psów i behawiorystów",
    discount: "-10%",
    children:
      "Adoptując zwierzę z naszej fundacji masz szansę otrzymać książkę “Dekoder Psów” oraz zniżkę w wysokości -40% na bogatą ofertę szkoleń. Jeśli jeszcze szukasz zwierzaka do adopcji możesz skorzystać ze stałej zniżki -10% z kodem WOLO90",
    link: "https://google.com/",
    promoCode: "123abc",
  },
}
