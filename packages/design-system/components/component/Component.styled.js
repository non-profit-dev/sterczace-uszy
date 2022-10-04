import styled from "@emotion/styled"
import { css } from "@emotion/react"

const sizes = {
  small: {
    padding: "14px",
  },
  medium: {
    padding: "30px",
  },
  large: {
    padding: "40px",
  },
  xlarge: {
    padding: "40px",
  },
}

export const Component = styled.div`
  position: relative;
  padding: ${({ size }) => sizes[size].padding};
  border: ${({ theme }) => `1px solid ${theme.colors.grey[200]}`};
  border-radius: 2px;
  color: ${({ theme }) =>
    theme.colors
      .grey[500]}; // this is the way we can use some values from our theme
`

export const Heading = styled.h2`
  margin: 0;
  ${({ theme, typographyVariant }) =>
    theme.typography.desktop[typographyVariant]};
`

export const Description = styled.p`
  ${({ theme, typographyVariant }) =>
    theme.typography.desktop[typographyVariant]};
`

export const Link = styled.a`
  display: inline-block;
  margin-top: 14px;
  padding: 8px 16px;
  border-radius: 2px;
  background-color: ${({ theme, variant }) =>
    variant === "primary"
      ? theme.colors.primary[300]
      : theme.colors.complementary[100]};
  color: ${({ theme }) => theme.colors.grey[500]};
  text-decoration: none;
  ${({ theme }) => theme.typography.desktop.bodySmall};

  &:hover {
    background-color: ${({ theme, variant }) =>
      variant === "primary"
        ? theme.colors.primary[400]
        : theme.colors
            .neutrals[400]}; // this is the way we can use values from our theme based on another property
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
      ? theme.colors.primary[200]
      : theme.colors.complementary[100]};
  color: ${({ theme, variant }) =>
    variant === "primary" ? theme.colors.primary[500] : theme.colors.grey[400]};
  cursor: pointer;

  ${({ favorite, theme, variant }) =>
    favorite &&
    css`
      svg {
        fill: ${variant === "primary"
          ? theme.colors.primary[500]
          : theme.colors.grey[400]};
      }
    `}

  &:hover {
    background-color: ${({ theme, variant }) =>
      variant === "primary"
        ? theme.colors.primary[300]
        : theme.colors
            .neutrals[400]}; // this is the way we can use values from our theme based on another property
  }
`
