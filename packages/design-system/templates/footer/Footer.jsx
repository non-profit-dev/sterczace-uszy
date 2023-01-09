import { useTheme } from "@emotion/react"
import { useState, useEffect } from "react"
import Typography from "design-system/components/typography/Typography"
import IconButton from "design-system/components/iconButton"

import List from "design-system/components/list"
import ListItem from "design-system/components/listItem"
import Button from "design-system/components/button"
import Container from "design-system/components/container"
import copyToClipboard from "design-system/helpers/copyToClipboard"
import footerData from "./footerData"

import * as Styled from "./Footer.styled"

const Footer = () => {
  const {
    contact,
    foundationData: { nip, krs, icon, accountNumberText, accountNumber },
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
    socialMedia,
  } = footerData
  const [isTextCopied, setIsTextCopied] = useState(false)
  const currentYear = new Date().getFullYear()

  const handleCopyToClipboardButton = (textToCopy) => {
    copyToClipboard(textToCopy)
    setIsTextCopied(true)
  }

  useEffect(() => {
    if (isTextCopied === true) {
      setTimeout(() => {
        setIsTextCopied(false)
      }, 5000)
    }
  }, [isTextCopied])

  return (
    <Styled.FooterContainer>
      <Container size="large">
        <Styled.MainContainer>
          <Styled.LogoContainer>
            <Typography variant="h4">LOGO</Typography>
          </Styled.LogoContainer>

          <Styled.ContentContainer>
            <Styled.MainDataContainer>
              <Styled.Section>
                <Typography variant="h6">{contactTitle}</Typography>
                <List gap={4}>
                  {contact.map((item) => (
                    <ListItem
                      key={item.text}
                      iconName={item.icon}
                      size="medium"
                      variant="gray"
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
                <Styled.IconsContainerMobile>
                  {socialMedia.map((item) => (
                    <IconButton
                      key={`${item.icon}footerMobile`}
                      name={item.icon}
                      size="medium"
                      href={item.link}
                    />
                  ))}
                </Styled.IconsContainerMobile>
              </Styled.Section>
              <Styled.Section>
                <Typography variant="h6">{foundationDataTitle}</Typography>
                <List gap={8}>
                  <ListItem variant="grey">
                    <Typography variant="bodySmall">{nip}</Typography>
                    <Typography variant="bodySmall">{krs}</Typography>
                  </ListItem>
                  <ListItem iconName={icon} size="medium" variant="gray">
                    {accountNumberText}
                    <Button
                      variant="text"
                      text={isTextCopied ? "Skopiowano" : "Skopiuj"}
                      size="small"
                      color="primary"
                      onClick={() => handleCopyToClipboardButton(accountNumber)}
                    />
                  </ListItem>
                  <ListItem variant="gray">{accountNumber}</ListItem>
                </List>
              </Styled.Section>
            </Styled.MainDataContainer>

            <Styled.SectionsContainer>
              <Styled.Section>
                <Typography variant="h6">{foundationTitle}</Typography>
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
                <Typography variant="h6">{supportTitle} :</Typography>
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
              <Styled.Section>
                <Typography variant="h6">{adoptionTitle} :</Typography>
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
            </Styled.SectionsContainer>
          </Styled.ContentContainer>

          <Styled.CopyrightWrapper>
            <Typography variant="bodySmall">
              Copyright © {currentYear} Sterczące uszy
            </Typography>
            <Styled.IconsContainer>
              {socialMedia.map((item) => (
                <IconButton
                  key={`${item.icon}footerWeb`}
                  name={item.icon}
                  size="medium"
                  href={item.link}
                />
              ))}
            </Styled.IconsContainer>
          </Styled.CopyrightWrapper>
        </Styled.MainContainer>
      </Container>
    </Styled.FooterContainer>
  )
}
export default Footer
