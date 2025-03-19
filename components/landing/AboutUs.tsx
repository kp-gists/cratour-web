import { aboutUs } from '@/constants/aboutUs';
import { MapPinCheckInside } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
type Props = {
	lang?: LanguageKeys;
};

type LanguageKeys = keyof typeof aboutUs;

const AboutUs = ({ lang = 'english' }: Props) => {
	const data = aboutUs[lang];

	return (
		<div className='max-w-[1400px] mx-auto py-6 md:py-8 flex flex-col justify-center gap-8 px-4'>
			<h1 className='font-semibold text-3xl mx-auto'>{data.title}</h1>
			<div className='flex flex-col md:flex-row justify-start md:justify-between gap-6 md:gap-8 '>
				<Image src={'/jpg/about-us.jpeg'} width={360} height={220} alt='' className='rounded-lg ring ring-cyan-400' />

				<div className='flex flex-col gap-4 w-full px-2 md:px-4 py-2 md:w-[640px]'>
					{data.ps.slice(0, 3).map((p) => (
						<p key={p.key}>{p.text}</p>
					))}
				</div>
			</div>

			<div className='flex gap-4 flex-col px-2'>
				<div className='text-2xl font-semibold' dangerouslySetInnerHTML={{ __html: `${data.birth.title}` }}></div>
				<div dangerouslySetInnerHTML={{ __html: `${data.birth.text}` }} className='max-w-full md:max-w-[720px]'></div>
			</div>

			<div className='px-2'>
				<h3 className='mb-4 text-xl font-semibold italic'>{data.whatWeOffer.title}</h3>
				<div className='flex flex-col justify-start gap-3'>
					{data.whatWeOffer.offers.map((offer) => (
						<div key={offer.slug} className='flex flex-col md:flex-row gap-2 mb-2'>
							<div className='flex items-center gap-2'>
								<MapPinCheckInside className='text-green-600' />
								<div className='capitalize font-semibold'>{offer.slug}</div>
							</div>
							<div className='hidden md:block'> - </div>
							<p className='text-sm px-2'>{offer.p}</p>
						</div>
					))}
				</div>
			</div>

			<div className='w-full flex justify-center px-1'>
				<Link
					href={'#craft'}
					className='mx-auto w-fit text-center text-lg hover:bg-cyan-400 px-4 md:px-6 py-2 rounded-full border border-cyan-400 hover:text-stone-800 font-semibold hover:scale-105'
				>
					{data.cta}
				</Link>
			</div>
		</div>
	);
};

export default AboutUs;
