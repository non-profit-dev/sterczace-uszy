import { useMemo } from "react"
import { string, number } from "prop-types"

import Typography from "design-system/components/typography"
import List from "design-system/components/list"
import ListItem from "design-system/components/listItem"

import Tabs from "design-system/patterns/tabs"

import * as Styled from "./Details.styled"

const Details = ({
  gender,
  age,
  weight,
  targetWeight,
  health,
  behavior,
  info,
  imageSrc,
}) => {
  const features = useMemo(
    () => [
      {
        name: "Płeć",
        value: gender,
      },
      {
        name: "Wiek",
        value: `${age} lat/lata`,
      },
      {
        name: "Waga",
        value: `${weight} kg`,
      },
      {
        name: "Waga docelowa",
        value: `${targetWeight} kg`,
      },
    ],
    gender,
    age,
    weight,
    targetWeight
  )

  const data = useMemo(() => [
    {
      tab: "Zdrowie",
      content: (
        <List>
          {health?.map((item) => (
            <ListItem key={item} variant="gray" iconName="check">
              {item}
            </ListItem>
          ))}
        </List>
      ),
    },
    {
      tab: "Zachowanie",
      content: (
        <List>
          {behavior?.map((item) => (
            <ListItem key={item} variant="gray" iconName="check">
              {item}
            </ListItem>
          ))}
        </List>
      ),
    },
    {
      tab: "Informacje",
      content: (
        <List>
          {info?.map((item) => (
            <ListItem key={item} variant="gray" iconName="check">
              {item}
            </ListItem>
          ))}
        </List>
      ),
    },
  ])

  return (
    <Styled.Section>
      <div>
        <img src={imageSrc} alt="" width="100%" />
      </div>

      <div>
        <Typography variant="h4">Cechy psa</Typography>

        <div>
          {features.map(({ name, value }) => (
            <Styled.Feature key={name}>
              <Typography>{name}</Typography>
              <Typography>{value}</Typography>
            </Styled.Feature>
          ))}
        </div>

        <Styled.Tabs>
          <Tabs data={data} id="animal-details" transparentContent />
        </Styled.Tabs>
      </div>
    </Styled.Section>
  )
}

Details.propTypes = {
  gender: string,
  age: number,
  weight: number,
  targetWeight: number,
  imageSrc: string,
}

Details.defaultProps = {
  gender: null,
  age: null,
  weight: null,
  targetWeight: null,
  imageSrc: null,
}

export default Details
