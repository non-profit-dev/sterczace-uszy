import * as Styled from "./Subnav.styled"

const Subnav = () => (
  <Styled.Container as="section">
    <Styled.Nav>
      <Styled.Item>
        <Styled.Link variant="bodyTitle" as="a" href="#podatek">
          1.5% podatku
        </Styled.Link>
      </Styled.Item>
      <Styled.Item>
        <Styled.Link variant="bodyTitle" as="a" href="#wplaty">
          Wpłaty
        </Styled.Link>
      </Styled.Item>
      <Styled.Item>
        <Styled.Link variant="bodyTitle" as="a" href="#dom-tymczasowy">
          Dom tymczasowy
        </Styled.Link>
      </Styled.Item>
    </Styled.Nav>
  </Styled.Container>
)

export default Subnav
