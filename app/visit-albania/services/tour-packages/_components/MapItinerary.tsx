import FullScreenModal from '@/components/FullScreenModal';
import MapWithItinerary from '@/components/MapWithItinerary';

import { Itinerary } from '@/types/tour';
import Image from 'next/image';
import React, { useState } from 'react';

type Props = {
	items: Itinerary[];
	title: string;
};

const MapItinerary = ({ items, title }: Props) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	console.log('🚀 ~ MapItinerary ~ items:', items);

	if (!items.length) return;

	return (
		<div className='border  my-10  w-full flex px-2 md:px-12 py-6'>
			<div className='rounded-xl overflow-hidden w-[360px] md:w-[700px] lg:w-[740px] relative'>
				<MapWithItinerary items={items} height={360} />

				<div
					className='absolute hover:cursor-pointer top-4 right-4 px-4 py-3 bg-white rounded-full z-50 flex justify-around items-center gap-4'
					onClick={() => setIsModalOpen(true)}
				>
					<Image src='/png/street-map.png' alt='tour street map overview' width={24} height={24} />

					<p>View Trip Details</p>
				</div>
			</div>

			<FullScreenModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<h2 className='text-2xl font-bold mb-4'>{title}</h2>
				<div className='rounded-xl overflow-hidden w-[270px] md:w-[640px] lg:w-[790px] relative'>
					<MapWithItinerary items={items} height={450} />
				</div>
				<div className='h-96 bg-gray-100 mt-4 flex items-center justify-center'>Scrollable content area</div>
			</FullScreenModal>
		</div>
	);
};

export default MapItinerary;
