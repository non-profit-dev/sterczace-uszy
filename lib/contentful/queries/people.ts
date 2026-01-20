import gql from "graphql-tag"

import { fetchGraphQL } from "../graphql-client"
import type { PeopleFields } from "../types"

export const GET_CONTACT_PEOPLE = gql`
  query GetContactPeople {
    peopleCollection(where: { contactPerson: true, phoneNumber_exists: true }) {
      items {
        name
        phoneNumber
        position
        image {
          url
          title
          width
          height
        }
      }
    }
  }
`

export async function getContactPeople(preview = false) {
  const response = await fetchGraphQL<{
    peopleCollection: {
      items: PeopleFields[]
    }
  }>(GET_CONTACT_PEOPLE, {}, preview)

  return response.peopleCollection.items
}

export const GET_MANAGEMENT_PEOPLE = gql`
  query GetManagementPeople {
    peopleCollection(where: { inManagement: true }) {
      items {
        name
        position
        phoneNumber
        image {
          url
          title
          width
          height
        }
      }
    }
  }
`

export async function getManagementPeople(preview = false) {
  const response = await fetchGraphQL<{
    peopleCollection: {
      items: PeopleFields[]
    }
  }>(GET_MANAGEMENT_PEOPLE, {}, preview)

  return response.peopleCollection.items
}
