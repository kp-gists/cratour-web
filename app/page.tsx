'use client';

import './globals.css';
import Services from '@/components/landing/Services';
import Hero from '@/components/landing/Hero';
import CitiesLayout from '@/components/landing/CitiesLayout';
import TravelLayout from '@/components/landing/TravelLayout';
import ContactUs from '@/components/landing/ContactUs';
import Timeline from './visit-albania/services/tour-packages/_components/Timeline';

export default function Home() {
	// const { error, isError, isLoading, packages, refetch } = useGetAllPackages();
	// console.log({ error, isError, isLoading, packages });
	return (
		<div className='w-full flex justify-center items-center  flex-col pb-10  h-full overflow-y-scroll '>
			{/* TODO landing */}

			{/* HERO section */}
			<Hero />

			<Timeline />

			<Services />

			<TravelLayout />

			{/* City layout */}
			<CitiesLayout />

			{/* Tours Layout simple descriptions with ctas */}

			{/* Travel features things to do on a tour */}

			<ContactUs />
		</div>
	);
}
