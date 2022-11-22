import { render, screen } from "../../../test-utils"

import Image from "../Image"

const src =
  "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
const alt = "dog"

describe("Image", () => {
  it("renders with alt text", () => {
    render(<Image src={src} alt={alt} />)
    expect(screen.getByAltText(alt)).toBeInTheDocument()
  })
})
