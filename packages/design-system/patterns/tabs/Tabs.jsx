import { useState } from "react"
import { string, arrayOf, shape, oneOfType, node } from "prop-types"

import Typography from "design-system/components/typography"
import Title from "design-system/components/title"

import * as Styled from "./Tabs.styled"

function convertToSlug(Text) {
  return Text.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
}

const Tabs = ({ data, id, className }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <Styled.Wrapper className={className}>
      <Styled.Tabs role="tablist">
        {data.map(({ tab }, index) => (
          <Styled.Tab
            key={tab}
            active={index === activeIndex}
            aria-selected={index === activeIndex}
            aria-controls={`${convertToSlug(id)}-${convertToSlug(tab)}`}
            id={convertToSlug(tab)}
            role="tab"
            onClick={() => setActiveIndex(index)}
          >
            {activeIndex === index ? (
              <Title text={tab} textSize="h6" variant="textLine" />
            ) : (
              <Typography variant="bodySmall">{tab}</Typography>
            )}
          </Styled.Tab>
        ))}
      </Styled.Tabs>

      {data.map(({ tab, content }, index) => (
        <Styled.Content
          key={tab}
          id={`${convertToSlug(id)}-${convertToSlug(tab)}`}
          role="tabpanel"
          tabindex="0"
          aria-labelledby={convertToSlug(tab)}
          hidden={index !== activeIndex}
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
  className: string,
}

Tabs.defaultProps = {
  className: null,
}

export default Tabs
