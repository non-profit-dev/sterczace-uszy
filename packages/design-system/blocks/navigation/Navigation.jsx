import { useState } from "react"

import Typography from "design-system/components/typography"
import Button from "design-system/components/button"
import Container from "design-system/components/container"
import Icon from "design-system/components/icon"
import List from "design-system/components/list"
import ListItem from "design-system/components/listItem"

import * as Styled from "./Navigation.styled"

import data from "./data"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Styled.Navigation>
      <Container>
        <Styled.NavigationRow>
          <Typography variant="h5">logo</Typography>

          <Styled.Menu>
            {data.map((item) => (
              <Button
                key={item.title}
                as="a"
                href={item.href}
                text={item.title}
                variant="text"
                size="small"
                color="black"
              />
            ))}
          </Styled.Menu>

          <Styled.MenuIcon onClick={() => setIsOpen(!isOpen)}>
            <Icon name={isOpen ? "close" : "menu"} />
          </Styled.MenuIcon>
        </Styled.NavigationRow>
      </Container>

      {isOpen ? (
        <Styled.MobileNavigation>
          <List>
            {data.map((item) => (
              <ListItem key={item.title}>
                <Button
                  as="a"
                  href={item.href}
                  text={item.title}
                  variant="text"
                  size="medium"
                  color="white"
                />
              </ListItem>
            ))}
          </List>
        </Styled.MobileNavigation>
      ) : null}
    </Styled.Navigation>
  )
}

export default Navigation
