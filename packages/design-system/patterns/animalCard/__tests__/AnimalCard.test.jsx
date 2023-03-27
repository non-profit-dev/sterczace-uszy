import { render, screen } from "design-system/test-utils"

import AnimalCard from "design-system/patterns/animalCard"

const animal = {
  name: "Doggy",
  age: 2,
  gender: "on",
  excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing",
  image: "http://images/animal.jpg",
  slug: "doggy",
}

const animalBadge = "Młodziak"

const femaleAnimal = {
  name: "She doggy",
  age: 2,
  gender: "ona",
  excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing",
  image: "http://images/animal.jpg",
  slug: "she-doggy",
}

const femaleAnimalBadge = "Młoda suczka"

describe(`AnimalCard`, () => {
  it(`renders animal's information`, () => {
    render(<AnimalCard {...animal} />)

    expect(screen.getByText(animal.name)).toBeInTheDocument()
    expect(screen.getByText(animal.excerpt)).toBeInTheDocument()
    expect(screen.getByRole(`link`)).toHaveAttribute(`href`, `/${animal.slug}`)
  })

  describe(`- getAnimalType`, () => {
    it(`renders male animal's badge`, () => {
      render(<AnimalCard {...animal} />)

      expect(screen.getByText(animalBadge)).toBeInTheDocument()
    })

    it(`renders female animal's badge`, () => {
      render(<AnimalCard {...femaleAnimal} />)

      expect(screen.getByText(femaleAnimalBadge)).toBeInTheDocument()
    })
  })
})
