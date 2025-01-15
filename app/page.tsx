import './globals.css';
import Services from '@/components/landing/Services';
import Hero from '@/components/landing/Hero';
import CitiesLayout from '@/components/landing/CitiesLayout';
import TravelLayout from '@/components/landing/TravelLayout';

export default function Home() {
	return (
		<div className='w-full flex justify-center items-center  flex-col pb-10  h-full overflow-y-scroll '>
			{/* TODO landing */}

			{/* HERO section */}
			<Hero />

			<Services />

			<TravelLayout />

			{/* City layout */}
			<CitiesLayout />

			{/* Tours Layout simple descriptions with ctas */}

			{/* Travel features things to do on a tour */}

			{/* Memories and blog sections */}
		</div>
	);
}
