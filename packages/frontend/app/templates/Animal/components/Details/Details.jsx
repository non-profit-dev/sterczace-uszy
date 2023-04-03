import { useMemo } from "react"
import { string, number, arrayOf } from "prop-types"

import Typography from "design-system/components/typography"
import List from "design-system/components/list"
import ListItem from "design-system/components/listItem"

import Tabs from "design-system/patterns/tabs"

import * as Styled from "./Details.styled"

const Details = ({
  gender,
  age,
  height,
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
        value: age ? `${age} lat/lata` : null,
      },
      {
        name: "Wzrost",
        value: height ? `${height} cm` : null,
      },
      {
        name: "Waga",
        value: weight ? `${weight} kg` : null,
      },
      {
        name: "Waga docelowa",
        value: targetWeight ? `${targetWeight} kg` : null,
      },
    ],
    [gender, age, weight, targetWeight]
  )

  const data = useMemo(() => {
    const tabs = [
      { name: "Zdrowie", content: health },
      {
        name: "Zachowanie",
        content: behavior,
      },
      {
        name: "Informacje",
        content: info,
      },
    ]

    return tabs
      .filter((item) => item.content.length > 0)
      .map((tab) => ({
        tab: tab.name,
        content: (
          <List>
            {tab.content?.map((item) => (
              <ListItem key={item} variant="gray" iconName="check">
                {item}
              </ListItem>
            ))}
          </List>
        ),
      }))
  }, [health, behavior, info])

  return (
    <Styled.Section>
      <div>
        <img src={imageSrc} alt="" width="100%" />
      </div>

      <div>
        <Typography variant="h4">Cechy psa</Typography>

        <div>
          {features.map(({ name, value }) =>
            value ? (
              <Styled.Feature key={name}>
                <Typography>{name}</Typography>
                <Typography>{value}</Typography>
              </Styled.Feature>
            ) : null
          )}
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
  height: number,
  weight: number,
  targetWeight: number,
  imageSrc: string,
  health: arrayOf(string),
  behavior: arrayOf(string),
  info: arrayOf(string),
}

Details.defaultProps = {
  gender: null,
  age: null,
  height: null,
  weight: null,
  targetWeight: null,
  imageSrc: null,
  health: [],
  behavior: [],
  info: [],
}

export default Details
