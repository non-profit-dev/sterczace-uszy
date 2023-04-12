import * as Styled from "./Subnav.styled"

const data = [
  {
    title: "1.5% podatku",
    href: "#podatek",
  },
  {
    title: "Wpłaty",
    href: "#wplaty",
  },
  {
    title: "Dom tymczasowy",
    href: "#dom-tymczasowy",
  },
]

const Subnav = () => (
  <Styled.Container as="section">
    <Styled.Nav>
      {data.map((item) => (
        <Styled.Item key={item.title}>
          <Styled.Link variant="bodyTitle" as="a" href={item.href}>
            {item.title}
          </Styled.Link>
        </Styled.Item>
      ))}
    </Styled.Nav>
  </Styled.Container>
)

export default Subnav
