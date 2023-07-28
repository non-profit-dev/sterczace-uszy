import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"

import Container from "design-system/components/container"
import Button from "design-system/components/button"
import Typography from "design-system/components/typography"

import * as Styled from "./CookiesBanner.styled"

const CookiesBanner = () => {
  const [cookies] = useCookies()
  const [isVisible, setIsVisible] = useState(false)

  const handleCookies = () => {
    window.gtag("consent", "update", {
      ad_storage: "granted",
      analytics_storage: "granted",
    })

    setIsVisible(false)
  }

  useEffect(() => {
    if (!Object.keys(cookies).length) {
      setIsVisible(true)
    }
  }, [])

  return isVisible ? (
    <Styled.Wrapper>
      <Container>
        <Styled.Content>
          <Styled.Text>
            <Typography variant="bodyTitle">
              Ta strona korzysta z plików cookie, aby poprawić Twoje wrażenia
              podczas korzystania z niej. Szczegółowe informacje znajdziesz w{" "}
              <a href="/polityka-prywatnosci">Polityce prywatności</a>. Będziemy
              używać plików cookie tylko wtedy, gdy wyrazisz na to zgodę,
              klikając &quot;Zaakceptuj wszystkie&quot;.
            </Typography>
          </Styled.Text>

          <Styled.Buttons>
            <Button
              onClick={() => setIsVisible(false)}
              text="Odrzuć wszystkie"
              variant="border"
              color="black"
            />
            <Button
              onClick={handleCookies}
              text="Zaakceptuj wszystkie"
              variant="fill"
              color="primary"
            />
          </Styled.Buttons>
        </Styled.Content>
      </Container>
    </Styled.Wrapper>
  ) : null
}

export default CookiesBanner
