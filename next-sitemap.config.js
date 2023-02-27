/** @type {import('next-sitemap').IConfig} */

const SITE_URL = 'https://nicolasmontone.com'

module.exports = {
  siteUrl: SITE_URL,
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
      `${SITE_URL}/sitemap.xml`,
      `${SITE_URL}/server-sitemap.xml`,
    ],
  },
}
