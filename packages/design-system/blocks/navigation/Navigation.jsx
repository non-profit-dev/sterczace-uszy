import { useState } from "react"
import { string, arrayOf, shape } from "prop-types"
import { useTheme } from "@emotion/react"
import Link from "next/link"

import Button from "design-system/components/button"
import Container from "design-system/components/container"
import Icon from "design-system/components/icon"
import List from "design-system/components/list"
import ListItem from "design-system/components/listItem"
import Logo from "design-system/components/logo"

import * as Styled from "./Navigation.styled"

import data from "./data"

const Navigation = ({ navigationData }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const theme = useTheme()

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index)
  }

  const handleHoverToggle = (index) => {
    setActiveDropdown(index)
  }
  const handleMouseLeave = () => {
    setIsOpen(false)
    setActiveDropdown(null)
  }

  return (
    <>
      <Styled.Navigation>
        <Container>
          <Styled.NavigationRow>
            <Link href="/" aria-label="Strona główna">
              <Logo />
            </Link>

            <Styled.Menu>
              {navigationData.map((item, index) => (
                <Styled.MenuButton
                  key={item.title}
                  onMouseEnter={() => handleHoverToggle(index)}
                  onMouseLeave={() => handleMouseLeave()}
                >
                  {item.links ? (
                    <>
                      <Styled.DropdownButton>
                        <Button
                          onClick={() => handleDropdownToggle(index)}
                          text={item.title}
                          href={item.links.href}
                          variant="text"
                          size="xsmall"
                          color={
                            item.title === "Dokumenty" ? "primary" : "black"
                          }
                        />
                        <Styled.ChevronIcon
                          name="chevronDown"
                          size="small"
                          isActive={activeDropdown === index}
                          color={
                            item.title === "Dokumenty"
                              ? theme.colors.primary[500]
                              : theme.colors.gray[600]
                          }
                        />
                      </Styled.DropdownButton>
                      {activeDropdown === index && (
                        <Styled.DropdownWrapper>
                          <Styled.Dropdown>
                            <List gap={16}>
                              {item.links.map((link) => (
                                <ListItem key={link.title}>
                                  <Button
                                    href={link.href}
                                    text={link.title}
                                    variant="text"
                                    size="xsmall"
                                    color={
                                      link.title === "Dokumenty"
                                        ? "primary"
                                        : "black"
                                    }
                                  />
                                </ListItem>
                              ))}
                            </List>
                          </Styled.Dropdown>
                        </Styled.DropdownWrapper>
                      )}
                    </>
                  ) : (
                    <Button
                      text={item.title}
                      variant="text"
                      href={item.href}
                      size="xsmall"
                      color={item.title === "Dokumenty" ? "primary" : "black"}
                    />
                  )}
                </Styled.MenuButton>
              ))}
            </Styled.Menu>

            <Styled.MenuIcon
              onClick={() => setIsOpen(!isOpen)}
              title={isOpen ? "Zwiń" : "Rozwiń"}
            >
              <Icon name={isOpen ? "close" : "menu"} />
            </Styled.MenuIcon>
          </Styled.NavigationRow>
        </Container>

        {isOpen ? (
          <Styled.MobileNavigation>
            {navigationData.map((item) => (
              <div key={item.title}>
                {item.links ? (
                  <Styled.NavigationAccordion
                    heading={item.title}
                    activeColor="primary"
                    isNavigationAccordion
                  >
                    <Styled.AccordionLinks>
                      {item.links.map((link) => (
                        <Button
                          key={link.title}
                          as="a"
                          text={link.title}
                          href={link.href}
                          variant="text"
                          size="medium"
                          color={
                            link.title === "Dokumenty" ? "primary" : "black"
                          }
                        />
                      ))}
                    </Styled.AccordionLinks>
                  </Styled.NavigationAccordion>
                ) : (
                  <Styled.AccordionButton
                    as="a"
                    text={item.title}
                    href={item.href}
                    variant="text"
                    size="medium"
                    color={item.title === "Dokumenty" ? "primary" : "black"}
                  />
                )}
              </div>
            ))}
          </Styled.MobileNavigation>
        ) : null}
      </Styled.Navigation>
      {isOpen ? <Styled.Overlay onClick={() => setIsOpen(!isOpen)} /> : null}
    </>
  )
}

Navigation.propTypes = {
  navigationData: arrayOf(
    shape({
      title: string,
      href: string,
      links: arrayOf(
        shape({
          title: string,
          href: string,
        })
      ),
    })
  ),
}

Navigation.defaultProps = {
  navigationData: data,
}

export default Navigation
