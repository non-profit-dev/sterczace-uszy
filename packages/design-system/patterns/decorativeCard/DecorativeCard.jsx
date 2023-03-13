import { number, string } from "prop-types"

import Illustration from "design-system/components/illustration"
import Count from "design-system/components/count"
import Title from "design-system/components/title"

import * as Styled from "./DecorativeCard.styled"

const DecorativeCard = ({ titleText, illustrationName, count }) => (
  <Styled.DecorativeCard>
    <Styled.Content>
      <Count count={count} variant="decorative" />
      <Styled.Illustration>
        <Illustration name={illustrationName} size="large" />
      </Styled.Illustration>
      <Styled.IllustrationTablet>
        <Styled.Illustration name={illustrationName} size="medium" />
      </Styled.IllustrationTablet>
      <Styled.IllustrationMobile>
        <Styled.Illustration name={illustrationName} size="small" />
      </Styled.IllustrationMobile>
    </Styled.Content>

    <Title text={titleText} size="large" variant="text" />
  </Styled.DecorativeCard>
)
export default DecorativeCard

DecorativeCard.propTypes = {
  titleText: string.isRequired,
  illustrationName: string,
  count: number.isRequired,
}

DecorativeCard.defaultProps = {
  illustrationName: "dog",
}
