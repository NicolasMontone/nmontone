/** @type {import('next-sitemap').IConfig} */

// NEXT_PUBLIC_VERCEL_URL env is the name of the site, ie: pluggy.ai
const siteUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'https://nicolasmontone..com'

module.exports = {
  siteUrl,
  exclude: ['/404'],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: ['/api/*', '/downloads/'],
      },
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [
      `${siteUrl}/sitemap.xml`,
      `${siteUrl}/server-sitemap.xml`,
    ],
  },
}
