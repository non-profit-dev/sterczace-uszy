import PartnersAndDiscountsPage from "../templates/PartnersAndDiscounts"

import { partnershipsType } from "../lib/types"

import client from "../lib/api"
import { GET_PARTNERSHIPS } from "../lib/queries"

const PartnersAndDiscounts = ({ partnerships }) => (
  <PartnersAndDiscountsPage partnerships={partnerships} />
)

export async function getStaticProps() {
  const { data: partnerships } = await client.query({
    query: GET_PARTNERSHIPS,
  })

  return {
    props: {
      partnerships: partnerships.partnershipCollection,
      fallback: true,
    },
  }
}

PartnersAndDiscounts.propTypes = {
  partnerships: partnershipsType.isRequired,
}

export default PartnersAndDiscounts
