import React from 'react';
import AttractionDetailsPage from '../_comp/AttractionDetailsPage';
import { Metadata } from 'next';
import { fetchAttraction } from '@/lib/query/attractions';

export async function generateMetadata({ params }: any): Promise<Metadata> {
	if (!params?.slug || typeof params.slug !== 'string') {
		return {
			title: 'Tour Not Found - Cratour.al',
			description: 'This tour package is not available.',
		};
	}

	try {
		const attraction = await fetchAttraction(params.slug);
		if (!attraction) {
			return {
				title: 'Tour Not Found - Cratour.al',
				description: 'This tour package is not available.',
			};
		}

		const title = attraction.seo?.metaTitle || attraction.title;
		const desc = attraction.seo?.metaDescription || attraction.tags.join(',');
		const imageUrl = attraction.cover?.url || '';

		return {
			title: `${title} - Cratour.al`,
			description: desc,
			openGraph: {
				title,
				description: desc,
				images: imageUrl ? [{ url: imageUrl }] : [],
				url: `${process.env.NEXT_PUBLIC_SITE_URL}/visit-albania/attractions/${params.slug}`,
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

export default async function AttractionPage({ params }: any) {
	if (!params?.slug || typeof params.slug !== 'string') {
		return <div>Error: Invalid attraction slug.</div>;
	}

	return <AttractionDetailsPage slug={params.slug} />;
}
