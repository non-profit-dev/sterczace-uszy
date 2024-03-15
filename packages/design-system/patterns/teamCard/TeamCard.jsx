import { string, shape, arrayOf } from "prop-types"

import Typography from "design-system/components/typography"

import * as Styled from "./TeamCard.styled"

const TeamCard = ({ member }) => (
  <Styled.Link
    href={member.linkedinHref}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Styled.TeamCardWrapper>
      <Styled.Image src={member.imgSrc} alt={member.name} />
      <Styled.InfoWrapper>
        <Typography variant="h5">{member.name}</Typography>
        <Typography variant="bodySmall">{member.role}</Typography>

        <Styled.Icon name="linkedin" />
      </Styled.InfoWrapper>
    </Styled.TeamCardWrapper>
  </Styled.Link>
)

TeamCard.propTypes = {
  member: shape({
    name: string.isRequired,
    role: string.isRequired,
    imgSrc: string.isRequired,
    linkedinHref: string.isRequired,
  }).isRequired,
}

export default TeamCard
