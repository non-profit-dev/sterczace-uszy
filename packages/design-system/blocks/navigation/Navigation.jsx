import { useState } from "react"
import Link from "next/link"

import Button from "design-system/components/button"
import Container from "design-system/components/container"
import Icon from "design-system/components/icon"
import List from "design-system/components/list"
import ListItem from "design-system/components/listItem"
import Logo from "design-system/components/logo"

import * as Styled from "./Navigation.styled"

import data from "./data"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Styled.Navigation>
        <Container>
          <Styled.NavigationRow>
            <Link href="/" aria-label="Strona główna">
              <Logo />
            </Link>

            <Styled.Menu>
              {data.map((item) => (
                <li key={item.title}>
                  <Button
                    as="a"
                    href={item.href}
                    text={item.title}
                    variant="text"
                    size="small"
                    color={
                      item.href === "/pliki-do-pobrania" ? "primary" : "black"
                    }
                  />
                </li>
              ))}
            </Styled.Menu>

            <Styled.MenuIcon onClick={() => setIsOpen(!isOpen)}>
              <Icon name={isOpen ? "close" : "menu"} />
            </Styled.MenuIcon>
          </Styled.NavigationRow>
        </Container>

        {isOpen ? (
          <Styled.MobileNavigation>
            <List gap={24}>
              {data.map((item) => (
                <ListItem key={item.title}>
                  <Button
                    as="a"
                    href={item.href}
                    text={item.title}
                    variant="text"
                    size="medium"
                    color={
                      item.href === "/pliki-do-pobrania" ? "primary" : "black"
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Styled.MobileNavigation>
        ) : null}
      </Styled.Navigation>
      {isOpen ? <Styled.Overlay onClick={() => setIsOpen(!isOpen)} /> : null}
    </>
  )
}

export default Navigation
