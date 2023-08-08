import { icons } from "design-system/tokens/icons"

import Icon from "./Icon"

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    name: {
      control: {
        type: "select",
      },
      options: Object.keys(icons),
    },
  },
}

export const Overview = {
  args: {
    name: "chevronDown",
    size: "medium",
  },
}
