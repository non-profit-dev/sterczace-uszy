import { arrayOf, shape, string } from "prop-types"
import Link from "next/link"
import Button from "design-system/components/button"
import Container from "design-system/components/container"
import Icon from "design-system/components/icon"
import List from "design-system/components/list"
import ListItem from "design-system/components/listItem"
import Accordion from "design-system/components/accordion"
import Logo from "design-system/components/logo"
import { useState } from "react"
import * as Styled from "./Navigation.styled"

import data from "./data"

const Navigation = ({ navigationData }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

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
                    <div>
                      <Styled.DropdownButton>
                        <Button
                          onClick={() => handleDropdownToggle(index)}
                          text={item.title}
                          href={item.href}
                          variant="text"
                          size="xsmall"
                          color={
                            item.href === "/pliki-do-pobrania"
                              ? "primary"
                              : "black"
                          }
                        />
                        <Styled.ChevronIcon
                          name="chevronDown"
                          size="small"
                          isActive={activeDropdown === index}
                        />
                      </Styled.DropdownButton>
                      {activeDropdown === index && item.links && (
                        <Styled.Dropdown>
                          <List gap={16}>
                            {item.links.map((link) => (
                              <ListItem key={link.title}>
                                <Button
                                  href={link.href}
                                  text={link.title}
                                  variant="text"
                                  size="xsmall"
                                  color="black"
                                />
                              </ListItem>
                            ))}
                          </List>
                        </Styled.Dropdown>
                      )}
                    </div>
                  ) : (
                    <Button
                      text={item.title}
                      variant="text"
                      href={item.href}
                      size="xsmall"
                      color={
                        item.href === "/pliki-do-pobrania" ? "primary" : "black"
                      }
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
                            link.href === "/pliki-do-pobrania"
                              ? "primary"
                              : "black"
                          }
                        />
                      ))}
                    </Styled.AccordionLinks>
                  </Styled.NavigationAccordion>
                ) : (
                  <Button
                    as="a"
                    text={item.title}
                    href={item.href}
                    variant="text"
                    size="medium"
                    color={
                      item.href === "/pliki-do-pobrania" ? "primary" : "black"
                    }
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
      title: string.isRequired,
      href: string.isRequired,
      links: arrayOf(
        shape({
          title: string.isRequired,
          href: string.isRequired,
        })
      ),
    })
  ),
}

Navigation.defaultProps = {
  navigationData: data,
}

export default Navigation
