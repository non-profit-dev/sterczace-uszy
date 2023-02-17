import Typography from "design-system/components/typography"
import Button from "design-system/components/button"
import Container from "design-system/components/container"
import Icon from "design-system/components/icon"

import * as Styled from "./Navigation.styled"

import data from "./data"

const Navigation = () => (
  <Styled.Navigation>
    <Container>
      <Styled.NavigationRow>
        <Typography variant="h5">logo</Typography>

        <Styled.Menu>
          {data.map((item) => (
            <Styled.MenuButton key={item.title}>
              <Button
                as="a"
                href={item.href}
                text={item.title}
                variant="text"
                size="small"
                color="black"
                iconEnd={item.links ? "chevronDown" : null}
              />
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

export default Navigation
