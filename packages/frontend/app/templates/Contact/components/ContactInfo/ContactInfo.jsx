import { useTheme } from "@emotion/react"
import Typography from "design-system/components/typography"
import List from "design-system/components/list"
import ListItem from "design-system/components/listItem"
import Button from "design-system/components/button"
import globalData from "shared/data"
import * as Styled from "./ContactInfo.styled"

const listData = [
  {
    iconName: "phone",
    text: `${globalData.contact.phoneFirst.text} - sms`,
    link: globalData.contact.phoneFirst.link,
  },
  {
    iconName: "mail",
    text: globalData.contact.mail.text,
    link: globalData.contact.mail.link,
  },
]

const ContactInfo = () => {
  const theme = useTheme()
  return (
    <Styled.ContactInfoContainer>
      <Typography variant="h3" as="h1" color={theme.colors.gray[600]}>
        Napisz do nas!
      </Typography>

      <Styled.FounderInfo>
        <Styled.FounderImage src="/contact/VanessaSzmatuła.png" alt="" />
        <Typography variant="h5" as="p">
          Vanessa Szmatuła
        </Typography>
      </Styled.FounderInfo>

      <List gap={14}>
        {listData.map(({ text, iconName, link }) => (
          <ListItem
            key={text}
            iconName={iconName}
            variant="gray"
            iconSize="medium"
          >
            <Button
              variant="text"
              text={text}
              size="xsmall"
              color="black"
              href={link}
            />
          </ListItem>
        ))}
      </List>
    </Styled.ContactInfoContainer>
  )
}

export default ContactInfo
