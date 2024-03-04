import styled from "@emotion/styled"
import Typography from "design-system/components/typography"

export const Card = styled.div`
  padding: 48px 48px 28px 48px;
  display: flex;
  gap: 24px;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  border-radius: 30px;
  color: ${({ theme }) => theme.colors.gray[600]};
  background: linear-gradient(
    184.04deg,
    #faf4f4 -100.48%,
    rgba(250, 244, 244, 0) 96.7%
  );
  ${({ theme }) => theme.breakpoints.mobile} {
    padding: 24px 24px 40px;
  }
`

export const Icon = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  ${({ theme }) => theme.breakpoints.mobile} {
    width: 40px;
    height: 40px;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`
export const Title = styled.div`
  margin-top: 12px;
`

export const Description = styled(Typography)`
  text-align: left;
  position: relative;
  margin: 0;

  &:before {
    content: "";
    position: absolute;
    left: -12px;
    top: 0;
    height: 100%;
    width: 3px;
    clip-path: ellipse(1px 50%);
    background: ${({ theme }) => theme.colors.primary[500]};
  }
`
