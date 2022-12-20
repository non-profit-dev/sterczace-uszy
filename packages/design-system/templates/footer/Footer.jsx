import { useTheme } from "@emotion/react"
import Typography from "design-system/components/typography/Typography"
import IconButton from "design-system/components/iconButton"

import List from "design-system/components/list"
import ListItem from "design-system/components/listItem"
import Button from "design-system/components/button"
import Container from "design-system/components/container"
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
      <Container>
        <Styled.MainContainer>
          <Styled.LogoContainer>
            <Typography variant="h4" color={theme.colors.grey[600]}>
              LOGO
            </Typography>
          </Styled.LogoContainer>

          <Styled.ContentContainer>
            <Styled.MainDataContainer>
              <Styled.Section>
                <Typography variant="h6" color={theme.colors.grey[600]}>
                  {contactTitle} :
                </Typography>
                <List gap={4}>
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
              </Styled.Section>
              <Styled.Section>
                <Typography variant="h6" color={theme.colors.grey[600]}>
                  {foundationDataTitle} :
                </Typography>
                <List gap={8}>
                  <ListItem variant="grey">
                    <Typography
                      variant="bodySmall"
                      color={theme.colors.grey[600]}
                    >
                      {nip}
                    </Typography>
                    <Typography
                      variant="bodySmall"
                      color={theme.colors.grey[600]}
                    >
                      {krs}
                    </Typography>
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
              </Styled.Section>
            </Styled.MainDataContainer>

            <Styled.SectionsContainer>
              <Styled.Section>
                <Typography variant="h6" color={theme.colors.grey[600]}>
                  {adoptionTitle} :
                </Typography>
                <List gap={12}>
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
              </Styled.Section>

              <Styled.Section>
                <Typography variant="h6" color={theme.colors.grey[600]}>
                  {foundationTitle} :
                </Typography>
                <List gap={12}>
                  {foundation.map((item) => (
                    <ListItem variant="gray" key={item.title}>
                      <Button
                        variant="text"
                        text={item.title}
                        size="small"
                        color="black"
                        href={item.link}
                        key={item.title}
                      />
                    </ListItem>
                  ))}
                </List>
              </Styled.Section>

              <Styled.Section>
                <Typography variant="h6" color={theme.colors.grey[600]}>
                  {supportTitle} :
                </Typography>
                <List gap={12}>
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
              </Styled.Section>
            </Styled.SectionsContainer>
          </Styled.ContentContainer>

          <Styled.CopyrightWrapper>
            <Typography variant="bodySmall" color={theme.colors.grey[600]}>
              {copyright}
            </Typography>
            <Styled.IconsContainer>
              <IconButton name="facebook" size="medium" />
              <IconButton name="instagram" size="medium" />
            </Styled.IconsContainer>
          </Styled.CopyrightWrapper>
        </Styled.MainContainer>
      </Container>
    </Styled.FooterContainer>
  )
}
export default Footer
