import Typography from "./Typography"

export default {
  title: "Components/Typography",
  component: Typography,
}

export const Overview = {
  args: {
    variant: "bodyLarge",
  },
  render: (args) => <Typography {...args}>Typography</Typography>,
}
