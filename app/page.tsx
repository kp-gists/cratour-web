import './globals.css';
import Services from '@/components/landing/Services';
import Hero from '@/components/landing/Hero';

export default function Home() {
	return (
		<div className='w-full flex justify-center items-center gap-4 flex-col bg-cyan-100 h-full overflow-scroll '>
			{/* TODO landing */}

			{/* HERO section */}
			<Hero />

			<Services />

			{/* Tours Layout simple descriptions with ctas */}

			{/* Travel features things to do on a tour */}

			{/* Memories and blog sections */}
		</div>
	);
}
