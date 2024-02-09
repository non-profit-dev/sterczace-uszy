import Hero from "./Hero"

export default {
  title: "Patterns/Hero",
  component: Hero,
}

export const WithBackground = {
  args: {
    heading: "Hero Heading",
    subtitle: "Hero Subtitle",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, possimus eligendi, ratione consectetur error vel adipisci temporibus maxime voluptates deleniti et delectus.",
    backgroundImage:
      "https://images.pexels.com/photos/4040656/pexels-photo-4040656.jpeg",
    backgroundMobile:
      "https://images.pexels.com/photos/4040656/pexels-photo-4040656.jpeg",
  },
}

export const WithAsset = {
  args: {
    heading: "Hero Heading",
    subtitle: "Hero Subtitle",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, possimus eligendi, ratione consectetur error vel adipisci temporibus maxime voluptates deleniti et delectus.",
    asset: "https://www.sterczaceuszy.pl/virtual-adoption/hero.png",
    backgroundColor: "#FAF4F4",
  },
}
