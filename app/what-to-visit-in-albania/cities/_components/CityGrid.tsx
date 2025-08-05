'use client'

import { useFetchAllCities } from '@/hooks/useCities'
import Image from 'next/image'
import { Spin } from 'antd'
import { City } from '@/types/tour'
import Link from 'next/link'
import { MapPin } from 'lucide-react'

const CityGrid = () => {
	const { data: cities, isLoading, isError } = useFetchAllCities()

	if (isLoading) return <Spin className='block mx-auto mt-10' />
	if (isError) return <div className='text-red-500'>Failed to load cities</div>
	const totalCities = cities.length
	return (
		<div id='cities-grid' className='pt-6'>
			<header className='mt-4 md:mt-20 w-full  relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16 px-6 rounded-3xl shadow-lg mb-10'>
				<div className='max-w-5xl mx-auto text-center'>
					<h1 className='text-4xl md:text-6xl font-bold drop-shadow-lg'>Explore the Cities of Albania</h1>
					<p className='mt-3 text-lg md:text-xl text-white/90 max-w-2xl mx-auto'>
						Discover {totalCities}+ cities, from historic towns to coastal gems, each with unique culture and landscapes.
					</p>
				</div>

				{/* ✅ Stats */}
				<div className='mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto'>
					<div className='bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center shadow'>
						<h3 className='text-3xl font-bold'>{totalCities}</h3>
						<p className='text-sm text-white/80'>Total Cities</p>
					</div>
					<div className='bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center shadow'>
						<h3 className='text-3xl font-bold'>3</h3>
						<p className='text-sm text-white/80'>UNESCO Sites</p>
					</div>
					<div className='bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center shadow'>
						<h3 className='text-3xl font-bold'>476 km</h3>
						<p className='text-sm text-white/80'>Coastline</p>
					</div>
					<div className='bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center shadow'>
						<h3 className='text-3xl font-bold'>300+ days</h3>
						<p className='text-sm text-white/80'>Sunshine</p>
					</div>
				</div>
			</header>
			<section className='mt-10 max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{cities?.map((city: City) => (
					<Link
						href={`/what-to-visit-in-albania/cities/${city.slug}`}
						key={city.documentId}
						className='group relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition hover:cursor-pointer'
					>
						{city.cover?.url && (
							<Image
								src={city.cover.url}
								alt={city.title}
								width={400}
								height={250}
								className='w-full h-48  object-cover group-hover:scale-110 transition duration-700 ease-in-out'
							/>
						)}
						<div className='p-4 flex justify-start gap-3 items-baseline'>
							<div className='rounded-full text-red-500 hover:opacity-90 transition'>
								<MapPin size={20} />
							</div>
							<h2 className='text-2xl font-semibold'>{city.title}</h2>
						</div>
						{city?.seo?.metaTitle && <p className='px-4 pb-4 text-gray-600'>{city.seo.metaTitle}</p>}
					</Link>
				))}
			</section>
		</div>
	)
}

export default CityGrid
