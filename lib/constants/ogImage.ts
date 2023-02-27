const siteUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'https://nicolasmontone.com'

export function buildOgImageUrl(title: string): string {
  return `${siteUrl}/api/og?title=${title}`
}
