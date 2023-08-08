import ListItem from "design-system/components/listItem"

import List from "./List"

export default {
  title: "Components/List",
  component: List,
}

export const Overview = {
  args: {
    gap: 8,
  },
  render: (args) => (
    <List {...args}>
      <ListItem iconName="check">Lista element 1 </ListItem>
      <ListItem iconName="check" variant="gray">
        Lista element 2
      </ListItem>
      <ListItem iconName="check">Lista element 3 </ListItem>
    </List>
  ),
}
