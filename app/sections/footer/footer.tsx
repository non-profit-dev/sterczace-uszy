import Image from "next/image"
import Link from "next/link"

import { Mail, MapPin, Phone } from "lucide-react"
import { siFacebook, siInstagram } from "simple-icons"

import { getContactPeople, getGlobalData } from "@/lib/contentful"

import { CopyButton } from "./copy-button"
import data from "./data"

function formatPhoneForLink(phone: string): string {
  return `tel:+48${phone.replace(/[\s-]/g, "")}`
}

export async function Footer() {
  const [globalData, contactPeople] = await Promise.all([getGlobalData(), getContactPeople()])

  return (
    <footer className="bg-secondary-200 w-full px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="inline-flex items-center">
          <Image
            src="/sterczace-uszy.png"
            alt="Fundacja Sterczące Uszy"
            width={200}
            height={50}
            className="h-12 w-auto"
            priority
          />
        </Link>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <p className="text-md mb-4 font-semibold">{data.sectionsTitles.contactTitle}</p>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${globalData.email}`}
                className="hover:text-primary-500 flex items-start gap-2 transition-colors"
              >
                <Mail className="mt-0.5 h-5 w-5 shrink-0" />
                <span className="break-all">{globalData.email}</span>
              </a>

              {contactPeople.map((person) => (
                <a
                  key={person.name}
                  href={formatPhoneForLink(person.phoneNumber!)}
                  className="hover:text-primary-500 flex items-center gap-2 transition-colors"
                >
                  <Phone className="h-5 w-5 shrink-0" />
                  <span>{person.phoneNumber} (sms)</span>
                </a>
              ))}

              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 shrink-0" />
                <span>{globalData.city}</span>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-md mb-3 font-semibold">
                {data.sectionsTitles.foundationDataTitle}
              </p>
              <div className="flex flex-col gap-2">
                <p>NIP: {globalData.nip}</p>
                <p>KRS: {globalData.krs}</p>
                <div className="flex items-center gap-2">
                  <span>Numer konta</span>
                  <CopyButton text={globalData.accountNumber} />
                </div>
                <p className="text-sm font-semibold">{globalData.accountNumber}</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-md mb-4 font-semibold">{data.sectionsTitles.foundationTitle}</p>
            <ul className="flex flex-col gap-2">
              {data.foundation.map(({ link, title }) => (
                <li key={link}>
                  <Link href={link} className="hover:text-primary-500 transition-colors">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-md mb-4 font-semibold">{data.sectionsTitles.supportTitle}</p>
            <ul className="flex flex-col gap-2">
              {data.support.map(({ link, title }) => (
                <li key={link}>
                  <Link href={link} className="hover:text-primary-500 transition-colors">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-md mb-4 font-semibold">{data.sectionsTitles.adoptionTitle}</p>
            <ul className="flex flex-col gap-2">
              {data.adoption.map(({ link, title }) => (
                <li key={link}>
                  <Link href={link} className="hover:text-primary-500 transition-colors">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-12">
          <p>Copyright © {new Date().getFullYear()} Sterczące Uszy</p>

          <div className="flex flex-col gap-4 md:flex-row">
            {data.additional.map(({ link, title }) => (
              <Link key={link} href={link} className="hover:text-primary-500 transition-colors">
                {title}
              </Link>
            ))}
          </div>

          <div className="flex gap-4 lg:mr-12 lg:ml-auto">
            {globalData?.facebook && (
              <a
                href={globalData.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Przejdź na nasz profil na Facebooku"
                className="text-primary"
              >
                <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d={siFacebook.path} />
                </svg>
              </a>
            )}
            {globalData?.instagram && (
              <a
                href={globalData.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Przejdź na nasz profil na Instagramie"
                className="text-primary"
              >
                <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d={siInstagram.path} />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
