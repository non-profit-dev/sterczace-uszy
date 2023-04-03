import { useMemo, useState } from "react"
import { string, number, arrayOf } from "prop-types"

import Typography from "design-system/components/typography"
import List from "design-system/components/list"
import ListItem from "design-system/components/listItem"

import Tabs from "design-system/patterns/tabs"

import getAge from "design-system/helpers/getAge"

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
  images,
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const features = useMemo(
    () => [
      {
        name: "Płeć",
        value: gender,
      },
      {
        name: "Wiek",
        value: age ? getAge(age) : null,
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
      .filter((item) => item.content?.length > 0)
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
      <Styled.Gallery>
        <Styled.MainImage src={images[activeIndex].url} />

        <Styled.Slider
          gap={15}
          onSlideChange={(index) => setActiveIndex(index)}
        >
          {images.map((item, i) => (
            <Styled.Image
              key={item.url}
              src={item.url}
              alt=""
              active={i === activeIndex}
            />
          ))}
        </Styled.Slider>
      </Styled.Gallery>

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
  age: string,
  height: number,
  weight: number,
  targetWeight: number,
  health: arrayOf(string),
  behavior: arrayOf(string),
  info: arrayOf(string),
  images: arrayOf(string),
}

Details.defaultProps = {
  gender: null,
  age: null,
  height: null,
  weight: null,
  targetWeight: null,
  health: [],
  behavior: [],
  info: [],
  images: [],
}

export default Details
