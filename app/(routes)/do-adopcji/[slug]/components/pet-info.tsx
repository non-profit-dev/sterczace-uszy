"use client"

import { Calendar, CircleAlert, Dog, MapPin, Weight } from "lucide-react"

import { Badge } from "@/components/ui"

interface PetInfoCardProps {
  name: string
  adoptionStatusDisplay: string[]
  ownerPet: boolean
  ageDisplay: string
  genderDisplay: string
  weight?: number | string
  location?: string
}

export function PetInfo({
  name,
  adoptionStatusDisplay,
  ownerPet,
  ageDisplay,
  genderDisplay,
  weight,
  location,
}: PetInfoCardProps) {
  return (
    <div className="flex flex-col gap-5">
      {ownerPet && (
        <Badge variant="outline" className="font-medium">
          <CircleAlert className="h-4 w-4" /> Ma właściciela - pomagamy w adopcji
        </Badge>
      )}
      <div className="flex flex-wrap gap-3">
        {adoptionStatusDisplay.map((status) => (
          <Badge key={status} variant="secondary" className="font-medium">
            {status}
          </Badge>
        ))}
      </div>

      <h1 className="text-3xl font-bold lg:text-5xl">{name}</h1>

      <div className="flex flex-col gap-3 text-sm lg:flex-row lg:gap-4">
        {ageDisplay && (
          <div className="bg-primary-50 flex items-center gap-3 rounded-xl p-3 lg:p-4">
            <Calendar className="text-primary-500 h-5 w-5" />
            <span className="text-lg">
              <strong>Wiek:</strong> ~ {ageDisplay}
            </span>
          </div>
        )}

        <div className="bg-primary-50 flex items-center gap-3 rounded-xl p-3 lg:p-4">
          <Dog className="text-primary-500 h-5 w-5" />
          <span className="text-lg">
            <strong>Płeć:</strong> {genderDisplay}
          </span>
        </div>

        {weight && (
          <div className="bg-primary-50 flex items-center gap-3 rounded-xl p-3 lg:p-4">
            <Weight className="text-primary-500 h-5 w-5" />
            <span className="text-lg">
              <strong>Waga:</strong> {weight} kg
            </span>
          </div>
        )}
      </div>
      {location && (
        <div className="mt-1 flex items-center gap-3">
          <MapPin className="h-5 w-5" />
          <span className="text-lg">
            <strong>Lokalizacja:</strong> {location}
          </span>
        </div>
      )}
    </div>
  )
}
