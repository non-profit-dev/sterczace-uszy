const getMonthsNumber = (date) => {
  const birthDate = new Date(date)
  const now = new Date()
  const monthsDifference = Math.round(
    (now.getTime() - birthDate.getTime()) / 1000 / 3600 / 24 / 30
  )
  if (monthsDifference === 0) {
    return 1
  }
  return monthsDifference
}

export default getMonthsNumber
