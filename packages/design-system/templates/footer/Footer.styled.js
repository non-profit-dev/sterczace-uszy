import styled from "@emotion/styled"
import { css } from "@emotion/react"

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: "red";
  gap: 24px;
  width: 100%;
`
export const SectionWrapper = styled.div`
  display: flex;
  ${
    "" /* margin: ${({ size }) => (size === "tiny" ? "8px 0 20px 0" : "12px 0 32px 0")}; */
  }
  ${"" /* flex-direction: column; */}
  ${"" /* background-color: ${({ bgColor = "transparent" }) => bgColor}; */}
  flex-direction: ${({ direction = "column" }) => direction};
  ${({ layout }) =>
    layout === "stretch"
      ? css`
          align-items: stretch;
        `
      : css`
          align-items: flex-start;
        `}

  color: "blue";
  gap: 24px;
  width: 100%;
  border: 1px solid;
`
export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
`
