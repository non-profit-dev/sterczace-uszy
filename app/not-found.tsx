import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <Image src="/not-found.png" alt="" width={400} height={400} />
      <h1 className="mb-4 text-4xl font-bold lg:text-6xl">Gdzie my jesteśmy?</h1>
      <p className="mb-8 text-center text-xl lg:text-2xl">
        Chyba ktoś tu zabłądził. Strona, której szukasz, nie istnieje. 🫣
      </p>
      <Button asChild>
        <Link href="/">Powrót na stronę główną</Link>
      </Button>
    </div>
  )
}
