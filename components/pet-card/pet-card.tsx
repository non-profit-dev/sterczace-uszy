import Image from "next/image"
import Link from "next/link"

import { MapPin, Mars, Venus } from "lucide-react"

import { Badge } from "@/components/ui"

type PetCardProps = {
  id: string
  name: string
  image: string
  age: string
  location?: string
  gender: "on" | "ona"
  excerpt: string
}

export function PetCard({ id, name, image, age, location, gender, excerpt }: PetCardProps) {
  const genderIcon = gender === "on" ? <Mars className="h-5 w-5" /> : <Venus className="h-5 w-5" />
  const genderColor =
    gender === "on" ? "bg-secondary-200 text-blue-700" : "bg-pink-100 text-pink-700"
  return (
    <Link
      href={`/do-adopcji/${id}`}
      className="group overflow-hidden rounded-2xl border bg-white transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div
          className={`absolute right-4 bottom-4 h-8 w-8 rounded-lg lg:h-10 lg:w-10 ${genderColor} flex items-center justify-center text-lg font-bold`}
        >
          {genderIcon}
        </div>
      </div>

      <div className="p-3 lg:p-4">
        <div className="mb-3 flex items-baseline justify-between">
          <h3 className="text-lg lg:text-2xl">{name}</h3>
          {age && <span className="text-xs text-gray-500 lg:text-sm">~ {age}</span>}
        </div>

        {location && (
          <Badge variant="secondary" className="mt-1 mb-3">
            <MapPin className="h-5 w-5" />
            <p className="text-xs font-medium lg:text-sm">{location}</p>
          </Badge>
        )}

        <div className="flex flex-wrap gap-2">
          <p className="text-xs lg:text-sm">{excerpt}</p>
        </div>
      </div>
    </Link>
  )
}
