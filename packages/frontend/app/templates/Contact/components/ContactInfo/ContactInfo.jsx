import { useTheme } from "@emotion/react"
import Typography from "design-system/components/typography"
import List from "design-system/components/list"
import ListItem from "design-system/components/listItem"
import Button from "design-system/components/button"
import Contact from "frontend/public/contact/Contact.svg"
import globalData from "shared/data"
import * as Styled from "./ContactInfo.styled"

const listData = [
  {
    iconName: "phone",
    variant: "gray",
    iconSize: "small",
    button: (
      <Button
        variant="text"
        text={`${globalData.contact.phoneFirst.text} - sms`}
        size="small"
        color="black"
        href={globalData.contact.phoneFirst.link}
      />
    ),
  },
  {
    iconName: "phone",
    variant: "gray",
    iconSize: "small",
    button: (
      <Button
        variant="text"
        text={`${globalData.contact.phoneSecond.text} - sms`}
        size="small"
        color="black"
        href={globalData.contact.phoneSecond.link}
      />
    ),
  },
  {
    iconName: "mail",
    variant: "gray",
    iconSize: "small",
    button: (
      <Button
        variant="text"
        text={globalData.contact.mail.text}
        size="small"
        color="black"
        href={globalData.contact.mail.link}
      />
    ),
  },
]

const ContactInfo = () => {
  const theme = useTheme()
  return (
    <Styled.ContactInfoContainer>
      <Typography variant="h3" as="h1" color={theme.colors.gray[600]}>
        Bądźmy w kontakcie!
      </Typography>
      <Contact />
      {listData.map(({ iconName, variant, iconSize, button }) => (
        <List gap={8} key={variant}>
          <ListItem iconName={iconName} iconSize={iconSize}>
            {button}
          </ListItem>
        </List>
      ))}
    </Styled.ContactInfoContainer>
  )
}

export default ContactInfo
