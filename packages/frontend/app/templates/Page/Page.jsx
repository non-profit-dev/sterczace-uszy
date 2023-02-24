import Head from "next/head"
import { node, string } from "prop-types"

import OgImage from "frontend/public/OgImage.png"

const Page = ({ title, description, image, children }) => (
  <>
    <Head>
      <title>{title} | Fundacja Sterczące Uszy</title>
      <meta name="description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
    {children}
  </>
)

Page.propTypes = {
  title: string.isRequired,
  description: string,
  image: string,
  children: node.isRequired,
}

Page.defaultProps = {
  description:
    "Sterczące Uszy to organizacja non-profit, której najważniejszym celem jest szerzenie pomocy bezdomnym zwierzętom, zapewnienie im bezpieczeństwa, spokoju i miłości. Chcemy pokazać, że każde zwierzę zasługuje na szansę, na nowe życie w ciepłym i kochającym domu.",
  image: OgImage.src,
}

export default Page
