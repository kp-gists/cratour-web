import { images } from '@/utils/constants/images';
import Image from 'next/image';

export default function Home() {
	return (
		<div className='flex justify-center items-center gap-4 flex-col'>
			<div className='w-full justify-between flex items-center bg-white mb-4 shadow  px-10 py-2'>
				<div className='flex justify-start items-center gap-1 flex-row'>
					<Image src={images.map} width={44} height={70} alt='asd' />
					<Image src={images.cratour} width={210} height={70} alt='asd' />
				</div>
				<div>
					<Image src={images.phoneCall} width={28} height={28} alt='asd' />
				</div>
			</div>
			<h1>Hi CraTour</h1>
			<Image src={'/svg/Trip-amico.svg'} width={500} height={500} alt='asd' />
			<Image src={images.boutique} width={256} height={256} alt='asd' />

			{/* TODO landing */}

			{/* HERO section */}

			{/* services splash layout with tabs bar */}

			{/* Tours Layout simple descriptions with ctas */}

			{/* Travel features things to do on a tour */}

			{/* Memories and blog sections */}
		</div>
	);
}
