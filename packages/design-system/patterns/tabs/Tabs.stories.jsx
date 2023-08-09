import Tabs from "./Tabs"

export default {
  title: "Patterns/Tabs",
  component: Tabs,
}

export const Controls = {
  args: {
    id: "example-tabs",
    transparentContent: false,
    data: [
      {
        tab: `Tab 1`,
        content: `Content 1`,
      },
      {
        tab: `Tab 2`,
        content: `Content 2`,
      },
    ],
  },
}
