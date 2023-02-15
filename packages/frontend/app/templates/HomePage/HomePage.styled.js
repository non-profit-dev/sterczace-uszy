import styled from "@emotion/styled"

export const Main = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  min-height: 100vh;
  overflow: hidden;
`

export const Grid = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 40px;
  margin-top: 20px;
  margin-bottom: 40px;

  img {
    max-height: 340px;
  }
`

export const TextContainer = styled.div`
  margin: 40px 0;
`
