import { Check } from "lucide-react"

interface PetAttributesProps {
  behavior?: string[]
  health?: string[]
  activityLevel?: string
  additionalInfo?: string[]
}

export function PetAttributes({
  behavior = [],
  health = [],
  activityLevel,
  additionalInfo = [],
}: PetAttributesProps) {
  return (
    <div className="flex flex-col gap-3 border-t pt-6">
      {activityLevel && (
        <div>
          <div className="flex items-center gap-2">
            <Check className="text-secondary-600 h-5 w-5 shrink-0" />
            <p className="text font-medium">{activityLevel}</p>
          </div>
        </div>
      )}
      {behavior?.length > 0 &&
        behavior.map((option) => (
          <div key={option} className="flex items-center gap-2">
            <Check className="text-secondary-600 h-5 w-5 shrink-0" />
            <span className="text font-medium">{option}</span>
          </div>
        ))}
      {health?.length > 0 &&
        health.map((option) => (
          <div key={option} className="flex items-center gap-2">
            <Check className="text-secondary-600 h-5 w-5 shrink-0" />
            <span className="text font-medium">{option}</span>
          </div>
        ))}
      {additionalInfo?.length > 0 &&
        additionalInfo.map((info) => (
          <div key={info} className="flex items-center gap-2">
            <Check className="text-secondary-600 h-5 w-5 shrink-0" />
            <span className="text font-medium">{info}</span>
          </div>
        ))}
    </div>
  )
}
