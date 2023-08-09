import Typography from "design-system/components/typography"
import Card from "design-system/patterns/card"
import Button from "design-system/components/button"
import Title from "design-system/components/title"

import Slider from "./Slider"

export default {
  title: "Components/Slider",
  component: Slider,
}

const data = [
  {
    title: "Card Heading 1",
    description:
      "Lorem ipsum dolor sit amet, consect et eiusmod tempor incididunt ut labore et",
    button: "Click here",
  },
  {
    title: "Card Heading 2",
    description:
      "Lorem ipsum dolor sit amet, consect et eiusmod tempor incididunt ut labore et",
    button: "Click here",
  },
  {
    title: "Card Heading 3",
    description:
      "Lorem ipsum dolor sit amet, consect et eiusmod tempor incididunt ut labore et",
    button: "Click here",
  },
  {
    title: "Card Heading 4",
    description:
      "Lorem ipsum dolor sit amet, consect et eiusmod tempor incididunt ut labore et",
    button: "Click here",
  },
  {
    title: "Card Heading 5",
    description:
      "Lorem ipsum dolor sit amet, consect et eiusmod tempor incididunt ut labore et",
    button: "Click here",
  },
]

export const Controls = {
  args: {
    pagination: true,
    navigation: true,
  },
  render: (args) => (
    <Slider {...args}>
      {data.map((item) => (
        <Card
          illustrationName="heartWithDogFace"
          title={<Title text={item.title} />}
          layout="center"
          key={item.title}
        >
          <Typography variant="bodySmall">{item.description}</Typography>
          <Button
            text={item.button}
            variant="text"
            size="small"
            href="https://google.com"
          />
        </Card>
      ))}
    </Slider>
  ),
}
