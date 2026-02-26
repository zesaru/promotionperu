module.exports = {
  siteUrl: 'https://www.peruinjapan.org', 
  generateRobotsTxt: true, 
  sitemapSize: 7000, 
  outDir: './public',
  exclude: ['/admin', '/admin/*'],
  additionalPaths: async (config) => [
    await config.transform(config, '/paz-de-hiroshima'),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/admin/*'],
      },
    ],
    additionalSitemaps: [
      'https://www.peruinjapan.org/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'daily',
      priority: path === '/' ? 1.0 : 0.8,
      lastmod: new Date().toISOString(),
    }
  },
};