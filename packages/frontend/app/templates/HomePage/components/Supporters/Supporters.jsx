import { shape, arrayOf, string } from "prop-types"
import { useTheme } from "@emotion/react"

import Typography from "design-system/components/typography"
import Slider from "design-system/components/slider"
import Title from "design-system/components/title"
import Button from "design-system/components/button"
import Container from "design-system/components/container"

import Card from "design-system/patterns/card"

import * as Styled from "./Supporters.styled"

const Supporters = ({ data }) => {
  const theme = useTheme()

  return (
    <Styled.Wrapper>
      <Container>
        <Typography variant="h2">Dziękujemy za wsparcie</Typography>
        <Styled.Slider>
          <Slider slidesPerViewDesktop={3}>
            {data.map((item) => (
              <Card
                key={item.name}
                title={<Title text={item.name} variant="textLine" />}
                href={item.url}
                layout="center"
                bgColor={theme.colors.neutrals[100]}
              >
                {/* <img src={item.logo?.url} alt="" width="100" /> */}
                <Typography variant="bodySmall">{item.description}</Typography>
                <Button
                  text={item.urlText}
                  variant="textLine"
                  size="small"
                  as="span"
                />
              </Card>
            ))}
          </Slider>
        </Styled.Slider>
      </Container>
    </Styled.Wrapper>
  )
}

Supporters.propTypes = {
  data: arrayOf(
    shape({
      name: string,
      description: string,
      url: string,
    })
  ).isRequired,
}

export default Supporters
