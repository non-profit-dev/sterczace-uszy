import { number, oneOf, string } from "prop-types"

import Illustration from "design-system/components/illustration"
import Count from "design-system/components/count"
import Title from "design-system/components/title"

import * as Styled from "./DecorativeCard.styled"

const sizes = {
  small: {
    illustrationSize: "small",
    countSize: "large",
  },
  medium: {
    illustrationSize: "medium",
    countSize: "xlarge",
  },
  large: {
    illustrationSize: "large",
    countSize: "xxlarge",
  },
}

const DecorativeCard = ({ titleText, illustrationName, count, size }) => (
  <Styled.DecorativeCard>
    <Styled.Content>
      <Count count={count} size={sizes[size].countSize} />
      <Styled.Illustration>
        <Illustration
          name={illustrationName}
          size={sizes[size].illustrationSize}
        />
      </Styled.Illustration>
    </Styled.Content>

    <Title text={titleText} size="large" variant="text" />
  </Styled.DecorativeCard>
)
export default DecorativeCard

DecorativeCard.propTypes = {
  titleText: string.isRequired,
  illustrationName: string,
  count: number.isRequired,
  size: oneOf(["small", "medium", "large", "xlarge", "xxlarge"]),
}

DecorativeCard.defaultProps = {
  illustrationName: "heartWithDogFace",
  size: "large",
}
