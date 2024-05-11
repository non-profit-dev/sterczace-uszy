import { render, screen } from "design-system/test-utils"

import PartnerCard from "design-system/patterns/partnerCard"

const props = {
  title: "Partner Card Title",
  discount: "-20%",
  promoCode: "123",
}

describe(`PartnerCard`, () => {
  it(`renders with default properties`, () => {
    render(<PartnerCard title={props.title} />)
    expect(screen.getByText(props.title)).toBeInTheDocument()
  })

  it(`renders the button for promo code if it's provided`, () => {
    render(<PartnerCard {...props} />)
    expect(screen.getByText(`Kopiuj kod ${props.discount}`)).toBeInTheDocument()
  })
})
