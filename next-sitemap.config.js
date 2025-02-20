/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://cratour.al',
	generateRobotsTxt: true, // (optional)
	changefreq: 'weekly',
	sitemapSize: 7000,
};
