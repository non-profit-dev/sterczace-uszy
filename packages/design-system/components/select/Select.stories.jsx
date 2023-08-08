import Select from "./Select"

export default {
  title: "Components/Select",
  component: Select,
}

export const Overview = {
  args: {
    label: "Temat",
    options: ["Adopcja", "Wolontariat", "Dom tymczasowy"],
    defaultValue: "Wybierz temat wiadomości",
  },
}
