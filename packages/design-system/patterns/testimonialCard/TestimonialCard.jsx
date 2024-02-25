// import { node } from "prop-types"
import { useTheme } from "@emotion/react"

import Icon from "design-system/components/icon"
import Title from "design-system/components/title"
import Typography from "design-system/components/typography"

import { string } from "prop-types"
import * as Styled from "./TestimonialCard.styled"

const TestimonialCard = ({ title, excerpt, author, authorDetails }) => {
  const theme = useTheme()

  return (
    <Styled.Card>
      <div>
        <Styled.Icon>
          <Icon name="quote" />
        </Styled.Icon>
        <Styled.Title>
          <Title variant="h6" text={title} line={false}>
            {title}
          </Title>
        </Styled.Title>
      </div>
      <Styled.Description variant="bodyTiny" color={theme.colors.gray[500]}>
        {excerpt}
      </Styled.Description>
      <div>
        <Typography variant="h6">{author}</Typography>
        <Typography variant="bodyTiny" color={theme.colors.gray[500]}>
          {authorDetails}
        </Typography>
      </div>
    </Styled.Card>
  )
}

TestimonialCard.propTypes = {
  title: string.isRequired,
  excerpt: string.isRequired,
  author: string.isRequired,
  authorDetails: string.isRequired,
}

TestimonialCard.defaultProps = {}

export default TestimonialCard
