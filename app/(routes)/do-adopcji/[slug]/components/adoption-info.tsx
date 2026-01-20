import Link from "next/link"

import { Globe, Home, Truck } from "lucide-react"

import { Button } from "@/components/ui"

export function AdoptionInfo() {
  return (
    <div className="bg-primary-50 border-primary-500 mt-3 rounded-2xl border p-6 lg:mt-6">
      <h3 className="mb-4 text-2xl font-semibold">Ważne informacje:</h3>
      <ul className="space-y-3 text-lg">
        <li className="flex items-center gap-3">
          <Truck className="text-primary-500 h-5 w-5 shrink-0" />
          <span>Pomagamy z transportem za zwrot kosztów.</span>
        </li>
        <li className="flex items-center gap-3">
          <Globe className="text-primary-500 h-5 w-5 shrink-0" />
          <span>
            Możliwa adopcja za granicę.{" "}
            <Button asChild variant="link" size="sm">
              <Link href="/adopcja-za-granice">Więcej informacji</Link>
            </Button>
          </span>
        </li>
        <li className="flex items-center gap-3">
          <Home className="text-primary-500 h-5 w-5 shrink-0" />
          <span>Nie wydajemy zwierząt do budy, kojca, garażu czy pilnowania posesji.</span>
        </li>
      </ul>
    </div>
  )
}
