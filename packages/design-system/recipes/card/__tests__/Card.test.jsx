import { render, screen } from "../../../test-utils"

import Card from "../Card"

const Title = () => <div>Title</div>
const ChildComponent = () => <div>Child component</div>
const illustrationName = "heartWithDogFace"
const imageSrc =
  "https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
const alt = "dog"
const href = "https://google.com"

describe(`Card recipes`, () => {
  it(`renders with default properties`, () => {
    render(<Card title=<Title /> />)
    expect(screen.getByText("Title")).toBeInTheDocument()
  })

  it(`renders with child component `, () => {
    render(
      <Card title=<Title />>
        <ChildComponent />
      </Card>
    )
    expect(screen.getByText("Child component")).toBeInTheDocument()
  })

  it(`renders with custom properties `, () => {
    render(
      <Card title=<Title /> layout="left">
        <ChildComponent />
      </Card>
    )

    expect(screen.getByText("Child component")).toBeInTheDocument()
  })

  it(`renders with illustration if illustration name is provided`, () => {
    render(
      <Card title=<Title /> illustrationName={illustrationName}>
        <ChildComponent />
      </Card>
    )
    expect(screen.getByTitle(illustrationName)).toBeInTheDocument()
  })

  it(`renders with image if image src is provided`, () => {
    render(
      <Card title=<Title /> imageSrc={imageSrc} imageAlt={alt}>
        <ChildComponent />
      </Card>
    )
    expect(screen.getByAltText(alt)).toHaveAttribute("src", imageSrc)
  })

  it(`renders the correct link href`, () => {
    render(<Card title=<Title /> href={href} />)
    expect(screen.getByRole(`link`)).toHaveAttribute(`href`, href)
  })
})
