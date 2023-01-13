import { renderHook, act } from "@testing-library/react-hooks"
import { waitFor } from "@testing-library/react"

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
  test("exposes the isCopy value", async () => {
    const { result } = renderHook(useCopyToClipboard)

    expect(result.current[0]).toBe(false)
  })

  test("isCopy value change to true after copy value to the Clipboard", async () => {
    const { result } = renderHook(useCopyToClipboard)
    const copyToClipboard = result.current[1]

    act(() => {
      copyToClipboard(string)
    })
    expect(result.current[0]).toBe(true)
  })

  test("wait 5 second before isCopy value change back to false", async () => {
    jest.useFakeTimers()
    jest.spyOn(global, "setTimeout")
    const { result, waitForValueToChange, waitForNextUpdate } =
      renderHook(useCopyToClipboard)
    const copyToClipboard = result.current[1]

    act(() => {
      copyToClipboard(string)
    })

    expect(setTimeout).toBeCalledTimes(1)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 5000)
    // await waitForNextUpdate()
    await waitForValueToChange(() => result.current[0])
    expect(result.current[0]).toBe(false)
  })

  test("copy text to the Clipboard", async () => {
    const { result } = renderHook(useCopyToClipboard)
    const copyToClipboard = result.current[1]

    act(() => {
      copyToClipboard(string)
    })
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(string)
    expect(navigator.clipboard.writeText).toBeCalledTimes(1)
  })
  test("copy number to the Clipboard", async () => {
    const { result } = renderHook(useCopyToClipboard)
    const copyToClipboard = result.current[1]

    act(() => {
      copyToClipboard(number)
    })
    expect(result.current[0]).toBe(true)
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(number)
    expect(navigator.clipboard.writeText).toBeCalledTimes(1)
  })
})
