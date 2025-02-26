import { City } from '@/types/tour';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
	city: City;
};

const CityCard = ({ city }: Props) => {
	return (
		<Link
			href={`/what-to-visit-in-albania/cities/${city.slug}`}
			className='flex flex-row items-center gap-3 md:gap-6 border p-2 border-gray-300 rounded-xl relative hover:border-green-300 '
		>
			<div className='flex justify-center items-center  h-[140px] w-[140px] '>
				<Image src='/png/pinBig.png' width={80} height={80} alt={city.title} className='bg-cover  ' />
			</div>

			<div className='flex flex-col gap-4 w-fit'>
				<h1 className='font-semibold'>{city.title}</h1>
				<p className='h-[72px] text-base overflow-hidden overflow-ellipsis line-clamp-3'>{city.desc}</p>
			</div>
		</Link>
	);
};

export default CityCard;
