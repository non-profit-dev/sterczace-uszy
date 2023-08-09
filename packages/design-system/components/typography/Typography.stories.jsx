import Typography from "./Typography"

export default {
  title: "Components/Typography",
  component: Typography,
}

export const Controls = {
  args: {
    variant: "bodyLarge",
  },
  render: (args) => <Typography {...args}>Typography</Typography>,
}
