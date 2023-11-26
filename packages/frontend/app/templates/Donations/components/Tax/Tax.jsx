import { useTheme } from "@emotion/react"

import Count from "design-system/components/count"
import Container from "design-system/components/container"
import IconButton from "design-system/components/iconButton"
import Typography from "design-system/components/typography"
import Illustration from "design-system/components/illustration"

import TextBanner from "design-system/patterns/textBanner"

import useCopyToClipboard from "design-system/helpers/useCopyToClipboard"
import globalData from "shared/data"

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
                  <IconButton
                    name="copy"
                    onClick={() => copyToClipboardKrs("0000270261")}
                    size="medium"
                    ariaLabel="Skopiuj numer KRS"
                    title="Skopiuj numer KRS"
                  />
                )}
              </Typography>
            </Styled.Info>

            <Styled.Info>
              <Typography variant="bodyTitle">Dopisek:</Typography>
              <Typography variant="bodyTitle">
                <strong>Fundacja {globalData.organizationName} 13146</strong>
                {isCopied ? (
                  <Styled.CopyInfo
                    variant="bodyTiny"
                    color={theme.colors.primary[500]}
                  >
                    Skopiowano
                  </Styled.CopyInfo>
                ) : (
                  <IconButton
                    name="copy"
                    onClick={() =>
                      copyToClipboard(
                        `Fundacja ${globalData.organizationName} 13146`
                      )
                    }
                    size="medium"
                    ariaLabel="Skopiuj dopisek"
                    title="Skopiuj dopisek"
                  />
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
