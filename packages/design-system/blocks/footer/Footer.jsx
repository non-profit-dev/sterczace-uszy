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
import globalData from "shared/data"
import footerData from "./footerData"
import * as Styled from "./Footer.styled"

const Footer = () => {
  const {
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
  } = footerData
  const theme = useTheme()
  const [isCopied, copyToClipboard] = useCopyToClipboard()
  const currentYear = new Date().getFullYear()

  return (
    <Styled.Footer>
      <Container size="large">
        <Styled.Logo href="/" aria-label="Strona główna">
          <Logo />
        </Styled.Logo>

        <Styled.Content>
          <Styled.MainFoundationData>
            <Styled.Section>
              <Typography variant="h6" as="p">
                {contactTitle}
              </Typography>
              <List gap={4}>
                <ListItem iconName="mail" size="medium" variant="gray">
                  <Button
                    variant="text"
                    text={globalData.contact.mail.text}
                    size="small"
                    color="black"
                    href={globalData.contact.mail.link}
                  />
                </ListItem>
                <ListItem iconName="phone" size="medium" variant="gray">
                  <Button
                    variant="text"
                    text={`${globalData.contact.phoneFirst.text} - sms`}
                    size="small"
                    color="black"
                    href={globalData.contact.phoneFirst.link}
                  />
                </ListItem>
                <ListItem iconName="phone" size="medium" variant="gray">
                  <Button
                    variant="text"
                    text={`${globalData.contact.phoneSecond.text} - sms`}
                    size="small"
                    color="black"
                    href={globalData.contact.phoneSecond.link}
                  />
                </ListItem>
                <ListItem iconName="location" size="medium" variant="gray">
                  <Button
                    variant="text"
                    text={globalData.contact.location.text}
                    size="small"
                    color="black"
                    href={globalData.contact.location.link}
                  />
                </ListItem>
              </List>
              <Styled.IconsMobile>
                <IconButton
                  name="facebook"
                  size="medium"
                  href={globalData.socialMedia.facebook}
                  ariaLabel="Facebook"
                />
                <IconButton
                  name="instagram"
                  size="medium"
                  href={globalData.socialMedia.instagram}
                  ariaLabel="Instagram"
                />
              </Styled.IconsMobile>
            </Styled.Section>
            <Styled.Section>
              <Typography variant="h6" as="p">
                {foundationDataTitle}
              </Typography>
              <List gap={8}>
                <ListItem variant="gray">
                  <Typography variant="bodySmall">
                    NIP {globalData.nip}
                  </Typography>
                  <Typography variant="bodySmall">
                    KRS {globalData.krs}
                  </Typography>
                </ListItem>
                <ListItem iconName="charity" size="medium" variant="gray">
                  <Typography variant="bodySmall">Numer konta</Typography>
                  {isCopied ? (
                    <Styled.CopyInfo
                      variant="bodyTiny"
                      color={theme.colors.primary[500]}
                    >
                      Skopiowano
                    </Styled.CopyInfo>
                  ) : (
                    <Styled.CopyButton
                      onClick={() => copyToClipboard(globalData.accountNumber)}
                    >
                      <Icon name="copy" color={theme.colors.primary[500]} />
                    </Styled.CopyButton>
                  )}
                </ListItem>
                <ListItem variant="gray">
                  <Typography variant="bodySmall">
                    {globalData.accountNumber}
                  </Typography>
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
            Copyright © {currentYear} {globalData.organizationName}
          </Typography>
          <Styled.Icons>
            <IconButton
              name="facebook"
              size="medium"
              href={globalData.socialMedia.facebook}
              ariaLabel="Facebook"
              target="_blank"
            />
            <IconButton
              name="instagram"
              size="medium"
              href={globalData.socialMedia.instagram}
              ariaLabel="Instagram"
              target="_blank"
            />
          </Styled.Icons>
        </Styled.Copyright>
      </Container>
    </Styled.Footer>
  )
}
export default Footer
