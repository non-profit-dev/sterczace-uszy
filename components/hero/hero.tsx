import Image from "next/image"

export function Hero({
  title,
  subtitle,
  descriptions,
  backgroundImage,
}: {
  title: string
  subtitle?: string
  descriptions?: string[]
  backgroundImage?: string
}) {
  return (
    <header className="bg-primary-50 relative w-full py-14 lg:py-26">
      {backgroundImage && <Image src={backgroundImage} alt="" fill className="object-cover" />}

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex max-w-2xl flex-col gap-4">
          <div>
            {subtitle && (
              <p className="text-primary-500 mb-2 text-sm font-bold uppercase lg:text-base">
                {subtitle}
              </p>
            )}
            <h1 className="text-4xl lg:text-6xl">{title}</h1>
          </div>

          {descriptions &&
            descriptions.map((description, index) => (
              <p key={index} className="text-lg lg:text-xl">
                {description}
              </p>
            ))}
        </div>
      </div>
    </header>
  )
}
