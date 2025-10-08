import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/', '/api/', '/_next/', '/static/'],
    },
    sitemap: 'https://classdesk.app/sitemap.xml',
    host: 'https://classdesk.app',
  }
}
