/* eslint-disable react/prop-types */
import { useMemo } from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Button from "design-system/components/button"

import Tabs from "design-system/patterns/tabs"

import * as Styled from "./MoreInfo.styled"

const MoreInfo = ({
  story,
  behaviorStory,
  healthStory,
  socialBehavior,
  important,
  needs,
  family,
}) => {
  const data = useMemo(() => {
    const tabs = [
      {
        name: "Zachowanie",
        content: behaviorStory,
      },
      { name: "Historia", content: story },
      {
        name: "Stan zdrowia",
        content: healthStory,
      },
      {
        name: "Życie z innymi",
        content: socialBehavior,
      },
      {
        name: "Potrzeby",
        content: needs,
      },
      {
        name: "Kogo szuka",
        content: family,
      },
      {
        name: "Ważne",
        content: important,
      },
    ]

    return tabs
      .filter((tab) => tab.content)
      .map((tab) => ({
        tab: tab.name,
        content: documentToReactComponents(tab.content),
      }))
  }, [story, behaviorStory, healthStory, socialBehavior])

  return (
    <Styled.Section>
      {data.length ? (
        <Styled.Tabs>
          <Tabs data={data} id="animal-more-info" />
        </Styled.Tabs>
      ) : null}

      <Styled.Buttons>
        <Button text="Adoptuj" href="/zasady-adopcji" />
        <Button
          text="Adoptuj wirtualnie"
          href="/adopcja-wirtualna"
          variant="border"
        />
      </Styled.Buttons>
    </Styled.Section>
  )
}

export default MoreInfo
