import Illustration, { illustrations } from "./Illustration"

export default {
  title: "Components/Illustration",
  component: Illustration,
  argTypes: {
    name: {
      control: {
        type: "select",
      },
      options: Object.keys(illustrations),
    },
  },
}

export const Controls = {
  args: {
    name: "heartWithDogFace",
  },
}
