import { number, string } from "prop-types"

import Illustration from "design-system/components/illustration"
import Count from "design-system/components/count"

import * as Styled from "./DecorativeCard.styled"
import Typography from "../../components/typography/Typography"

const DecorativeCard = ({ title, illustrationName, count }) => (
  <Styled.DecorativeCard>
    <Styled.Content>
      <Count count={count} />
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
    {title && <Typography variant="h3">{title}</Typography>}
  </Styled.DecorativeCard>
)
export default DecorativeCard

DecorativeCard.propTypes = {
  title: string,
  illustrationName: string,
  count: number.isRequired,
}

DecorativeCard.defaultProps = {
  illustrationName: "dog",
  title: null,
}
