/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import AttractionDetailsPage from '../_comp/AttractionDetailsPage';
import { Metadata } from 'next';
import { fetchAttraction } from '@/lib/query/attractions';

export async function generateMetadata({ params }: any): Promise<Metadata> {
	if (!params?.slug || typeof params.slug !== 'string') {
		return {
			title: 'Attraction Not Found - Cratour.al',
			description: 'This Attraction is not available.',
			alternates: {
				canonical: 'https://cratour.al/what-to-visit-in-albania/attractions/',
			},
		};
	}

	try {
		const attraction = await fetchAttraction(params.slug);
		const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cratour.al';
		if (!attraction) {
			return {
				title: 'Attraction Found - Cratour.al',
				description: 'This Attraction is not available.',
				alternates: {
					canonical: 'https://cratour.al/what-to-visit-in-albania/attractions/',
				},
			};
		}

		const title = attraction.seo?.metaTitle || attraction.title;
		const desc = attraction.seo?.metaDescription;
		const imageUrl = attraction.cover?.url || '';

		return {
			title: `${title} - Cratour.al`,
			description: desc,
			openGraph: {
				title,
				description: desc,
				images: imageUrl ? [{ url: imageUrl }] : [],
				url: `${siteUrl}/what-to-visit-in-albania/attractions/${params.slug}`,
			},
			twitter: {
				card: 'summary_large_image',
				title,
				description: desc,
				images: imageUrl ? [imageUrl] : [],
			},
			alternates: {
				canonical: `${siteUrl}/what-to-visit-in-albania/attractions/${params.slug}`,
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
