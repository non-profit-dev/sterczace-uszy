import { useState } from "react"
import { string, arrayOf, shape, oneOfType, node, bool } from "prop-types"

import Typography from "design-system/components/typography"
import Title from "design-system/components/title"

import Navigation from "./Navigation"

import * as Styled from "./Tabs.styled"

const convertToSlug = (text) =>
  text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")

const Tabs = ({ data, id, transparentContent, className }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const onChange = (swiper) => {
    setActiveIndex(swiper.activeIndex)
  }

  return (
    <Styled.Wrapper className={className}>
      <Styled.Tabs
        role="tablist"
        gap={0}
        breakpoints={{
          390: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: data.length,
          },
        }}
        slideToClickedSlide
        onSlideChange={(swiper) => onChange(swiper)}
        transparentContent={transparentContent}
      >
        {data.map(({ tab }, index) => (
          <Styled.Tab
            key={tab}
            role="tab"
            active={index === activeIndex}
            aria-selected={index === activeIndex}
            aria-controls={`${convertToSlug(id)}-${convertToSlug(tab)}`}
            id={convertToSlug(tab)}
            onClick={() => setActiveIndex(index)}
            borderBottom={transparentContent || activeIndex !== index}
            transparentContent={transparentContent}
          >
            {activeIndex === index ? (
              <Title text={tab} variant="h6" />
            ) : (
              <Typography variant="bodySmall">{tab}</Typography>
            )}
          </Styled.Tab>
        ))}

        <Navigation transparentContent={transparentContent} />
      </Styled.Tabs>

      {data.map(({ tab, content }, index) => (
        <Styled.Content
          key={tab}
          id={`${convertToSlug(id)}-${convertToSlug(tab)}`}
          role="tabpanel"
          tabindex="0"
          aria-labelledby={convertToSlug(tab)}
          hidden={index !== activeIndex}
          transparentContent={transparentContent}
        >
          {content}
        </Styled.Content>
      ))}
    </Styled.Wrapper>
  )
}

Tabs.propTypes = {
  data: arrayOf(
    shape({
      tab: string,
      content: oneOfType([string, node]),
    })
  ).isRequired,
  id: string.isRequired,
  transparentContent: bool,
  className: string,
}

Tabs.defaultProps = {
  className: null,
  transparentContent: false,
}

export default Tabs
