import { default as NextHead } from 'next/head'

import { Props } from './Head.types'

const DESCRIPTION = 'Nicolás Montone - Portfolio and Blog'

const Head = ({ title, description, path, image }: Props): JSX.Element => (
  <NextHead>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={description || DESCRIPTION} />
    {/* Open graph */}
    <meta property="og:site_name" content="Nicolás Montone" />
    {/* this check is to not get undefined values */}
    {title && <meta property="og:title" content={title} />}
    <meta property="og:description" content={description || DESCRIPTION} />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={image} />
    
    <meta
      property="og:url"
      content={`https://nicolasmontone.com/${path || ''}`}
    />

    {/* end of social media meta tags */}
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description || DESCRIPTION} />

    <link rel="icon" href="/icon-light.svg" />
  </NextHead>
)

export default Head
