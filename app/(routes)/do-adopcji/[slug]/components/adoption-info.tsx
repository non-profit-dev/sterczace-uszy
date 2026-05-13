import Link from "next/link"

import { Globe, Home, Truck } from "lucide-react"

import { Button } from "@/components/ui"

export function AdoptionInfo() {
  return (
    <div className="bg-primary-50 border-primary-500 mt-3 rounded-2xl border p-6 lg:mt-6">
      <h3 className="mb-4 text-xl font-semibold lg:text-2xl">Ważne informacje:</h3>
      <ul className="space-y-3 text-lg">
        <li className="flex items-center gap-3">
          <Truck className="text-primary-500 h-5 w-5 shrink-0" />
          <span className="text-base lg:text-lg">Pomagamy z transportem za zwrot kosztów.</span>
        </li>

        <li className="flex items-center gap-3">
          <Home className="text-primary-500 h-5 w-5 shrink-0" />
          <span className="text-base lg:text-lg">
            Nie wydajemy zwierząt do budy, kojca, garażu czy pilnowania posesji.
          </span>
        </li>

        <li className="flex items-start gap-3">
          <Globe className="text-primary-500 mt-1 h-5 w-5 shrink-0" />
          <div className="flex flex-col gap-1">
            <span className="text-base lg:text-lg">
              Jako fundacja umożliwiamy adopcję za granicę.
            </span>
            <div className="flex flex-wrap gap-x-2">
              <Button asChild variant="link" size="sm" className="h-auto p-0">
                <Link href="/adopcja-za-granice" className="text-sm lg:text-lg">
                  Więcej informacji
                </Link>
              </Button>
              <span className="text-muted-foreground">·</span>
              <Button asChild variant="link" size="sm" className="h-auto p-0">
                <Link href="/kontakt" className="text-sm lg:text-lg">
                  Zapytaj o taką możliwość
                </Link>
              </Button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
