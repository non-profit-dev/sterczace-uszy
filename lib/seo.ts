import type { Metadata } from "next"

export const siteConfig = {
  name: "Fundacja Sterczące Uszy",
  url: "https://www.sterczaceuszy.pl",
  description:
    "Jako fundacja ratujemy zwierzęta, które straciły dom lub nigdy go nie miały. Zapewniamy im leczenie, opiekę i ciepłe schronienie, aż znajdą swoją idealną rodzinę.",
  defaultImage: "/opengraph-image.jpg",
}

export const absoluteUrl = (path = "/") => new URL(path, siteConfig.url).toString()

type PageMetadataInput = {
  title: string | Metadata["title"]
  description: string
  path: string
  image?: string
  noIndex?: boolean
}

export function createPageMetadata({
  title,
  description,
  path,
  image = siteConfig.defaultImage,
  noIndex = false,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: typeof title === "string" ? title : siteConfig.name,
      description,
      url: path,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          alt: siteConfig.name,
        },
      ],
      locale: "pl_PL",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: typeof title === "string" ? title : siteConfig.name,
      description,
      images: [image],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  }
}
