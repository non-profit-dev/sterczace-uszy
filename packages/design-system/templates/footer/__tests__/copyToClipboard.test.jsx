import copyToClipboard from "design-system/templates/footer/copyToClipboard"

const originalClipboard = { ...global.navigator.clipboard }

beforeEach(() => {
  let clipboardData = ""
  const mockClipboard = {
    writeText: jest.fn((data) => {
      clipboardData = data
    }),
    readText: jest.fn(() => clipboardData),
  }
  global.navigator.clipboard = mockClipboard
})

afterEach(() => {
  jest.resetAllMocks()
  global.navigator.clipboard = originalClipboard
})

describe(`Copy to clipboard`, () => {
  it("copies a string to the clipboard", async () => {
    const string = "test"

    copyToClipboard(string)

    expect(navigator.clipboard.readText()).toBe(string)
    expect(navigator.clipboard.writeText).toBeCalledTimes(1)
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(string)
  })

  it("copies a number to the clipboard", async () => {
    const number = "123"

    copyToClipboard(number)

    expect(navigator.clipboard.readText()).toBe(number)
    expect(navigator.clipboard.writeText).toBeCalledTimes(1)
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(number)
  })
})
