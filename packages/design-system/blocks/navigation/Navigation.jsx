import { useState } from "react"
import Link from "next/link"
import Button from "design-system/components/button"
import Container from "design-system/components/container"
import Icon from "design-system/components/icon"
import List from "design-system/components/list"
import ListItem from "design-system/components/listItem"
import Logo from "design-system/components/logo"
import * as Styled from "./Navigation.styled"
import { string } from "prop-types"
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
                  onMouseLeave={() => handleHoverToggle(null)}
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
                          name="chevronUp"
                          size="small"
                          isActive={activeDropdown === index}
                        />
                      </Styled.DropdownButton>
                      {activeDropdown === index && item.links && (
                        <Styled.Dropdown>
                          <List gap={16}>
                            {item.links.map((link) => (
                              <ListItem key={link.title}>
                                <Link href={link.href} passHref>
                                  <Button
                                    text={link.title}
                                    variant="text"
                                    size="small"
                                    color="black"
                                  />
                                </Link>
                              </ListItem>
                            ))}
                          </List>
                        </Styled.Dropdown>
                      )}
                    </div>
                  ) : (
                    <Link href={item.href} passHref>
                      <Button
                        text={item.title}
                        variant="text"
                        size="xsmall"
                        color={
                          item.href === "/pliki-do-pobrania"
                            ? "primary"
                            : "black"
                        }
                      />
                    </Link>
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
      </Styled.Navigation>

      <Styled.MobileNavigation>
        <List gap={24}>
          {navigationData.map((item) => (
            <ListItem key={item.title}>
              <Button
                as="a"
                href={item.href}
                text={item.title}
                variant="text"
                size="medium"
                color={item.href === "/pliki-do-pobrania" ? "primary" : "black"}
              />
            </ListItem>
          ))}
        </List>
      </Styled.MobileNavigation>

      {isOpen ? <Styled.Overlay onClick={() => setIsOpen(!isOpen)} /> : null}
    </>
  )
}

Navigation.propTypes = {
  navigationData: string,
}

Navigation.defaultProps = {
  navigationData: data,
}

export default Navigation
