import { default as NextHead } from 'next/head'

import { Props } from './Head.types'

const DESCRIPTION = 'Nicolás Montone'

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
    <meta name="twitter:title" content={title} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:description" content={description || DESCRIPTION} />
    <meta property="og:author" content="Nicolás Montone" />
    <meta property="og:author:email" content="montonenicolas01@gmaiil.com" />
    <meta property="og:author:url" content="https://nicolasmontone.com" />
    <meta property="og:author:username" content="nicolasmontone" />
    <meta name="twitter:creator" content="@montonenico" />=
    <link rel="icon" href="/icon-light.svg" />
  </NextHead>
)

export default Head
