import Typography from "design-system/components/typography"
import Slider from "design-system/components/slider"
import Container from "design-system/components/container"
import TextBanner from "design-system/patterns/textBanner"

import TestimonialCard from "design-system/patterns/testimonialCard"

import * as Styled from "./Testimonials.styled"
import { testimonialItemsType } from "../../../../lib/types"

const Testimonials = ({ data }) => (
  <Styled.Wrapper>
    <Container>
      <TextBanner
        heading="Co o nas mówią?"
        subtitle="Fundacja w opinii rodzin adopcyjnych"
        tabletLayout="left"
        mobileLayout="left"
      >
        <Styled.Description>
          <Typography variant="bodyTitle">
            Poniżej przeczytasz wybrane opinie napisane przez rodziny adopcyjne,
            które szcześliwie odnalazły swoich przyjaciół w Fundacji Sterczące
            Uszy. Zadowolonych rodzin jest znacznie więcej i stale ich przybywa.
          </Typography>
        </Styled.Description>
      </TextBanner>
      <Styled.Slider>
        <Slider
          pagination
          navigation
          slidesPerGroupDesktop={2}
          slidesPerViewDesktop={2}
        >
          {data.map((item) => (
            <TestimonialCard
              key={item.description}
              title={item.title}
              excerpt={item.description}
              author={item.author}
              authorDetails={item.authorDescription}
              as="h3"
            />
          ))}
        </Slider>
      </Styled.Slider>
    </Container>
  </Styled.Wrapper>
)

Testimonials.propTypes = {
  data: testimonialItemsType.isRequired,
}

export default Testimonials
