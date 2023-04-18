import { number, string } from "prop-types"

import Count from "design-system/components/count"

import * as Styled from "./DecorativeCard.styled"
import Typography from "../../components/typography/Typography"

const DecorativeCard = ({ title, illustrationName, count }) => (
  <Styled.DecorativeCard>
    <Styled.Content>
      <Count count={count} />
      <Styled.Illustration name={illustrationName} />
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
