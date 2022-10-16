import styled from "@emotion/styled"

export const Banner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px, 80px, 10px, 80px;
  gap: 10px;
  height: 60px;
  position: relative;
  color: ${({ theme }) => theme.colors.grey[600]};
  background-color: ${({ theme }) => theme.colors.complementary[100]};
`

export const Heading = styled.h2`
  margin: 0;
  ${({ theme }) => theme.typography.desktop.bodySmall};
  }
`

export const Link = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px, 80px, 10px, 80px;
  height: 60px;
  position: relative;
  color: ${({ theme }) => theme.colors.primary[500]};
  text-decoration: underline;
  ${({ theme }) => theme.typography.desktop.bodySmall};
`

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: transparent;
  border: none;
  width: 6.62;
  height: 3.31px;
`
