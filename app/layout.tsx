import type { Metadata } from "next"
import { Mogra, Noto_Sans, Noto_Serif } from "next/font/google"

import { Toaster } from "@/components/ui/sonner"
import { siteConfig } from "@/lib/seo"

import "./globals.css"

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
})

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
})

const mogra = Mogra({
  variable: "--font-mogra",
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: "%s | Fundacja Sterczące Uszy",
    default: siteConfig.name,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.defaultImage,
        alt: siteConfig.name,
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.defaultImage],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body className={`${notoSans.variable} ${notoSerif.variable} ${mogra.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              name: siteConfig.name,
              url: siteConfig.url,
              logo: `${siteConfig.url}/sterczace-uszy.png`,
            }),
          }}
        />
        {children}
        <Toaster />
      </body>
    </html>
  )
}
