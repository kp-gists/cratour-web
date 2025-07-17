'use client'

import React, { Suspense } from 'react'
import Image from 'next/image'
import { BadgeEuro, Sun, SlidersHorizontal, HeartPulse } from 'lucide-react'
import CarsFilters from '@/components/filters/CarsFilters'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const carsType = [
	{ value: 'sedan', label: 'Sedan', icon: '/png/car1.png' },
	{ value: 'suv', label: 'SUV', icon: '/png/car2.png' },
	{ value: 'mini-van', label: 'Mini-Van', icon: '/png/minivan.png' },
]

const whyUsCarRent = [
	{
		key: 'affordable',
		title: 'Affordable Prices',
		desc: 'Competitive rates with no compromise on quality.',
		icon: <BadgeEuro className='text-teal-600' />,
	},
	{
		key: 'no-hidden-fees',
		title: 'No Hidden Fees',
		desc: 'Transparent pricing with zero unexpected costs.',
		icon: <Sun className='text-yellow-400' />,
	},
	{
		key: 'flexible-options',
		title: 'Flexible Options',
		desc: 'Filter by type, capacity or fuel type',
		icon: <SlidersHorizontal />,
	},
	{
		key: 'local-support',
		title: 'Local Support',
		desc: '24/7 assistance from a local, trusted team.',
		icon: <HeartPulse className='text-red-500' />,
	},
]

const RentCarServicePage = () => {
	const path = usePathname()

	return (
		<div className='w-full px-4 py-10 max-w-7xl mx-auto'>
			{/* Hero Section */}
			<div
				className='relative w-full h-[400px] md:h-[600px] bg-cover bg-center text-white rounded-xl'
				style={{ backgroundImage: "url('/webp/albania-llogara.webp')" }}
			>
				<div className='absolute inset-0 bg-black/40 rounded-xl'></div> {/* dark overlay */}
				<div className='relative z-10 flex flex-col items-center justify-center h-full text-center px-4'>
					<h1 className=' text-3xl md:text-5xl font-bold'>Explore Albania by Car - Easy, Affordable, Local</h1>
					<p className='mt-4 max-w-xl hidden md:block'>
						Rent your perfect ride for city drives or mountain escapes. Honest pricing, local support, and reliable vehicles — all in one place.
					</p>
					<Link
						href={path + '#list-cars'}
						className='mt-6 inline-block text-white font-semibold px-5 py-2 rounded-lg backdrop-blur-md bg-blue-500/30 border border-blue-300 hover:bg-blue-500/50 hover:border-blue-400 transition duration-200 shadow-md'
					>
						Browse Cars
					</Link>
				</div>
			</div>

			<section className='px-4 my-10'>
				<h3 className='pb-4 pl-6 font-semibold font-mono'>Why Choose cratour for renting a car:</h3>
				<div className='flex flex-wrap px-4  gap-4'>
					{whyUsCarRent.map((w) => {
						return (
							<div className='flex flex-col gap-2 w-[276px] px-3 py-2 bg-white border border-gray-200 rounded-md' key={w.key}>
								<div className='flex gap-2 items-center'>
									<div className='rounded-lg p-2 flex justify-center items-center bg-slate-100 '>{w.icon}</div>
									<p className='text-xl font-semibold '>{w.title}</p>
								</div>
								<p className='text-sm w-64'>{w.desc}</p>
							</div>
						)
					})}
				</div>
			</section>

			<div className='relative pt-4 w-full  bg-contain bg-no-repeat bg-center flex justify-center items-center' style={{ backgroundImage: "url('')" }}>
				<Image src='/webp/rent-car.webp' width={400} height={400} alt='rent a car with cratour' className='md:w-fit md:h-[600px]' />
			</div>

			<div className='mt-10'>
				<Suspense fallback={<div>Loading filters...</div>}>
					<CarsFilters />
				</Suspense>
			</div>
		</div>
	)
}

export default RentCarServicePage
