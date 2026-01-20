import type { Metadata } from "next"
import { Mogra, Noto_Sans, Noto_Serif } from "next/font/google"

import { Toaster } from "@/components/ui/sonner"

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
  title: {
    template: "%s | Fundacja Sterczące Uszy",
    default: "Fundacja Sterczące Uszy",
  },
  description:
    "Jako fundacja ratujemy zwierzęta, które straciły dom lub nigdy go nie miały. Zapewniamy im leczenie, opiekę i ciepłe schronienie, aż znajdą swoją idealną rodzinę.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body className={`${notoSans.variable} ${notoSerif.variable} ${mogra.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
