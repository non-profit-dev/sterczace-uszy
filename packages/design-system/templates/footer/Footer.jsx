import { useTheme } from "@emotion/react"
import Typography from "design-system/components/typography/Typography"
import IconButton from "design-system/components/iconButton"

import List from "design-system/components/list"
import ListItem from "design-system/components/listItem"
import Button from "design-system/components/button"
import footerData from "./footerData"

import * as Styled from "./Footer.styled"

const Footer = () => {
  const {
    contact,
    foundationData: {
      nip,
      krs,
      icon,
      accountNumberText,
      buttonText,
      accountNumber,
    },
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
        <Styled.FoundationDataWrapper>
          <List gap={12}>
            <ListItem>
              <Typography variant="h6" color={theme.colors.grey[600]}>
                {contactTitle} :
              </Typography>
            </ListItem>
            {contact.map((item) => (
              <ListItem
                key={item.text}
                iconName={item.icon}
                size="medium"
                variant="gray"
              >
                {item.text}
              </ListItem>
            ))}
          </List>
          <List gap={16}>
            <ListItem>
              <Typography variant="h6" color={theme.colors.grey[600]}>
                {foundationDataTitle} :
              </Typography>
            </ListItem>
            <ListItem variant="grey">
              {nip} {krs}
            </ListItem>
            <ListItem iconName={icon} size="medium" variant="gray">
              {accountNumberText}
              <Button
                variant="text"
                text={buttonText}
                size="small"
                color="primary"
              />
            </ListItem>
            <ListItem variant="gray">{accountNumber}</ListItem>
          </List>
        </Styled.FoundationDataWrapper>

        <Styled.SectionWrapper>
          <List gap={12}>
            <ListItem>
              <Typography variant="h6" color={theme.colors.grey[600]}>
                {adoptionTitle} :
              </Typography>
            </ListItem>
            {adoption.map((item) => (
              <ListItem variant="gray" key={item.title}>
                <Button
                  variant="text"
                  text={item.title}
                  size="small"
                  color="black"
                  href={item.link}
                />
              </ListItem>
            ))}
          </List>

          <List gap={12}>
            <ListItem>
              <Typography variant="h6" color={theme.colors.grey[600]}>
                {foundationTitle} :
              </Typography>
            </ListItem>
            {foundation.map((item) => (
              <Button
                variant="text"
                text={item.title}
                size="small"
                color="black"
                href={item.link}
                key={item.title}
              />
            ))}
          </List>

          <List gap={12}>
            <ListItem>
              <Typography variant="h6" color={theme.colors.grey[600]}>
                {supportTitle} :
              </Typography>
            </ListItem>
            {support.map((item) => (
              <ListItem variant="gray" key={item.title}>
                <Button
                  variant="text"
                  text={item.title}
                  size="small"
                  color="black"
                  href={item.link}
                />
              </ListItem>
            ))}
          </List>
        </Styled.SectionWrapper>
      </Styled.ContentWrapper>

      <Styled.CopyrightWrapper>
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
