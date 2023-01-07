import { default as NextHead } from 'next/head'

import { Props } from './Head.types'

const Head = ({ title, description, path }: Props): JSX.Element => (
  <NextHead>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={description} />
    {/* Open graph */}
    <meta
      property="og:site_name"
      content="Nicolás Montone - Fullstack dev, solving problems with technology"
    />
    {/* this check is to not get undefined values */}
    {title && <meta property="og:title" content={title} />}
    <meta property="og:description" content={description} />

    <meta
      property="og:url"
      content={`https://nicolasmontone.com/${path || ''}`}
    />

    {/* end of social media meta tags */}
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />

    <link rel="icon" href="/favicon.ico" />
  </NextHead>
)

export default Head
