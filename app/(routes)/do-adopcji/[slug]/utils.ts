export const calculateAge = (birthDate: string): string => {
  const birth = new Date(birthDate)
  const now = new Date()
  const diffMonths =
    (now.getFullYear() - birth.getFullYear()) * 12 + (now.getMonth() - birth.getMonth())

  if (diffMonths < 12) {
    return `${diffMonths} ${diffMonths === 1 ? "miesiąc" : diffMonths < 5 ? "miesiące" : "miesięcy"}`
  }

  const years = Math.floor(diffMonths / 12)
  return `${years} ${years === 1 ? "rok" : years < 5 ? "lata" : "lat"}`
}

export const getGenderDisplay = (type: string, gender: string): string => {
  if (type === "pies") {
    return gender === "ona" ? "suczka" : "pies"
  } else {
    return gender === "ona" ? "kotka" : "kot"
  }
}

export const getAdoptionStatusDisplay = (adopted: boolean, temporaryHome: boolean): string[] => {
  if (adopted) {
    return []
  }
  if (temporaryHome) {
    return ["Czeka na adopcję"]
  }
  return ["Szuka domu tymczasowego", "Szuka adopcji"]
}
