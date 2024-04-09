import { render, screen } from "design-system/test-utils"

import PartnerCard from "design-system/patterns/partnerCard"

describe(`PartnerCard`, () => {
  it(`renders with default properties`, () => {
    render(<PartnerCard>test</PartnerCard>)
    expect(screen.getByText(test)).toBeInTheDocument()
  })
})
