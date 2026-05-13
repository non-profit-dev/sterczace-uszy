import { createClient } from "contentful"

if (!process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID) {
  throw new Error("NEXT_PUBLIC_CONTENTFUL_SPACE_ID is not defined")
}

if (!process.env.CONTENTFUL_ACCESS_TOKEN) {
  throw new Error("CONTENTFUL_ACCESS_TOKEN is not defined")
}

export const contentfulClient = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || "master",
})

export const contentfulConfig = {
  spaceId: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || "master",
  previewAccessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  previewMode: process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_MODE === "true",
}
