import styled from "@emotion/styled"

const sizes = {
  small: {
    maxWidth: "390px",
  },
  medium: {
    maxWidth: "768px",
  },
  large: {
    maxWidth: "1216px",
  },
}

export const Container = styled.div`
  max-width: ${({ size }) => sizes[size].maxWidth};
  margin: 0 auto;
`
