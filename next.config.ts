import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		// domains: ['res.cloudinary.com'], // Allow Cloudinary images
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
			}, // Allow Cloudinary images
		],
	},
};

export default nextConfig;
