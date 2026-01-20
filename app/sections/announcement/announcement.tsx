import Link from "next/link"

import { MoveRight } from "lucide-react"

export function Announcement() {
  return (
    <div className="bg-secondary-200 flex w-full justify-center p-4">
      <div className="flex w-full max-w-5xl justify-center gap-1 text-center font-medium">
        <p className="lg:hidden">Przekaż 1.5% podatku.</p>
        <p className="hidden lg:block">Przekaż 1.5% podatku w ramach wsparcia naszej fundacji.</p>
        <Link href="/wsparcie#przekaz-podatek" className="text-primary-500 flex gap-2 underline">
          Sprawdź <MoveRight className="w-3.5" />
        </Link>
      </div>
    </div>
  )
}
