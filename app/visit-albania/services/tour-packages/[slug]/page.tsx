import { fetchSeoPackageDetailsBySlug } from '@/lib/query/tour-packages';
import { Metadata } from 'next';
import TourDetailsPage from '../_components/TourDetailsPage';

export async function generateMetadata({ params }: any): Promise<Metadata> {
	const { slug } = params; // ❌ Remove 'await'

	try {
		const tourPackage = await fetchSeoPackageDetailsBySlug(slug);
		if (!tourPackage) {
			return {
				title: 'Tour Not Found - Cratour.al',
				description: 'This tour package is not available.',
			};
		}

		const title = tourPackage.seo?.metaTitle || tourPackage.title;
		const desc = tourPackage.seo?.metaDescription || tourPackage.desc;
		const imageUrl = tourPackage.cover?.url || '';

		return {
			title: `${title} - Cratour.al`,
			description: desc,
			openGraph: {
				title,
				description: desc,
				images: imageUrl ? [{ url: imageUrl }] : [],
				url: `${process.env.NEXT_PUBLIC_SITE_URL}/visit-albania/services/tour-packages/${slug}`,
			},
			twitter: {
				card: 'summary_large_image',
				title,
				description: desc,
				images: imageUrl ? [imageUrl] : [],
			},
		};
	} catch (error) {
		console.error('Metadata fetch error:', error);
		return { title: 'Error fetching metadata' };
	}
}

export default async function TourPage({ params }: any): Promise<any> {
	const { slug } = params; // ❌ Remove 'await'
	return <TourDetailsPage slug={slug} />;
}
