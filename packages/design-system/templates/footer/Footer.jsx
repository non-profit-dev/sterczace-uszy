import { useTheme } from "@emotion/react"
import Typography from "design-system/components/typography/Typography"
import IconButton from "design-system/components/iconButton"

import List from "design-system/components/list"
import ListItem from "design-system/components/listItem"
import footerData from "./footerData"

import * as Styled from "./Footer.styled"

const Footer = () => {
  const {
    contact,
    foundationData: { nip, krs, accountNumber },
    adoption,
    foundation,
    support,
    sectionsTitles: {
      contactTitle,
      foundationDataTitle,
      adoptionTitle,
      foundationTitle,
      supportTitle,
    },
    copyright,
  } = footerData

  const theme = useTheme()

  return (
    <Styled.FooterContainer>
      <Styled.LogoContainer>
        <Typography variant="h4" color={theme.colors.grey[600]}>
          LOGO
        </Typography>
      </Styled.LogoContainer>

      <Styled.ContentWrapper>
        <Styled.Wrapper>
          <List>
            <Typography variant="h6" color={theme.colors.grey[600]}>
              {contactTitle} :
            </Typography>
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
            <Typography variant="h6" color={theme.colors.grey[600]}>
              {foundationDataTitle} :
            </Typography>
            <Typography>
              {nip} {krs}
            </Typography>
            <Typography>{accountNumber}</Typography>
          </Styled.SectionWrapper>
        </Styled.Wrapper>

        <Styled.SectionWrapper>
          <List>
            <Typography variant="h6" color={theme.colors.grey[600]}>
              {adoptionTitle} :
            </Typography>
            {adoption.map((item) => (
              <ListItem variant="gray" key={item.title}>
                <Styled.LinkWrapper href={item.link}>
                  {item.title}
                </Styled.LinkWrapper>
              </ListItem>
            ))}
          </List>

          <List>
            <Typography variant="h6" color={theme.colors.grey[600]}>
              {foundationTitle} :
            </Typography>
            {foundation.map((item) => (
              <ListItem variant="gray" key={item.title}>
                <Styled.LinkWrapper href={item.link}>
                  {item.title}
                </Styled.LinkWrapper>
              </ListItem>
            ))}
          </List>

          <List>
            <Typography variant="h6" color={theme.colors.grey[600]}>
              {supportTitle} :
            </Typography>
            {support.map((item) => (
              <ListItem variant="gray" key={item.title}>
                <Styled.LinkWrapper href={item.link}>
                  {item.title}
                </Styled.LinkWrapper>
              </ListItem>
            ))}
          </List>
        </Styled.SectionWrapper>
      </Styled.ContentWrapper>

      <Styled.CopyrightWrapper direction="row" layout="stretch">
        <Typography variant="bodySmall" color={theme.colors.grey[600]}>
          {copyright}
        </Typography>
        <Styled.IconsContainer>
          <IconButton name="facebook" size="medium" />
          <IconButton name="instagram" size="medium" />
        </Styled.IconsContainer>
      </Styled.CopyrightWrapper>
    </Styled.FooterContainer>
  )
}
export default Footer
