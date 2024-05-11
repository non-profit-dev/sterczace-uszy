import TeamCard from "design-system/patterns/teamCard/TeamCard"
import Typography from "design-system/components/typography"
import { teamData } from "./teamData"
import * as Styled from "./TeamCardList.styled"

const CardList = () =>
  Object.entries(teamData).map(([category, { title, members }]) => (
    <Styled.TeamCardContainer key={category}>
      <Typography variant="h3">{title}</Typography>
      <Styled.Wrapper>
        {members.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </Styled.Wrapper>
    </Styled.TeamCardContainer>
  ))

export default CardList
