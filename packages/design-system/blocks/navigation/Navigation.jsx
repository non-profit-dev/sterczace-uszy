import { useState } from "react"

import Typography from "design-system/components/typography"
import Button from "design-system/components/button"
import List from "design-system/components/list"
import ListItem from "design-system/components/listItem"
import Container from "design-system/components/container"
import Icon from "design-system/components/icon"

import * as Styled from "./Navigation.styled"

import data from "./data"

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState()

  const handleDropdown = (dropdown) => {
    setActiveDropdown(dropdown)
  }

  return (
    <Styled.Navigation>
      <Container>
        <Styled.NavigationRow>
          <Typography variant="h5">logo</Typography>

          <Styled.Menu>
            {data.map((item) => (
              <Styled.MenuButton key={item.title}>
                <Button
                  as={item.links ? "button" : "a"}
                  href={item.href}
                  text={item.title}
                  variant="text"
                  size="small"
                  color="black"
                  iconEnd={item.links ? "chevronDown" : null}
                  onMouseEnter={() =>
                    item.links ? handleDropdown(item.title) : null
                  }
                />
                {activeDropdown === item.title ? (
                  <Styled.Dropdown>
                    <List>
                      {item.links.map((link) => (
                        <ListItem key={link.name}>
                          <Button
                            as="a"
                            text={link.name}
                            variant="text"
                            size="small"
                            color="black"
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Styled.Dropdown>
                ) : null}
              </Styled.MenuButton>
            ))}
          </Styled.Menu>

          <Styled.MenuIcon>
            <Icon name="menu" />
          </Styled.MenuIcon>
        </Styled.NavigationRow>
      </Container>
    </Styled.Navigation>
  )
}

export default Navigation
