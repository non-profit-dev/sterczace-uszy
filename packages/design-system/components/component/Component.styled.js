import styled from "@emotion/styled"
import { css } from "@emotion/react"

const sizes = {
  small: {
    heading: "18px",
    description: "14px",
    link: "12px",
    padding: "14px",
  },
  medium: {
    heading: "24px",
    description: "16px",
    link: "14px",
    padding: "30px",
  },
  large: {
    heading: "30px",
    description: "20px",
    link: "16px",
    padding: "40px",
  },
}

export const Component = styled.div`
  position: relative;
  padding: ${({ size }) => sizes[size].padding};
  border: ${({ theme }) => `1px solid ${theme.colors.neutrals[200]}`};
  border-radius: 2px;
  font-family: "Helvetica"; // this should be defined outside of the component, it should be a global font family for the whole app, but it's here because we haven't defined it yet
  color: ${({ theme }) =>
    theme.colors
      .neutrals[300]}; // this is the way we can use some values from our theme
`

export const Heading = styled.h2`
  margin: 0;
  font-size: ${({ size }) => sizes[size].heading};
`

export const Description = styled.p`
  font-size: ${({ size }) => sizes[size].description};
`

export const Link = styled.a`
  display: inline-block;
  margin-top: 14px;
  padding: 8px 16px;
  border-radius: 2px;
  background-color: ${({ theme, variant }) =>
    variant === "primary"
      ? theme.colors.primary[200]
      : theme.colors.secondary[200]};
  color: ${({ theme }) => theme.colors.neutrals[100]};
  text-decoration: none;
  font-size: ${({ size }) => sizes[size].link};

  &:hover {
    background-color: ${({ theme, variant }) =>
      variant === "primary"
        ? theme.colors.primary[300]
        : theme.colors
            .secondary[300]}; // this is the way we can use values from our theme based on another property
  }
`

export const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 6px 8px;
  border: none;
  border-radius: 2px;
  background-color: ${({ theme, variant }) =>
    variant === "primary"
      ? theme.colors.primary[100]
      : theme.colors.secondary[100]};
  color: ${({ theme, variant }) =>
    variant === "primary"
      ? theme.colors.primary[200]
      : theme.colors.secondary[200]};
  cursor: pointer;

  ${({ favorite, theme, variant }) =>
    favorite &&
    css`
      svg {
        fill: ${variant === "primary"
          ? theme.colors.primary[200]
          : theme.colors.secondary[200]};
      }
    `}
`
