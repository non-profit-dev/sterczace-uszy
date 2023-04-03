import { useTheme } from "@emotion/react"

import Count from "design-system/components/count"
import Icon from "design-system/components/icon"
import Container from "design-system/components/container"
import Typography from "design-system/components/typography"
import Illustration from "design-system/components/illustration"

import TextBanner from "design-system/patterns/textBanner"

import useCopyToClipboard from "design-system/helpers/useCopyToClipboard"

import * as Styled from "./Tax.styled"

const Tax = () => {
  const theme = useTheme()
  const [isCopiedKrs, copyToClipboardKrs] = useCopyToClipboard()
  const [isCopied, copyToClipboard] = useCopyToClipboard()

  return (
    <Styled.Wrapper id="podatek">
      <Container as="section">
        <Styled.Content>
          <Styled.Graphic>
            <Illustration name="dogCat" />
            <Styled.Header>
              <Typography variant="h1" as="p">
                Przekaż
              </Typography>
              <Count count="1.5%" size="large" />
              <Typography variant="h3" as="p">
                KRS: 0000270261
              </Typography>
            </Styled.Header>
          </Styled.Graphic>

          <div>
            <TextBanner
              subtitle="1.5% podatku"
              heading="Twoja pomoc ma moc"
              descriptionColor={theme.colors.gray[600]}
              tabletLayout="left"
              mobileLayout="left"
            >
              Możesz wesprzeć działania naszej Fundacji przekazując 1,5% swojego
              podatku na konto Fundacji. <br />
              Aby to zrobić w trakcie wypełniania swojego zeznania podatkowego
              wybierz:
            </TextBanner>

            <Styled.Info>
              <Typography variant="bodyTitle">Numer KRS:</Typography>
              <Typography variant="bodyTitle">
                <strong>0000270261</strong>
                {isCopiedKrs ? (
                  <Styled.CopyInfo
                    variant="bodyTiny"
                    color={theme.colors.primary[500]}
                  >
                    Skopiowano
                  </Styled.CopyInfo>
                ) : (
                  <Styled.CopyButton
                    onClick={() => copyToClipboardKrs("0000270261")}
                  >
                    <Icon name="copy" color={theme.colors.primary[500]} />
                  </Styled.CopyButton>
                )}
              </Typography>
            </Styled.Info>

            <Styled.Info>
              <Typography variant="bodyTitle">Dopisek:</Typography>
              <Typography variant="bodyTitle">
                <strong>Fundacja Sterczące Uszy 13146</strong>
                {isCopied ? (
                  <Styled.CopyInfo
                    variant="bodyTiny"
                    color={theme.colors.primary[500]}
                  >
                    Skopiowano
                  </Styled.CopyInfo>
                ) : (
                  <Styled.CopyButton
                    onClick={() =>
                      copyToClipboard("Fundacja Sterczące Uszy 13146")
                    }
                  >
                    <Icon name="copy" color={theme.colors.primary[500]} />
                  </Styled.CopyButton>
                )}
              </Typography>
            </Styled.Info>
          </div>
        </Styled.Content>
      </Container>
    </Styled.Wrapper>
  )
}

export default Tax
