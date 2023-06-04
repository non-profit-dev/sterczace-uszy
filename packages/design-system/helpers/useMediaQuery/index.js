import { useEffect, useState } from "react"

const useMediaQuery = (mediaQueryString) => {
  const [matches, setMatches] = useState(null)

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQueryString)

    const listener = () => setMatches(!!mediaQueryList.matches)
    mediaQueryList.addListener(listener)

    listener()

    return () => {
      mediaQueryList.removeListener(listener)
    }
  }, [mediaQueryString])

  return matches
}

export default useMediaQuery
