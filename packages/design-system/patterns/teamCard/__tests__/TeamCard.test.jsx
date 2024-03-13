import { render, screen } from "design-system/test-utils"

import TeamCard from "design-system/patterns/panel"

const mockMember = {
  name: "John Doe",
  role: "Software Engineer",
  imgSrc: "john-doe.jpg",
  linkedinHref: "https://linkedin.com/in/johndoe",
}

describe("TeamCard", () => {
  it("renders with member's information", () => {
    render(<TeamCard member={mockMember} />)

    expect(screen.getByText(mockMember.name)).toBeInTheDocument()
    expect(screen.getByText(mockMember.role)).toBeInTheDocument()
    expect(
      screen.getByRole("img", { name: mockMember.name })
    ).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /linkedin/i })).toBeInTheDocument()
  })

  it("renders member's image with correct alt text", () => {
    render(<TeamCard member={mockMember} />)

    const image = screen.getByRole("img", { name: mockMember.name })
    expect(image).toHaveAttribute("src", mockMember.imgSrc)
    expect(image).toHaveAttribute("alt", mockMember.name)
  })
})
