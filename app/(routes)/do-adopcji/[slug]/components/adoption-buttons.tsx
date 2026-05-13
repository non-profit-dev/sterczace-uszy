import { Heart } from "lucide-react"

import { Button } from "@/components/ui"

interface AdoptionButtonsProps {
  preAdoptionSurveyLink: string
  temporaryHomeSurveyLink?: string
  temporaryHome: boolean
}

export function AdoptionButtons({
  preAdoptionSurveyLink,
  temporaryHomeSurveyLink,
  temporaryHome,
}: AdoptionButtonsProps) {
  return (
    <div className="space-y-2">
      <Button asChild className="w-full">
        <a target="_blank" rel="noopener noreferrer" href={preAdoptionSurveyLink}>
          <Heart className="h-5 w-5" />
          Adoptuj mnie
        </a>
      </Button>

      {!temporaryHome && temporaryHomeSurveyLink && (
        <div className="text-center">
          <Button asChild variant="link">
            <a target="_blank" rel="noopener noreferrer" href={temporaryHomeSurveyLink}>
              Zostań domem tymczasowym
            </a>
          </Button>
        </div>
      )}
    </div>
  )
}
