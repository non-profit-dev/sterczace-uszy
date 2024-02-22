import Container from "design-system/components/container"
import Typography from "design-system/components/typography"
import List from "design-system/components/list"
import ListItem from "design-system/components/listItem"

import * as Styled from "./Content.styled"

const paymentList = [
  {
    text: "Karty płatnicze: Visa, Visa Electron, MasterCard, MasterCard Electronic, Maestro",
  },
  {
    text: "Płatności online",
  },
  {
    text: "Płatności mobilne BLIK",
  },
]

const Content = () => (
  <Container as="section">
    <Styled.Content>
      <Typography variant="h3" as="h2">
        Strona internetowa może udostępniać płatności elektroniczne.
      </Typography>

      <Typography variant="bodyTitle">Dostępne formy płatności to:</Typography>
      <List gap={20}>
        {paymentList.map(({ text }) => (
          <ListItem variant="gray" iconName="check" key={text}>
            <Typography variant="bodyTitle"> {text}</Typography>
          </ListItem>
        ))}
      </List>
      <Styled.Image src="/terms-of-payment/tpay-logos.svg" alt="Tpay logo" />

      <Typography variant="bodyTitle">
        Podmiotem świadczącym obsługę płatności online drogą elektroniczną jest
        Krajowy Integrator Płatności S.A.
      </Typography>
      <Typography variant="bodyTitle">
        W przypadku wystąpienia konieczność zwrotu środków za transakcję
        dokonaną przez wpłacającego kartą płatniczą przyjmujący wpłatę dokonana
        zwrotu na rachunek bankowy przypisany do karty płatniczej Wpłacającego.
      </Typography>
    </Styled.Content>
  </Container>
)
export default Content
