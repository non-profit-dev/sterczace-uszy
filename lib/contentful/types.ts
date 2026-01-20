// Types that match the actual GraphQL response structure
// These differ from SDK-generated types because GraphQL returns flattened Asset data

export interface AssetFile {
  url: string
  title?: string
  width?: number
  height?: number
}

export interface GraphQLCollection<T> {
  total: number
  skip: number
  limit: number
  items: T[]
}

// Re-export generated field types
export type {
  IAnimalFields,
  IPartnershipFields,
  ITestimonialFields,
  IFinancialStatementFields,
  IFaqFields,
  IGlobalFields,
  IPeopleFields,
  IVolunteerNeedFields,
} from "./generated-types"

// Create GraphQL-compatible versions by replacing Asset with AssetFile
export type AnimalFields = Omit<
  import("./generated-types").IAnimalFields,
  "thumbnail" | "images"
> & {
  thumbnail: AssetFile
  images?: AssetFile[]
  imagesCollection?: {
    items: AssetFile[]
  }
  slug: string
}

export type PartnershipFields = Omit<import("./generated-types").IPartnershipFields, "image"> & {
  image: AssetFile
}

export type TestimonialFields = import("./generated-types").ITestimonialFields

export type FinancialStatementFields = import("./generated-types").IFinancialStatementFields

export type FaqFields = import("./generated-types").IFaqFields

export type GlobalFields = import("./generated-types").IGlobalFields

export type PeopleFields = Omit<import("./generated-types").IPeopleFields, "image"> & {
  image?: AssetFile
}

export type VolunteerNeedFields = import("./generated-types").IVolunteerNeedFields
