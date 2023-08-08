import Typography from "design-system/components/typography"

import Accordion from "./Accordion"

export default {
  title: "Components/Accordion",
  component: Accordion,
}

export const Overview = {
  args: {
    color: "black",
    activeColor: "black",
    heading: "Fundacja",
    shadow: true,
  },
  render: (args) => (
    <Accordion {...args}>
      <Typography variant="bodySmall">Tu wpisz odpowiedź na pytanie</Typography>
    </Accordion>
  ),
}
