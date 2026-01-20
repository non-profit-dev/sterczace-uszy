import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import type { Document } from "@contentful/rich-text-types"

const ALLOWED_PROTOCOLS = ["http:", "https:", "mailto:", "tel:"]

const isValidUrl = (uri: string): boolean => {
  try {
    const url = new URL(uri, "https://example.com")
    return ALLOWED_PROTOCOLS.includes(url.protocol)
  } catch {
    return false
  }
}

const richTextOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node: any, children: any) => <p className="mb-4 last:mb-0">{children}</p>,
    [BLOCKS.HEADING_1]: (_node: any, children: any) => (
      <h1 className="mb-4 text-3xl font-bold">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (_node: any, children: any) => (
      <h2 className="mb-3 text-2xl font-bold">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (_node: any, children: any) => (
      <h3 className="mb-3 text-xl font-bold">{children}</h3>
    ),
    [BLOCKS.UL_LIST]: (_node: any, children: any) => (
      <ul className="mb-4 list-inside list-disc space-y-2">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (_node: any, children: any) => (
      <ol className="mb-4 list-inside list-decimal space-y-2">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (_node: any, children: any) => (
      <li className="ml-4 [&>p]:m-0 [&>p]:inline">{children}</li>
    ),
    [INLINES.HYPERLINK]: (node: any, children: any) => {
      const uri = node.data.uri

      if (!isValidUrl(uri)) {
        return <span className="text-secondary-600">{children}</span>
      }

      return (
        <a
          href={uri}
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary-600 underline hover:no-underline"
        >
          {children}
        </a>
      )
    },
  },
}

export const parseRichText = (richText: any) => {
  if (!richText?.json) return null

  return documentToReactComponents(richText.json as Document, richTextOptions)
}
