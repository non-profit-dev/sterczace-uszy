import Image from "next/image"

import { PawPrint } from "lucide-react"

import { getGlobalData } from "@/lib/contentful"

export default async function Maintenance() {
  const globalData = await getGlobalData()

  return (
    <div className="bg-primary-50 flex min-h-screen flex-col items-center justify-center font-sans">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <Image
          src="/sterczace-uszy.png"
          alt="Fundacja Sterczące Uszy"
          width={200}
          height={50}
          className="mx-auto h-14 w-auto"
          priority
        />
        <div className="my-8">
          <h1 className="text-primary-500 mb-4 flex items-center justify-center gap-3 text-4xl font-bold lg:text-6xl">
            Zaraz wracamy! <PawPrint className="h-14 w-14" />
          </h1>
          <div className="bg-primary-500 mx-auto mt-8 mb-4 h-1 w-24"></div>
        </div>

        <div className="space-y-6">
          <p className="text-xl lg:text-2xl">Właśnie robimy małe porządki na stronie.</p>

          <p className="text-lg leading-relaxed text-gray-600">
            Wróć do nas za chwilę – obiecujemy, że będzie jeszcze lepiej!
          </p>

          <div className="pt-8">
            <p className="text-base text-gray-500">W pilnych sprawach napisz do nas:</p>
            <a
              href={globalData.email}
              className="text-primary-500 hover:text-primary-600 font-semibold transition-colors"
            >
              {globalData.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
