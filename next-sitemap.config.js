/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://cratours.com',
	generateRobotsTxt: true, // (optional)
	changefreq: 'daily',
	sitemapSize: 7000,

	// ...other options
};
