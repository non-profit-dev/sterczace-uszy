import Banner from "./Banner"

export default {
  title: "Components/Banner",
  component: Banner,
}

export const Overview = {
  args: {},
  render: (args) => (
    <Banner {...args}>
      Nasi podopieczni czekają na Twoje wsparcie! Chcesz nam pomóc? Zajrzyj{" "}
      <a href="/">tutaj</a>
    </Banner>
  ),
}
