import Image from 'next/image'
import CityGrid from './_components/CityGrid'
import { dehydrate, QueryClient, HydrationBoundary } from '@tanstack/react-query'
import { getAllCities } from '@/hooks/useCities'
import ExploreBtn from './_components/ExploreBtn'
import ContactBanner from '@/components/ctas/ContactBanner'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Cratour | Cities in Albania',
	description: 'Explore the beautiful cities of Albania, from Tirana to Saranda. Discover rich culture, history, and stunning landscapes.',
	openGraph: {
		title: 'Cratour | Cities in Albania',
		description: 'Explore breathtaking landscapes, rich culture, and historic cities waiting for you.',
		url: 'https://cratour.al/what-to-visit-in-albania/cities',
		images: [
			{
				url: '/webp/cities-grid.webp',
				width: 1200,
				height: 630,
				alt: 'Map of Albania Cities',
			},
		],
	},
	alternates: {
		canonical: 'https://cratour.al/what-to-visit-in-albania/cities',
	},
}

export default async function CitiesPage() {
	const queryClient = new QueryClient()
	await queryClient.prefetchQuery({
		queryKey: ['cities'],
		queryFn: () => getAllCities(),
	})
	const dehydratedState = dehydrate(queryClient)

	return (
		<div className='min-h-screen bg-gradient-to-b text-gray-800 flex flex-col items-center justify-start relative gap-10 md:gap-20 w-full'>
			<div className='relative z-10 px-4 my-10 w-full text-center mx-auto'>
				<h1 className='text-3xl sm:text-4xl md:text-6xl font-bold drop-shadow-2xl'>Discover the Hidden Gems of Albania</h1>
				<p className='mt-3 text-base sm:text-lg md:text-2xl drop-shadow-lg'>
					Explore breathtaking landscapes, rich culture, and historic cities waiting for you.
				</p>
				<ExploreBtn />
			</div>

			<header className='relative w-full min-h-[500px] md:min-h-[800px] lg:min-h-[1200px] flex flex-col items-center justify-center text-center shadow-lg rounded-2xl overflow-hidden'>
				{/* Background Image */}
				<Image src='/webp/cities-grid.webp' alt='Map of Albania cities' fill priority className='absolute inset-0 object-cover z-0 bg-black' />

				{/* Gradient Overlay */}
				<div className='absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/10 z-0'></div>

				{/* Hero Content */}
				<div className='relative z-10 px-4 shadow-md'>
					<h1 className='text-3xl sm:text-4xl md:text-6xl font-bold text-white drop-shadow-2xl'>Discover Albania</h1>
					<p className='mt-3 text-base sm:text-lg md:text-2xl text-white/90 drop-shadow-lg max-w-xl mx-auto'>
						Explore the beauty, culture, and history of every city
					</p>
				</div>
			</header>

			<ContactBanner />

			{/* Cities Grid Below */}
			<HydrationBoundary state={dehydratedState}>
				<CityGrid />
			</HydrationBoundary>
		</div>
	)
}
