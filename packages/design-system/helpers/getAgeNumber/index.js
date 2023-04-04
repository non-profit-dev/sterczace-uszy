const getAgeNumber = (date) => {
  const birthDate = new Date(date)
  const year = birthDate.getFullYear()
  const month = birthDate.getMonth()
  const day = birthDate.getDay()

  const birth = new Date(year, month - 1, day)
  const now = new Date()
  const diff = new Date(now.valueOf() - birth.valueOf())

  return Math.abs(diff.getFullYear() - 1970)
}

export default getAgeNumber
