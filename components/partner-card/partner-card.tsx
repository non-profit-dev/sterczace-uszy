import Image from "next/image"

import { Copy, MoveRight } from "lucide-react"

import { Button } from "@/components/ui"

type PartnerCardProps = {
  logo: string
  discount: string
  title: string
  description: string
  offerLink: string
  onCodeClick?: () => void
  code?: string
}

export function PartnerCard({
  logo,
  discount,
  title,
  description,
  offerLink,
  onCodeClick,
  code,
}: PartnerCardProps) {
  return (
    <div className="group flex flex-col items-center overflow-hidden rounded-2xl border bg-white md:flex-row">
      <div className="relative flex flex-1/5 items-center justify-center p-6">
        <Image
          src={logo}
          alt=""
          width={200}
          height={200}
          className="h-full max-w-50 object-contain lg:w-full"
        />
      </div>

      <div className="flex flex-4/5 flex-col items-start gap-4 border-b p-6">
        {discount && (
          <div className="font-mogra text-primary-500 text-3xl font-bold lg:text-4xl">
            {discount}
          </div>
        )}
        <h4 className="text-xl lg:text-2xl">{title}</h4>
        <p className="leading-relaxed">{description}</p>

        {code && (
          <div className="bg-primary-50 text-primary-600 border-primary-100 mt-2 inline-flex items-center gap-4 rounded border px-5 py-3">
            <p className="font-mono font-semibold">{code}</p>

            {onCodeClick && (
              <button onClick={onCodeClick} className="cursor-pointer">
                <Copy className="h-4 w-4" />
              </button>
            )}
          </div>
        )}

        <div className="mt-3 flex items-center gap-3">
          <Button asChild variant="link" size="sm" className="text-primary-500 font-semibold">
            <a href={offerLink} target="_blank" rel="noopener noreferrer">
              Sprawdź ofertę <MoveRight className="w-3.5" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
