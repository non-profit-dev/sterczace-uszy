import getMonthsNumber from "design-system/helpers/getMonthsNumber"

const testCases = [
  {
    value: "2023-01-24T00:00:00.000Z",
    expected: 4,
  },
  {
    value: "2023-06-01T00:00:00.000Z",
    expected: 1,
  },
  {
    value: "2022-07-24T00:00:00.000Z",
    expected: 10,
  },
  {
    value: "2022-11-24T00:00:00.000Z",
    expected: 6,
  },
  {
    value: "2023-05-02T00:00:00.000Z",
    expected: 1,
  },
]

describe(`getMonthsNumber`, () => {
  test.each(testCases)(
    "returns $expected from the date: $value",
    ({ value, expected }) => {
      expect(getMonthsNumber(value)).toBe(expected)
    }
  )
})
