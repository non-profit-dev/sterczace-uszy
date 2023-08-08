import Typography from "design-system/components/typography"

import Container from "./Container"

export default {
  title: "Components/Container",
  component: Container,
}

export const Overview = {
  args: {
    size: "medium",
    as: "section",
  },
  render: (args) => (
    <Container {...args}>
      <Typography>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, alsiquet nec, vulputate
        eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
        justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
        Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
        tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
        enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,{" "}
      </Typography>
    </Container>
  ),
}
