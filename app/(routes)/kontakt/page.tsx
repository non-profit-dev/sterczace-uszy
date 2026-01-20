import type { Metadata } from "next"
import Image from "next/image"

import { Mail, MapPin, Phone, User } from "lucide-react"

import { Footer, Navigation } from "@/app/sections"
import { Hero } from "@/components/hero"
import { getContactPeople, getGlobalData } from "@/lib/contentful"

import { ContactForm } from "./contact-form"

export const metadata: Metadata = {
  title: "Kontakt",
}

function formatPhoneForLink(phone: string): string {
  return `tel:+48${phone.replace(/[\s-]/g, "")}`
}

export default async function Contact() {
  const contactFormId = process.env.NEXT_PUBLIC_CONTACT_FORM_ID
  const [contentfulData, contactPeople] = await Promise.all([getGlobalData(), getContactPeople()])

  return (
    <div className="flex flex-col items-center justify-center">
      <Navigation />

      <Hero subtitle="Skontaktuj się z nami" title="Jesteśmy do Twojej dyspozycji" />

      <main className="flex w-full max-w-6xl flex-col items-center gap-y-16 px-4 py-16 lg:gap-y-24 lg:py-24">
        <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-8">
            <h2 className="mb-4 text-3xl lg:text-4xl">Dane kontaktowe</h2>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-50 flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                  <Mail className="text-primary-500 h-5 w-5" />
                </div>
                <div>
                  <p className="mb-1 font-semibold">Email</p>
                  <a
                    href={`mailto:${contentfulData?.email}`}
                    className="text-muted-foreground hover:underline"
                  >
                    {contentfulData?.email}
                  </a>
                </div>
              </div>

              {contactPeople.length > 0 && (
                <div className="flex items-start gap-4">
                  <div className="bg-primary-50 flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                    <Phone className="text-primary-500 h-5 w-5" />
                  </div>
                  <div>
                    <p className="mb-1 font-semibold">Telefon</p>
                    {contactPeople.map((person) => (
                      <a
                        key={person.name}
                        href={formatPhoneForLink(person.phoneNumber!)}
                        className="text-muted-foreground block hover:underline"
                      >
                        {person.phoneNumber} (sms)
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-start gap-4">
                <div className="bg-primary-50 flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                  <MapPin className="text-primary-500 h-5 w-5" />
                </div>
                <div>
                  <p className="mb-1 font-semibold">Adres</p>
                  <p className="text-muted-foreground">
                    {contentfulData?.address}
                    <br />
                    {contentfulData?.city}
                  </p>
                </div>
              </div>

              {contactPeople.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-2xl">Skontaktuj się z nami!</h3>
                  <div className="mt-3 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:mt-6">
                    {contactPeople.map((person) => (
                      <div key={person.name} className="flex flex-col items-center text-center">
                        {person.image?.url ? (
                          <Image
                            src={person.image.url}
                            alt={person.name}
                            width={150}
                            height={150}
                            className="mb-3 h-32 w-32 rounded-full object-cover"
                          />
                        ) : (
                          <div className="bg-primary-50 mb-3 flex h-32 w-32 items-center justify-center rounded-full">
                            <User className="text-primary-500 h-12 w-12" />
                          </div>
                        )}
                        <p className="font-semibold">{person.name}</p>
                        {person.position && (
                          <p className="text-muted-foreground text-sm">{person.position}</p>
                        )}
                        {person.phoneNumber && (
                          <a
                            href={formatPhoneForLink(person.phoneNumber)}
                            className="text-primary-500 mt-1 text-sm hover:underline"
                          >
                            {person.phoneNumber}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {contactFormId && <ContactForm formId={contactFormId} />}
        </div>
      </main>

      <Footer />
    </div>
  )
}
