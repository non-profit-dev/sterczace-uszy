import { useEffect, useState } from "react"
import Cookies from "js-cookie"

import Button from "design-system/components/button"
import Typography from "design-system/components/typography"

import * as Styled from "./CookiesBanner.styled"

const CookiesBanner = () => {
  const [isVisible, setIsVisible] = useState(false)

  const rejectCookies = () => {
    Cookies.set("exp", "", { expires: 14 })

    window.gtag("consent", "update", {
      ad_storage: "denied",
      analytics_storage: "denied",
    })

    setIsVisible(false)
  }

  const acceptCookies = () => {
    window.gtag("consent", "update", {
      ad_storage: "granted",
      analytics_storage: "granted",
    })

    Cookies.remove("exp")

    setIsVisible(false)
  }

  useEffect(() => {
    if (!Object.keys(Cookies.get()).length) {
      setIsVisible(true)
    }
  }, [])

  return isVisible ? (
    <Styled.Wrapper role="dialog" aria-labelledby="cookie-heading">
      <Styled.Container>
        <Styled.Icon
          onClick={rejectCookies}
          name="close"
          color="black"
          title="Zamknij banner"
        />
        <Styled.Content>
          <Styled.Text>
            <Typography variant="bodyTitle" id="cookie-heading">
              Ta strona korzysta z plików cookie, aby poprawić Twoje wrażenia
              podczas korzystania z niej. Szczegółowe informacje znajdziesz w{" "}
              <a href="/polityka-prywatnosci">Polityce prywatności</a>. Będziemy
              używać plików cookie tylko wtedy, gdy wyrazisz na to zgodę,
              klikając &quot;Zaakceptuj wszystkie&quot;.
            </Typography>
          </Styled.Text>
          <Styled.Buttons>
            <Button
              onClick={rejectCookies}
              text="Odrzuć wszystkie"
              variant="border"
              color="black"
            />
            <Button
              onClick={acceptCookies}
              text="Zaakceptuj wszystkie"
              variant="fill"
              color="primary"
            />
          </Styled.Buttons>
        </Styled.Content>
      </Styled.Container>
    </Styled.Wrapper>
  ) : null
}

export default CookiesBanner
