import { render, screen } from "design-system/test-utils"

import TeamCard from "design-system/patterns/teamCard/TeamCard"

describe("TeamCard component", () => {
  const member = {
    name: "John Doe",
    role: "Software Engineer",
    imgSrc: "john-doe.jpg",
    linkedinHref: "https://www.linkedin.com/in/johndoe",
  }

  it("renders correctly", () => {
    render(<TeamCard member={member} />)
    expect(screen.getByText(member.name)).toBeInTheDocument()
    expect(screen.getByText(member.role)).toBeInTheDocument()
    expect(screen.getByAltText(member.name)).toBeInTheDocument()
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      member.linkedinHref
    )
  })

  it("displays correct member information", () => {
    render(<TeamCard member={member} />)
    expect(screen.getByText(member.name)).toBeInTheDocument()
    expect(screen.getByText(member.role)).toBeInTheDocument()
  })

  it("renders the correct image", () => {
    render(<TeamCard member={member} />)
    expect(screen.getByAltText(member.name)).toHaveAttribute(
      "src",
      member.imgSrc
    )
  })

  it("renders a link with correct href", () => {
    render(<TeamCard member={member} />)
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      member.linkedinHref
    )
  })
})
