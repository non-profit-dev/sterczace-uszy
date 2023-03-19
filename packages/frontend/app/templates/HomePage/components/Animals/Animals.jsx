import { shape, arrayOf, string } from "prop-types"
import { useTheme } from "@emotion/react"

import Typography from "design-system/components/typography"
import TextBanner from "design-system/patterns/textBanner"
import Image from "design-system/components/image"

import * as Styled from "./Animals.styled"

const Animals = ({ data }) => {
  const theme = useTheme()
  return (
    <div>
      <Styled.ContentContainer>
        <TextBanner
          heading="Szukają domu"
          subtitle="NASI PODOPIECZNI"
          descriptionColor={theme.colors.grey[600]}
        >
          Zapewniamy dom i schronienie dla psów i kotów. Obecnie pod naszą
          opieką jest 5 zwierzaków, ale ciągle przyjmujemy nowych podopiecznych.
          Dokładamy wszelkich starań, aby zapewnić im jak lepsze życie. Jeśli
          chcesz pomóc, sprawdź, kto czeka na nowy dom.
        </TextBanner>
      </Styled.ContentContainer>
      <Styled.Grid>
        {data.map((animal) => (
          <div key={animal.name}>
            <Image src={animal.thumbnail.url} />
            <Typography variant="bodyTitle">{animal.name}</Typography>
            <Typography variant="bodySmall">{animal.excerpt}</Typography>
          </div>
        ))}
      </Styled.Grid>
    </div>
  )
}

Animals.propTypes = {
  data: arrayOf(
    shape({
      name: string,
      description: string,
      url: string,
    })
  ).isRequired,
}

export default Animals
