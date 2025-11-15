/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: 'marc.gavanier.com',
  generateRobotsTxt: true,
  exclude: ['/manifest.webmanifest'],
  outDir: './out',
  changefreq: 'monthly'
};
