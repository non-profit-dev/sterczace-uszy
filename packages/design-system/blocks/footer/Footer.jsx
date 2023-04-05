import { useTheme } from "@emotion/react"

import Typography from "design-system/components/typography"
import IconButton from "design-system/components/iconButton"
import Logo from "design-system/components/logo"
import Icon from "design-system/components/icon"
import List from "design-system/components/list"
import ListItem from "design-system/components/listItem"
import Button from "design-system/components/button"
import Container from "design-system/components/container"

import useCopyToClipboard from "design-system/helpers/useCopyToClipboard"

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
  const theme = useTheme()
  const [isCopied, copyToClipboard] = useCopyToClipboard()
  const currentYear = new Date().getFullYear()

  return (
    <Styled.Footer>
      <Container size="large">
        <Styled.Logo href="/">
          <Logo />
        </Styled.Logo>

        <Styled.Content>
          <Styled.MainFoundationData>
            <Styled.Section>
              <Typography variant="h6" as="p">
                {contactTitle}
              </Typography>
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
              <Styled.IconsMobile>
                {socialMedia.map((item) => (
                  <IconButton
                    key={`${item.icon}footerMobile`}
                    name={item.icon}
                    size="medium"
                    href={item.link}
                    ariaLabel={item.title}
                  />
                ))}
              </Styled.IconsMobile>
            </Styled.Section>
            <Styled.Section>
              <Typography variant="h6" as="p">
                {foundationDataTitle}
              </Typography>
              <List gap={8}>
                <ListItem variant="gray">
                  <Typography variant="bodySmall">{nip}</Typography>
                  <Typography variant="bodySmall">{krs}</Typography>
                </ListItem>
                <ListItem iconName={icon} size="medium" variant="gray">
                  <Typography variant="bodySmall">
                    {accountNumberText}
                  </Typography>
                  {isCopied ? (
                    <Styled.CopyInfo
                      variant="bodyTiny"
                      color={theme.colors.primary[500]}
                    >
                      Skopiowano
                    </Styled.CopyInfo>
                  ) : (
                    <Styled.CopyButton
                      onClick={() => copyToClipboard(accountNumber)}
                    >
                      <Icon name="copy" color={theme.colors.primary[500]} />
                    </Styled.CopyButton>
                  )}
                </ListItem>
                <ListItem variant="gray">
                  <Typography variant="bodySmall">{accountNumber}</Typography>
                </ListItem>
              </List>
            </Styled.Section>
          </Styled.MainFoundationData>

          <Styled.Sections>
            <Styled.Section>
              <Typography variant="h6" as="p">
                {foundationTitle}
              </Typography>
              <List gap={4}>
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
              <Typography variant="h6" as="p">
                {supportTitle}
              </Typography>
              <List gap={4}>
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
              <Typography variant="h6" as="p">
                {adoptionTitle}
              </Typography>
              <List gap={4}>
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
          </Styled.Sections>
        </Styled.Content>

        <Styled.Copyright>
          <Typography variant="bodySmall">
            Copyright © {currentYear} Sterczące uszy
          </Typography>
          <Styled.Icons>
            {socialMedia.map((item) => (
              <IconButton
                key={`${item.icon}footerWeb`}
                name={item.icon}
                size="medium"
                href={item.link}
                ariaLabel={item.title}
              />
            ))}
          </Styled.Icons>
        </Styled.Copyright>
      </Container>
    </Styled.Footer>
  )
}
export default Footer
