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
          className={`absolute right-4 bottom-4 h-10 w-10 rounded-lg ${genderColor} flex items-center justify-center text-lg font-bold`}
        >
          {genderIcon}
        </div>
      </div>

      <div className="p-4">
        <div className="mb-3 flex items-baseline justify-between">
          <h3 className="text-xl lg:text-2xl">{name}</h3>
          {age && <span className="text-sm text-gray-500">~ {age}</span>}
        </div>

        {location && (
          <Badge variant="secondary" className="mt-1 mb-3">
            <MapPin className="h-5 w-5" />
            <p className="text-sm font-medium">{location}</p>
          </Badge>
        )}

        <div className="flex flex-wrap gap-2">
          <p className="text-sm">{excerpt}</p>
        </div>
      </div>
    </Link>
  )
}
