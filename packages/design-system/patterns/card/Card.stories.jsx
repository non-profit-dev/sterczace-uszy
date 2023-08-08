import Title from "design-system/components/title"
import Button from "design-system/components/button"

import Card from "./Card"

export default {
  title: "Patterns/Card",
  component: Card,
}

export const Overview = {
  args: {
    title: <Title text="Porozmawiaj" />,
    illustrationName: "heartWithDogFace",
    button: (
      <Button
        text="Wejdź"
        variant="border"
        color="primary"
        iconEnd="arrowRight"
      />
    ),
    href: "https://google.com",
    layout: "center",
  },
}
