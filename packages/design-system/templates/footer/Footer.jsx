import Typography from "design-system/components/typography/Typography"
import Icon from "design-system/components/icon"
import IconButton from "design-system/components/iconButton"
import footerData from "./footerData"

import * as Styled from "./Footer.styled"

const Footer = () => {
  const { contact, foundationData, adoption, foundation, support } = footerData
  console.log(contact)
  console.log(foundationData)

  return (
    <Styled.FooterContainer>
      <Styled.SectionWrapper>
        <Typography>Kontakt:</Typography>
        {contact.map((item) => (
          <Styled.SectionWrapper key={item.text} direction="row">
            <Icon name={item.icon} size="medium" />
            <Styled.LinkWrapper>
              <Typography>{item.text}</Typography>
            </Styled.LinkWrapper>
          </Styled.SectionWrapper>
        ))}
        <Styled.SectionWrapper>
          <Typography>Dane fundacji</Typography>
        </Styled.SectionWrapper>
      </Styled.SectionWrapper>

      <Styled.SectionWrapper>
        <Typography>Adopcja:</Typography>
        {adoption.map((item) => (
          <Styled.LinkWrapper key={item.title}>
            <Typography>{item.title}</Typography>
          </Styled.LinkWrapper>
        ))}
      </Styled.SectionWrapper>

      <Styled.SectionWrapper>
        <Typography>Fundacja:</Typography>
        {foundation.map((item) => (
          <Styled.LinkWrapper key={item.title}>
            <Typography>{item.title}</Typography>
          </Styled.LinkWrapper>
        ))}
      </Styled.SectionWrapper>
      <Styled.SectionWrapper>
        <Typography>Wsparcie:</Typography>
        {support.map((item) => (
          <Styled.LinkWrapper key={item.title}>
            <Typography>{item.title}</Typography>
          </Styled.LinkWrapper>
        ))}
      </Styled.SectionWrapper>
      <Styled.SectionWrapper direction="row" layout="stretch">
        <Typography>Copyright © 2022 Sterczące uszy</Typography>
        <IconButton name="facebook" size="medium" />
        <IconButton name="instagram" size="medium" />
      </Styled.SectionWrapper>
    </Styled.FooterContainer>
  )
}
export default Footer
