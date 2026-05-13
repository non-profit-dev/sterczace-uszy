import { cn } from "@/lib/utils"

type SectionAlign = "left" | "center"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  align?: SectionAlign
}

interface SectionHeaderProps {
  children: React.ReactNode
  className?: string
  align?: SectionAlign
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("w-full px-4 py-16 lg:py-24", className)}>
      <div className={cn("mx-auto flex max-w-6xl flex-col gap-8 md:gap-12")}>{children}</div>
    </section>
  )
}

Section.Header = function SectionHeader({
  children,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-2",
        align === "center" ? "text-left md:mx-auto md:text-center" : "text-left",
        className
      )}
    >
      {children}
    </div>
  )
}

Section.Content = function SectionContent({ children, className, align = "left" }: SectionProps) {
  return (
    <div
      className={cn(
        "w-full",
        align === "center" ? "text-left md:text-center" : "text-left",
        className
      )}
    >
      {children}
    </div>
  )
}

Section.Subtitle = function SectionSubtitle({ children, className }: SectionProps) {
  return <p className={cn("text-primary-500 mb-2 font-bold uppercase", className)}>{children}</p>
}

Section.Title = function SectionTitle({ children, className }: SectionProps) {
  return <h2 className={cn("text-3xl lg:text-5xl", className)}>{children}</h2>
}

Section.Description = function SectionDescription({ children, className }: SectionProps) {
  return <p className={cn("mt-3 text-lg lg:text-xl", className)}>{children}</p>
}
