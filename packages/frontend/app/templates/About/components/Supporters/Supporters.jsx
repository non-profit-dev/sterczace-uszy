import { shape, arrayOf, string } from "prop-types"

import Typography from "design-system/components/typography"
import Slider from "design-system/components/slider"
import Title from "design-system/components/title"
import Button from "design-system/components/button"
import Container from "design-system/components/container"
import Icon from "design-system/components/icon"

import Card from "design-system/patterns/card"

import * as Styled from "./Supporters.styled"

const Supporters = ({ data }) => (
  <Styled.Wrapper>
    <Container>
      <Typography variant="h2">
        Dziękujemy za wsparcie <Icon name="heartFilled" size="large" />
      </Typography>
      <Styled.Slider>
        <Slider pagination navigation slidesPerViewDesktop={3}>
          {data.slice(0, 6).map((item) => (
            <Card
              key={item.name}
              title={<Title text={item.name} />}
              href={item.url}
              target="_blank"
              layout="center"
              illustrationSrc={item.logo ? item.logo.url : null}
              illustrationName={item.logo ? null : "support"}
              illustrationHeight={80}
              button={
                <Button
                  text={item.urlText}
                  variant="text"
                  size="small"
                  as="span"
                />
              }
            >
              <Typography variant="bodySmall">{item.description}</Typography>
            </Card>
          ))}
        </Slider>
      </Styled.Slider>
    </Container>
  </Styled.Wrapper>
)

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
