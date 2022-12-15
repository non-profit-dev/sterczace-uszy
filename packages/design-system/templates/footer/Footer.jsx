import Typography from "design-system/components/typography/Typography"
import Icon from "design-system/components/icon"
import IconButton from "design-system/components/iconButton"

import List from "design-system/components/list"
import ListItem from "design-system/components/listItem"
import footerData from "./footerData"

import * as Styled from "./Footer.styled"

const Footer = () => {
  const { contact, foundationData, adoption, foundation, support } = footerData

  return (
    <Styled.FooterContainer>
      <Styled.LogoContainer>
        <Typography>LOGO</Typography>
      </Styled.LogoContainer>
      <Styled.SectionWrapper>
        <Typography>Kontakt:</Typography>
        <List>
          {contact.map((item) => (
            <ListItem
              key={item.text}
              iconName={item.icon}
              size="medium"
              variant="gray"
            >
              <Styled.LinkWrapper>{item.text}</Styled.LinkWrapper>
            </ListItem>
          ))}
        </List>
        <Styled.SectionWrapper>
          <Typography>Dane fundacji:</Typography>
          <Typography>
            {foundationData.nip} {foundationData.krs}
          </Typography>
          <Typography>{foundationData.acountNumber}</Typography>
        </Styled.SectionWrapper>
      </Styled.SectionWrapper>

      <Styled.SectionWrapper>
        <Typography>Adopcja:</Typography>
        <List>
          {adoption.map((item) => (
            <ListItem variant="gray" key={item.title}>
              <Styled.LinkWrapper href={item.link}>
                {item.title}
              </Styled.LinkWrapper>
            </ListItem>
          ))}
        </List>
      </Styled.SectionWrapper>

      <Styled.SectionWrapper>
        <Typography>Fundacja:</Typography>
        <List>
          {foundation.map((item) => (
            <ListItem variant="gray" key={item.title}>
              <Styled.LinkWrapper href={item.link}>
                {item.title}
              </Styled.LinkWrapper>
            </ListItem>
          ))}
        </List>
      </Styled.SectionWrapper>

      <Styled.SectionWrapper>
        <Typography>Wsparcie:</Typography>
        <List>
          {support.map((item) => (
            <ListItem variant="gray" key={item.title}>
              <Styled.LinkWrapper href={item.link}>
                {item.title}
              </Styled.LinkWrapper>
            </ListItem>
          ))}
        </List>
      </Styled.SectionWrapper>

      <Styled.SectionWrapper direction="row" layout="stretch">
        <Typography>Copyright © 2022 Sterczące uszy</Typography>
        <IconButton name="facebook" size="medium" />
        <IconButton name="instagram" size="medium" />
      </Styled.SectionWrapper>
    </Styled.FooterContainer>
  )
}
export default Footer
