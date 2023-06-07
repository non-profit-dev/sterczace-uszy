import getAgeNumber from "../getAgeNumber"
import getMonthsNumber from "../getMonthsNumber"

export function getPlurals(
  singularNominativ,
  pluralNominativ,
  pluralGenitive,
  value
) {
  const newVal = Math.abs(value)

  if (newVal === 1) {
    return singularNominativ
  }
  if (
    newVal % 10 >= 2 &&
    newVal % 10 <= 4 &&
    (newVal % 100 < 10 || newVal % 100 >= 20)
  ) {
    return pluralNominativ
  }
  return pluralGenitive
}

export function getMonthsPlurals(
  singularNominativ,
  pluralNominativ,
  pluralGenitive,
  value
) {
  const newVal = Math.abs(value)

  if (newVal === 1) {
    return singularNominativ
  }
  if (newVal >= 2 && newVal <= 4) {
    return pluralNominativ
  }
  return pluralGenitive
}

const getAge = (age) => {
  if (getAgeNumber(age) < 1) {
    return `~ ${getMonthsNumber(age)} ${getMonthsPlurals(
      "miesiąc",
      "miesiące",
      "miesięcy",
      getMonthsNumber(age)
    )}`
  }

  return `~ ${getAgeNumber(age)} ${getPlurals(
    "rok",
    "lata",
    "lat",
    getAgeNumber(age)
  )}`
}

export default getAge
