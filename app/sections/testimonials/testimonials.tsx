"use client"

import { Quote } from "lucide-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui"
import type { TestimonialFields } from "@/lib/contentful"

interface TestimonialsProps {
  testimonials?: TestimonialFields[]
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  if (!testimonials || testimonials.length === 0) {
    return null
  }

  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center lg:mb-16">
          <p className="text-primary-500 mb-2 font-bold uppercase">Opinie</p>
          <h2 className="text-3xl lg:text-5xl">Co o nas mówią?</h2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto w-full max-w-5xl"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="mx-2 flex min-h-96 flex-col gap-6 rounded-2xl bg-white lg:p-10">
                  <Quote className="text-primary-500 h-12 w-12" />

                  <p className="text-md grow leading-relaxed italic">"{testimonial.description}"</p>

                  <div className="flex items-center gap-4 border-t border-gray-200 pt-4">
                    <div>
                      <p className="text-lg font-bold">{testimonial.author}</p>
                      <p className="text-gray-500">{testimonial.authorDescription}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mx-auto mt-6 flex justify-center gap-10">
            <CarouselPrevious className="static translate-0 xl:absolute xl:-translate-y-1/2" />
            <CarouselNext className="static translate-0 xl:absolute xl:-translate-y-1/2" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
