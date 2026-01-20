"use client"

import Image from "next/image"
import { useMemo } from "react"

import Autoplay from "embla-carousel-autoplay"

import { Section } from "@/components/section"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui"
import type { PartnershipFields } from "@/lib/contentful"

interface CollaboProps {
  partnerships?: PartnershipFields[]
}

export function Collabo({ partnerships }: CollaboProps) {
  const visiblePartnerships = partnerships?.filter((partnership) => partnership.showLogoInPartners)

  const plugin = useMemo(() => Autoplay({ delay: 3000, stopOnInteraction: false }), [])

  if (!visiblePartnerships || visiblePartnerships.length === 0) {
    return null
  }

  return (
    <Section>
      <Section.Header align="center">
        <p className="text-primary-500 mb-2 font-bold uppercase">Współpraca</p>
        <h2 className="text-3xl lg:text-5xl">Nasi partnerzy</h2>
      </Section.Header>

      <Section.Content align="center">
        <Carousel
          plugins={[plugin]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto w-full"
          onMouseEnter={() => plugin.stop()}
          onMouseLeave={() => plugin.play()}
        >
          <CarouselContent className="-ml-4">
            {visiblePartnerships.map((partnership) => (
              <CarouselItem
                key={partnership.title}
                className="basis-1/2 pl-4 md:basis-1/3 lg:basis-1/4"
              >
                <div className="flex h-32 items-center justify-center">
                  {partnership.image?.url && (
                    <Image
                      src={partnership.image.url}
                      alt={partnership.title || "Partner logo"}
                      width={150}
                      height={80}
                      className="max-h-20 w-auto object-contain"
                    />
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Section.Content>
    </Section>
  )
}
