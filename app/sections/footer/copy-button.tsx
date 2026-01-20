"use client"

import { Copy } from "lucide-react"
import { toast } from "sonner"

interface CopyButtonProps {
  text: string
}

export function CopyButton({ text }: CopyButtonProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text)
    toast.success("Skopiowano do schowka")
  }

  return (
    <button
      onClick={copyToClipboard}
      className="text-primary-500 hover:text-primary-600 cursor-pointer transition-colors"
      title="Skopiuj do schowka"
    >
      <Copy className="h-5 w-5" />
    </button>
  )
}
