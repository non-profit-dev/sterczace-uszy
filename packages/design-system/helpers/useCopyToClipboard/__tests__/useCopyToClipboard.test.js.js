import { renderHook, act } from "@testing-library/react-hooks"

import useCopyToClipboard from "design-system/helpers/useCopyToClipboard"

const string = "test"
const number = "123"

Object.assign(navigator, {
  clipboard: {
    writeText: () => {},
    readText: () => {},
  },
})

beforeEach(() => {
  jest.spyOn(navigator.clipboard, "writeText")
})

afterEach(() => {
  jest.resetAllMocks()
})

describe(`useCopyToClipboard`, () => {
  test("before called exposes the isCopy value", async () => {
    const { result } = renderHook(useCopyToClipboard)

    expect(result.current[0]).toBe(false)
  })

  test("copy text to the Clipboard", async () => {
    const { result } = renderHook(useCopyToClipboard)

    act(() => {
      result.current[1](string)
    })
    expect(result.current[0]).toBe(true)
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(string)
    expect(navigator.clipboard.writeText).toBeCalledTimes(1)
  })
  test("copy number to the Clipboard", async () => {
    const { result } = renderHook(useCopyToClipboard)

    act(() => {
      result.current[1](number)
    })
    expect(result.current[0]).toBe(true)
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(number)
    expect(navigator.clipboard.writeText).toBeCalledTimes(1)
  })
})
