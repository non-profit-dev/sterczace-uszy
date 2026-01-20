"use client"

import { toast } from "sonner"

import { PartnerCard } from "@/components/partner-card"

interface PartnerCardWithCopyProps {
  logo: string
  discount: string
  title: string
  description: string
  code?: string
  offerLink: string
}

export function PartnerCardWithCopy({
  logo,
  discount,
  title,
  description,
  code,
  offerLink,
}: PartnerCardWithCopyProps) {
  const handleCodeClick = code
    ? () => {
        navigator.clipboard.writeText(code)
        toast.success(`Kod ${code} został skopiowany do schowka!`)
      }
    : undefined

  return (
    <PartnerCard
      logo={logo}
      discount={discount}
      title={title}
      description={description}
      offerLink={offerLink}
      code={code}
      onCodeClick={handleCodeClick}
    />
  )
}
