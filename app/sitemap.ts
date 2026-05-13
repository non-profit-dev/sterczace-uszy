import type { MetadataRoute } from "next"

import { getAnimals } from "@/lib/contentful"
import { absoluteUrl } from "@/lib/seo"

const staticRoutes = [
  "",
  "/adopcja-wirtualna",
  "/adopcja-za-granice",
  "/adoptowane",
  "/ankiety",
  "/dane-finansowe",
  "/do-adopcji",
  "/fundacja",
  "/kontakt",
  "/partnerzy-i-znizki",
  "/polityka-prywatnosci",
  "/proces-adopcji",
  "/regulamin-platnosci",
  "/umowy",
  "/wsparcie",
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date()

  let animalRoutes: MetadataRoute.Sitemap = []

  try {
    const animals = await getAnimals()
    animalRoutes = animals.map((animal) => ({
      url: absoluteUrl(`/do-adopcji/${animal.slug}`),
      lastModified,
      changeFrequency: "daily",
      priority: 0.8,
    }))
  } catch (error) {
    console.error("Failed to generate animal sitemap routes:", error)
  }

  const staticSitemapRoutes: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified,
    changeFrequency: route === "" || route === "/do-adopcji" ? "daily" : "weekly",
    priority: route === "" ? 1 : route === "/do-adopcji" ? 0.9 : 0.7,
  }))

  return [...staticSitemapRoutes, ...animalRoutes]
}
