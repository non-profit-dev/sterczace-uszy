import TeamCard from "./TeamCard"

export default {
  title: "Patterns/TeamCard",
  component: TeamCard,
}

export const Controls = {
  args: {
    member: {
      name: "Anna Nowak",
      role: "Project Manager",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXP2_v0EVGWmr5wfwuCfeHnIaCJz5iPEYQOQ&usqp=CAU",
      linkedinHref: "https://www.linkedin.com/in/anna/",
    },
  },
  render: (args) => <TeamCard {...args} />,
}
