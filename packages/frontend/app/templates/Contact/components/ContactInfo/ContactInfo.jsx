import { useTheme } from "@emotion/react"
import Typography from "design-system/components/typography"
import List from "design-system/components/list"
import ListItem from "design-system/components/listItem"
import Button from "design-system/components/button"
import Contact from "frontend/public/contact/Contact.svg"
import * as Styled from "./ContactInfo.styled"
import data from "./data"

const ContactInfo = () => {
  const theme = useTheme()
  return (
    <Styled.ContactInfoContainer>
      <Typography variant="h3" color={theme.colors.grey[600]}>
        Bądźmy w kontakcie!
      </Typography>
      <Contact />
      <List gap={8}>
        {data.map((item) => (
          <ListItem
            key={item.text}
            iconName={item.icon}
            variant="gray"
            iconSize="small"
          >
            <Button
              variant="text"
              text={item.text}
              size="small"
              color="black"
              href={item.link}
            />
          </ListItem>
        ))}
      </List>
    </Styled.ContactInfoContainer>
  )
}

export default ContactInfo
