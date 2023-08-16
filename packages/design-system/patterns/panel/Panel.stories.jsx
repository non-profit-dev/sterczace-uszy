import Title from "design-system/components/title"
import Typography from "design-system/components/typography"

import Panel from "./Panel"

export default {
  title: "Patterns/Panel",
  component: Panel,
}

export const Controls = {
  args: {
    title: (
      <Title
        text="Przelew jednorazowy lub zlecenie stałe"
        iconStart="money"
        variant="h5"
        line={false}
      />
    ),
    accountNumber: "41 1870 1045 2078 1072 8639 0001",
  },
  render: (args) => (
    <Panel {...args}>
      <Typography variant="bodyTitle">
        Fundacja Sterczące Uszy <br /> ul. Gen. Władysława Sikorskiego 3,
        <br /> 62-030 Luboń <br /> NIP 7831855392
        <br /> Tytuł przelewu: Wsparcie dla Fundacji
      </Typography>
    </Panel>
  ),
}
