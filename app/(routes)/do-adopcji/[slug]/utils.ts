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
