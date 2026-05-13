export function extractCollection<T>(collectionData: {
  items: T[]
  total?: number
  limit?: number
  skip?: number
}): T[] {
  return collectionData?.items || []
}

export function getYearsSinceFoundation(): number {
  const foundationDate = new Date("2022-04-14")
  const today = new Date()

  const yearsDiff = today.getFullYear() - foundationDate.getFullYear()
  const monthDiff = today.getMonth() - foundationDate.getMonth()
  const dayDiff = today.getDate() - foundationDate.getDate()

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    return yearsDiff - 1
  }

  return yearsDiff
}

export function getYearsLabel(years: number): string {
  if (years === 1) {
    return "Rok działania"
  }

  const lastDigit = years % 10
  const lastTwoDigits = years % 100

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return "Lat działania"
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return "Lata działania"
  }

  return "Lat działania"
}

export function formatAnimalAge(dateString?: string): string {
  if (!dateString) {
    return ""
  }

  // Check if it's already a formatted string (not an ISO date)
  if (!dateString.includes("T") && !dateString.includes("-")) {
    return dateString
  }

  try {
    const birthDate = new Date(dateString)
    const today = new Date()

    let years = today.getFullYear() - birthDate.getFullYear()
    let months = today.getMonth() - birthDate.getMonth()

    if (months < 0) {
      years--
      months += 12
    }

    // Adjust if the day hasn't passed yet this month
    if (today.getDate() < birthDate.getDate()) {
      months--
      if (months < 0) {
        years--
        months += 12
      }
    }

    if (years === 0 && months === 0) {
      return "mniej niż miesiąc"
    }

    if (years === 0) {
      if (months === 1) {
        return "1 miesiąc"
      }
      if (months >= 2 && months <= 4) {
        return `${months} miesiące`
      }
      return `${months} miesięcy`
    }

    const totalMonths = years * 12 + months
    const roundedYears = Math.round(totalMonths / 12)

    if (roundedYears === 1) {
      return "1 rok"
    }
    if (roundedYears >= 2 && roundedYears <= 4) {
      return `${roundedYears} lata`
    }
    return `${roundedYears} lat`
  } catch (error) {
    console.error("Error parsing animal age:", error)
    return dateString
  }
}
