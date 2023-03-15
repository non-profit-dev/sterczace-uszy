import { number, string } from "prop-types"

import Illustration from "design-system/components/illustration"
import Count from "design-system/components/count"

import * as Styled from "./DecorativeCard.styled"
import Typography from "../../components/typography/Typography"

const DecorativeCard = ({ titleText, illustrationName, count }) => (
  <Styled.DecorativeCard>
    <Styled.Content>
      <Count count={count} variant="decorative" />
      <Styled.Illustration>
        <Illustration name={illustrationName} size="large" />
      </Styled.Illustration>
      <Styled.IllustrationTablet>
        <Illustration name={illustrationName} size="medium" />
      </Styled.IllustrationTablet>
      <Styled.IllustrationMobile>
        <Illustration name={illustrationName} size="small" />
      </Styled.IllustrationMobile>
    </Styled.Content>
    <Typography variant="h3">{titleText}</Typography>
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
