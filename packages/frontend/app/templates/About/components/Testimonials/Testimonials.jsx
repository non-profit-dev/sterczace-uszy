import Typography from "design-system/components/typography"
import Slider from "design-system/components/slider"
import Container from "design-system/components/container"
import Icon from "design-system/components/icon"

import TestimonialCard from "design-system/patterns/testimonialCard"

import * as Styled from "./Testimonials.styled"
import { testimonialType } from "../../../../lib/types"

const Testimonials = ({ data }) => (
  <Styled.Wrapper>
    <Container>
      <Typography variant="h2">
        Dziękujemy za wsparcie <Icon name="heartFilled" size="large" />
      </Typography>
      <Styled.Slider>
        <Slider pagination navigation slidesPerViewDesktop={3}>
          {data.map((item) => (
            <TestimonialCard
              key={item.description}
              title={item.title}
              excerpt={item.description}
              author={item.author}
              authorDetails={item.authorDescription}
            />
          ))}
        </Slider>
      </Styled.Slider>
    </Container>
  </Styled.Wrapper>
)

Testimonials.propTypes = {
  data: testimonialType.isRequired,
}

export default Testimonials
